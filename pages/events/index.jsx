import { useRouter } from "next/router"
import EventsList from "../../components/events/event-list"
import EventsSearch from "../../components/events/events-search"
import { getAllEvents } from "../../dummy-data"


function AllEventsPage() {
    // get all events
    const events = getAllEvents()
    const router = useRouter()
    // handler
    function findEventsHandler(year, month) {
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath)
    }
    // ui 
    return (
        <>
            <EventsSearch onSearch={findEventsHandler} />
            <EventsList items={events} />
        </>
    )
}

export default AllEventsPage
