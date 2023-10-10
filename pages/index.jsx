import Link from "next/link"

function Home() {


    return (
        <div>
            <h1>Home page</h1>
            <br />
            <br />
            <br />
            <ul>
                <li>
                    <Link href='/portfolio'>portfolio</Link>
                </li>
                <li>
                    <Link href='/clients '>Clients</Link>
                </li>
                <li>
                    <Link href=''></Link>
                </li>
            </ul>
        </div>
    )
}

export default Home
