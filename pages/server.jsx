import Link from "next/link";
import { apiFetchAllActivityHistories } from "../api/apiActivityHistory";
import Head from "next/head";

function ServerSide(props) {
    return (
        <div style={{ marginLeft: '50px', marginTop: '50px' }}>
            <Head>
                <title>
                    SSR
                </title>
            </Head>
            {props.activityHistories.map(activity => <li key={activity.id}><Link href={`/${activity.id}`} >{activity.title}</Link> </li>)}
        </div>
    )
}

export default ServerSide


export async function getServerSideProps() {
    const data = await apiFetchAllActivityHistories()
    let isAnyData = data.length === 0;

    return {
        props: {
            activityHistories: data
        },
        notFound: isAnyData,
    }

}