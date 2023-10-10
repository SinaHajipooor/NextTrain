import Link from "next/link"

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
        <li>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={'/' + event.image} alt={event.title} />
            <div>
                <div>
                    <h2>{event.title}</h2>
                    <div>
                        <time>{readableDate}</time>
                    </div>
                    <div>
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div>
                    <Link href={exploreLink}>Explore Event </Link>
                </div>
            </div>
        </li>
    )
}

export default EventItem
