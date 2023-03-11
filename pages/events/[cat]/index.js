const EventsCatPage = () => {
    return (
        <div>
            <h1>Events in London</h1>
            <a href="/events/london/event1">Event 1</a>
            <a href="/events/london/event1">Event 2</a>
            <a href="/events/london/event1">Event 3</a>
            <a href="/events/london/event1">Event 4</a>
        </div>
    )
}

export default EventsCatPage

export async function getStaticPaths() {
    const {events_categories} = await import('/data/data.json')
    const allPaths = events_categories.map(ev => {
        return {
            params: {
                cat: ev.id.toString()
            }
        }
    })
    
    return {
        paths: allPaths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    console.log(context)
    return {
        props: {}
    }
}