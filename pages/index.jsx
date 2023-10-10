import EventsList from "../components/event-list";
import { getFeaturedEvents } from "../dummy-data"

function HomePage() {
    // get all events
    const featuredEvents = getFeaturedEvents();

    //ui
    return (
        <div>
            <EventsList items={featuredEvents} />
        </div>
    )
}

export default HomePage
