import { useRouter } from "next/router"

function BlogPostsPage() {
    const router = useRouter();
    console.log(router.query)


    return (
        <div>
            the blog posts page
        </div>
    )
}

export default BlogPostsPage
