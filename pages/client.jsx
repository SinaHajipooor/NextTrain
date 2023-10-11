import { useEffect, useState } from "react"
import { apiFetchAllActivityHistories } from "../api/apiActivityHistory"
import Link from "next/link"
import Head from "next/head"


function Test() {
    const [activities, setActivities] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        async function fetchActivities() {
            const data = await apiFetchAllActivityHistories();
            setActivities(data)
            setIsLoading(false)
        };
        fetchActivities()
    }, [])

    if (isLoading) return <p>loading ...</p>
    return (
        <div style={{ marginLeft: '50px', marginTop: '50px' }}>
            <Head>
                <title>client</title>
            </Head>
            {activities.map(activity => <li key={activity.id}><Link href={`/${activity.id}`} >{activity.title}</Link> </li>)}
        </div>
    )
}

export default Test
