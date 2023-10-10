import Link from "next/link"

function Home() {
    return (
        <div>
            <br />
            <br />
            <Link href='/serverSide'>server page</Link>
            <br />
            <br />
            <Link href='/clientSide'>client page</Link>
        </div>
    )
}

export default Home
