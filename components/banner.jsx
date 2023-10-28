function Banner({ title, subTitle, imageUrl }) {

    function handleOnPlay() { }

    return (
        <div>
            <div style={{ margin: '50px' }}>
                <h3>{title}</h3>
                <h3>{subTitle}</h3>
                <button style={{ height: '50px', width: '100px' }} onClick={handleOnPlay}>Play</button>
            </div>
            <div style={{ backgroundImage: `url(${imageUrl})`, width: '100%', height: '100%', position: 'absolute', backgroundSize: 'cover', backgroundPosition: '50% 50%' }}></div>
        </div>
    )
}

export default Banner
