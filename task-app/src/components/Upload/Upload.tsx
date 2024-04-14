import { cn } from "@bem-react/classname"
import { Link } from "react-router-dom"
import "./Upload.css"
import Restange from "../../img/Restange.png"
import Gallery from "../../img/gallery.png"
import Camera from  "../../img/camera.png"

const Upload = () => {
    const cnUpload = cn("Upload")
  return (
    <div className={cnUpload()}>
    <Link to="/">
        <button className={cnUpload("Link")}>
        ❮  Go back
        </button>
    </Link>
    <img className={cnUpload("Image")} src={Restange} />
    <div className={cnUpload("Download")}>
        <Link to="/result" style={{textDecoration:"none"}} >
            <div className={cnUpload('Option')}>
                <img src={Gallery} width={77} />
                <p>Choose photo from gallery</p>
            </div>
        </Link>
        <Link to="/result" style={{textDecoration:"none"}} >
            <div className={cnUpload('Option')}>
                <img src={Camera} width={77} />
                <p>Take photo with camera</p>
            </div>
        </Link>
    </div>
    </div>
  )
}

export default Upload