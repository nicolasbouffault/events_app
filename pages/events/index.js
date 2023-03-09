import Image from 'next/image';

const EventsPage = ({data}) => {
    return (
        <div>
            <h1>Event Page</h1>
            <div>
                {data.map(ev => (
                    <a key={ev.id} href={`/events/${ev.id}`}>
                        <Image width={300} height={300} alt={ev.title} src={ev.image} />
                        <h2>{ev.title}</h2>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default EventsPage;

export async function getStaticProps() {
    const {events_categories} = await import('/data/data.json')
    return {
        props: {
            data: events_categories
        }
    }
}
