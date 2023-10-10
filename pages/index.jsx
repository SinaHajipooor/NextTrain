import { getFeaturedEvents } from "../dummy-data"

function HomePage() {
    // get all events
    const featuredEvents = getFeaturedEvents();

    return (
        <div>
            <h1>The Home page</h1>
        </div>
    )
}

export default HomePage
