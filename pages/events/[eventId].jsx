import { useRouter } from "next/router"
import { getEventById } from "../../dummy-data";

function EventDetailPage() {
    // get the event id 
    const router = useRouter()
    const eventId = router.query.eventId;
    // get the event details 
    const event = getEventById(eventId);

    // there is no event 
    if (!event) {
        return <h1>No event found</h1>
    }

    // ui
    return <div></div>
}

export default EventDetailPage
