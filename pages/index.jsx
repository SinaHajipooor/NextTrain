import Link from "next/link";
import axiosConfig from "../utils/axios"

function HomePage(props) {
    return (
        <div style={{ marginLeft: '50px', marginTop: '50px' }}>
            {props.activityHistories.map(activity => <li key={activity.id}><Link href={`/${activity.id}`} >{activity.title}</Link> </li>)}
        </div>
    )
}

export default HomePage


export async function getStaticProps() {
    console.log('regenerated')
    const response = await axiosConfig.get('/api/profile/activity-history?user_id=1');
    const data = response.data.result.data;
    let isAnyData = data.length === 0;

    return {
        props: {
            activityHistories: data
        },
        revalidate: 10, // this is the time (in seconds ) that next.js should wait until it re-generate this page 
        notFound: isAnyData,
        // redirect : {
        //     destination : 'some-route'
        // }
    }

}