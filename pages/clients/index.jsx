import Link from "next/link"

function ClientsPage() {
    return (
        <div>
            <h1> clients page</h1>
            <br />
            <br />
            <br />
            <ul>
                <li>
                    <Link href='/clients/max'> maximilian</Link>
                </li>
                <li>
                    <Link href='/clients/manu'>Manuel</Link>
                </li>
            </ul>
        </div>
    )
}

export default ClientsPage
