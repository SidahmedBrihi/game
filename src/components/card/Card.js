import './Card.css'
import { AiFillStar, AiOutlineCloudDownload } from "react-icons/ai";





const Card = (props) => {
  return (
    <div className='card'>
        <img src={props.img} alt=""/>
        <div className='card-text'>
            <h6>{props.game} <p>{props.type}</p></h6>
            <div className='rate'>
               <h6><span style={{color:"yellow"}}><AiFillStar /></span>{props.rate}</h6>
               <p><span style={{color:"var(--main-color)"}}><AiOutlineCloudDownload /></span>{props.dow}M</p>
            </div>
        </div>
    </div>
  )
}

export default Card