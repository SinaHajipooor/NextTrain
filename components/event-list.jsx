import EventItem from "./event-item"

function EventsList({ items }) {
    return (
        <ul>
            {items.map(item => <EventItem key={item.id} />)}
        </ul>
    )
}

export default EventsList
