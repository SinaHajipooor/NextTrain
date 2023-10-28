function Banner({ title, subTitle, imageUrl }) {

    return (
        <div>
            <h3>{title}</h3>
            <h3>{subTitle}</h3>
            <div style={{ backgroundImage: imageUrl }}></div>
        </div>
    )
}

export default Banner
