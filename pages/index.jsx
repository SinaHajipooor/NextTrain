import Link from "next/link";
import { apiFetchAllActivityHistories } from "../api/apiActivityHistory";

function HomePage(props) {
    return (
        <div style={{ marginLeft: '50px', marginTop: '50px' }}>
            {props.activityHistories.map(activity => <li key={activity.id}><Link href={`/${activity.id}`} >{activity.title}</Link> </li>)}
        </div>
    )
}

export default HomePage


export async function getStaticProps() {
    const data = await apiFetchAllActivityHistories()
    let isAnyData = data.length === 0;

    return {
        props: {
            activityHistories: data
        },
        revalidate: 1, // agar requeste jadidi biyayad va az re-gerate shodane qabli bishtr az 10 saniye gozashte bashad , dobare page generate mishavad
        notFound: isAnyData,
    }

}