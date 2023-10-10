import { useRouter } from "next/router"

function ClientsProjectPage() {
    const router = useRouter()
    return (
        <div>
            <h1>the projects of a given client</h1>
            <br />
            <br />
            <button onClick={() => router.push('/clients/max/a ')}>Load project A</button>
        </div>
    )
}

export default ClientsProjectPage
