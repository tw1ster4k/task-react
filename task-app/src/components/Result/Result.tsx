import "./Result.css"
import { cn } from '@bem-react/classname'
import Lego from "../../img/LegoMan.png"
import { Link } from "react-router-dom"

const Result = () => {
    const cnResult = cn("Result")
  return (
    <div  className={cnResult()}>
        <img src={Lego} className={cnResult("Image")} />
        <button className={cnResult("SaveButton")}>Save</button>
        <Link to="/" style={{textDecoration:"none"}}>
            <button className={cnResult("MoreButton")}>More pics</button>        
        </Link>
    </div>
  )
}

export default Result