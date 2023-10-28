import Banner from "../components/home/banner";
import Layout from "../components/layout/layout";

function HomePage() {
    return (
        <div >
            <Layout>
                <Banner title='Hi baby ' subTitle='when the fuck should i really even start ?' imageUrl='/static/test.jpg' />
            </Layout>
        </div>
    )
}

export default HomePage


// export async function getStaticProps() {
//     const data = await apiFetchAllActivityHistories()
//     let isAnyData = data.length === 0;

//     return {
//         props: {
//             activityHistories: data
//         },
//         revalidate: 10, // agar requeste jadidi biyayad va az re-generate shodane qabli bishtr az 10 saniye gozashte bashad , dobare page generate mishavad
//         notFound: isAnyData,
//     }

// }