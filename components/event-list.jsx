import EventItem from "./event-item"
import classes from './event-list.module.css'


function EventsList({ items }) {
    return (
        <ul className={classes.list}>
            {items.map(item => <EventItem key={item.id} event={item} />)}
        </ul>
    )
}

export default EventsList
