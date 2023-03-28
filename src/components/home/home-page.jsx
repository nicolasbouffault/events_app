import Link from "next/link"
import Image from "next/image"

export const HomePage = ({data}) => {
    return (
        <main>
            {data.map((ev) => (
            <Link key={ev.id} href={`/events/${ev.id}`} passHref legacyBehavior>
                <a href={`/events/${ev.id}`}>
                <Image width={300} height={300} alt={ev.title} src={ev.image} /> 
                <h2>{ev.title}</h2> 
                <p>{ev.description}</p>
                </a>
            </Link>
            ))}
        </main>
    )
}