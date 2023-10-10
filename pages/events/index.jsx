import EventsList from "../../components/events/event-list"
import EventsSearch from "../../components/events/event-search"
import { getAllEvents } from "../../dummy-data"


function AllEventsPage() {
    // get all events
    const events = getAllEvents()
    // ui
    return (
        <>
            <EventsSearch />
            <EventsList items={events} />
        </>
    )
}

export default AllEventsPage
