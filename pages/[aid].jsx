import Head from "next/head";
import { apiShowActivityHistory } from "../api/apiActivityHistory";

function ActivityDetail({ activityHistory }) {

    if (!activityHistory) return <p>is loading ...</p>

    return (
        <div>
            <Head>
                <title>
                    Activity detail
                </title>
            </Head>
            <h1>{activityHistory.title}</h1>
            <h2>{activityHistory.address}</h2>
        </div>
    )
};

export default ActivityDetail

// ----------- approach 1 ----------------

// export async function getStaticProps(context) {
//     // params is an object full of key-value
//     const { params } = context;
//     const activityId = params.aid;

//     const data = await apiShowActivityHistory(activityId)
//     return {
//         props: { 
//             activityHistory: data
//         }
//     }
// }

// // to tel next.js which instances of this dynamic page should be generated
// export async function getStaticPaths() {

//     const response = await axiosConfig.get('/api/profile/activity-history?user_id=1');
//     const data = response.data.result.data;

//     const ids = data.map(activity => activity.id);
//     const pathsWithParams = ids.map(id => ({ params: { aid: id.toString() } }))

//     return {
//         paths: pathsWithParams,
//         fallback: false,
//         // fallback: 'blocking', // when we have a lot pages , in this case we dont have to wory about excepting null immediestly because it will wait for data to be fetched .
//         //     fallback : true  , in this situation we tell next that even the pages which are not listed in paths , can be valid pages that should be genarated but just when they are visited but they shouldnt pre-generated instaed   ( note : when we are using fallback set to true we should except null values because the data doesnt come immedietly)
//     }
// }

// ----------- approach 2 ----------------

export async function getServerSideProps(context) {

    const { params } = context;
    const activityId = params.aid;

    const data = await apiShowActivityHistory(activityId);

    return {
        props: {
            activityHistory: data
        },
    }
}


