import { useRouter } from "next/router"
import { getEventById } from "../../dummy-data";
import EventSummary from '../../components/event-detail/event-summary'
import EventLogistics from '../../components/event-detail/event-logistics'
import EventContent from '../../components/event-detail/event-content'


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
    return <>
        <EventSummary title={event.title} />
        <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
        <EventContent EventContent >
            <p>{event.description}</p>
        </EventContent>
    </>
}

export default EventDetailPage
