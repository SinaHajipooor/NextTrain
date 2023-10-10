import Link from "next/link"
import classes from './event-item.module.css'


function EventItem({ event }) {
    // convert date 
    const readableDate = new Date(event.date).toLocaleDateString('fa-IR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    // convert address
    const formattedAddress = event.location.replace(', ', '\n')
    // define the explore link
    const exploreLink = `/event/${event.id}`;
    // ui
    return (
        <li className={classes.item}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={'/' + event.image} alt={event.title} />
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{event.title}</h2>
                    <div className={classes.date}>
                        <time>{readableDate}</time>
                    </div>
                    <div className={classes.address}>
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Link href={exploreLink}>Explore Event </Link>
                </div>
            </div>
        </li>
    )
}

export default EventItem
