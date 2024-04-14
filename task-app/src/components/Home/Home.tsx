import { cn } from "@bem-react/classname"
import "./Home.css"
import { Link } from "react-router-dom"
import { useState } from "react"
import Restange from "../../img/Restange.png"
import Card from "../../blocks/Card/Card"

const Home = () => {
    const cnHome  =  cn("Home")
    const [data, setData] = useState([{img:Restange, description:"Lego"},{img:Restange, description:"Lego"}])
  return (
    <div className={cnHome()}>
        <header className={cnHome("Header")}>
            <h1 className={cnHome("H1")}>OneAI</h1>
            <Link to='/singin'>
                <button className={cnHome("Link")}>Sing in</button>
            </Link>
        </header>
        <div className={cnHome("Content")}>
            {
                data.map((el, index) => 
                    <Link style={{textDecoration:"none"}} to="/upload">
                        <Card  key={index}  img={el.img} description={el.description} />
                    </Link>
                )
            }
        </div>
        <footer className={cnHome("Footer")}>
            <p className={cnHome("Support")}>Get help at support@avgen.me</p>
            <p className={cnHome("Copyright")}>Copyright © 2024 Mook Ltd. All rights reserved.</p>
        </footer>
    </div>
  )
}

export default Home