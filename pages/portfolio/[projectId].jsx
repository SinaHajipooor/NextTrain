import { useRouter } from "next/router"

function PortfolioProjectPage() {

    const router = useRouter()
    const projectId = router.query.projectId

    // ui
    return (
        <div>
            portfolio project page
        </div>
    )
}

export default PortfolioProjectPage
