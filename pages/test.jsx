//App.js
// ...
import { Cloudinary } from "@cloudinary/url-gen";
import { byAngle } from "@cloudinary/url-gen/actions/rotate";
import { BsArrowClockwise, BsArrowCounterclockwise } from "react-icons/bs";

const App = () => {
    //     ...
    const [imageURL, setImageURL] = useState();
    const [rotateValue, setRotateValue] = useState(0);

    const rotateImages = () => {
        const cld = new Cloudinary({
            cloud: {
                cloudName: "cloud-name",
            },
        });
        const rotateImg = cld
            .image("image directory here")
            .rotate(byAngle(rotateValue));
        setImageURL(rotateImg.toURL());
    };

    //   ...

    useEffect(() => {
        //     ...
        rotateImages();
    });

    return (
        <div className="App">
            <h1>Zoom and Roatate Images in React.js</h1>
            <div className="gallery">
                ...
            </div>

            <div className="rotate">
                <img src={imageURL} alt="snow-boy" width={500} height={500} />
                <div className="controls m-3">
                    <button
                        onClick={() => setRotateValue(rotateValue - 90)}
                        className="m-1 btn-primary"
                    >
                        <BsArrowCounterclockwise />
                    </button>
                    <button
                        onClick={() => setRotateValue(rotateValue + 90)}
                        className="m-1 btn-primary"
                    >
                        <BsArrowClockwise />
                    </button>
                </div>
            </div>
        </div>
    );
};
export default App;
