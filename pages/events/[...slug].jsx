import { useRouter } from "next/router"
import { getFilteredEvents } from "../../dummy-data";

function FilteredEventsPage() {
    // extract data from url
    const router = useRouter()
    const filterData = router.query.slug
    const filteredYear = filterData[0];
    const filteredMonth = filterData[1];
    const numYear = +filteredYear;
    const numMonth = +filteredMonth;
    // loading
    if (!filterData) {
        return <p className="center">Loading ...</p>
    }
    // error
    if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
        return <p className="center">invalid filter</p>
    }
    // get filtered events
    const filteredEvents = getFilteredEvents({
        year: numYear, month: numMonth
    })
    if (!filteredEvents || filteredEvents.length === 0) {
        return <p> No events found</p>
    }

    // ui
    return (
        <div>
            <h1>filtered events</h1>
        </div>
    )
}

export default FilteredEventsPage
