import "./Profile.css"
import { MostPopular, Title, Cards, Card,} from "../../components/index";

import logo_1 from '../../assets/images/popular-01.jpg' 
import logo_2 from '../../assets/images/popular-02.jpg'
import logo_3 from '../../assets/images/popular-03.jpg'
import logo_4 from '../../assets/images/popular-04.jpg'
import logo_5 from '../../assets/images/popular-05.jpg'
import logo_6 from '../../assets/images/popular-06.jpg'
import logo_7 from '../../assets/images/popular-07.jpg'
import logo_8 from '../../assets/images/popular-08.jpg'

let data = [{
            id : 1,
            img : logo_1,
            game:"fortnite",
            type:"Sandbox",
            rate:"4.8",
            dow : "2.3",
            },
            {
                id :2,
                img : logo_2,
                game:"PubG",
                type:"Battle S",
                rate:"5",
                dow : "10",
            },
            {
                id : 3,
                img : logo_3,
                game:"Data2",
                type:"Steam-x",
                rate:"3.6",
                dow : "1.6",
            },
            {
                id : 4,
                img : logo_4,
                game:"Cs-go",
                type:"Legendary",
                rate:"4",
                dow : "1.4",
            },
            {
                id : 5,
                img : logo_5,
                game:"Mini Craft",
                type:"Legendary",
                rate:"4.8",
                dow : "2.3",
            },
            {
                id : 6,
                img : logo_6,
                game:"Eagles",
                type:"Matrix Games",
                rate:"4.8",
                dow : "2.3",
            },
            {
                id : 7,
                img : logo_7,
                game:"Warface",
                type:"Max 3D",
                rate:"4.8",
                dow : "2.3",
            },
            {
                id : 8,
                img : logo_8,
                game:"Warcraft",
                type:"Legend",
                rate:"4.8",
                dow : "2.3",
            }

]

const Profile = () => {
  return (
    <div>
            <MostPopular>
                <Title>Most popular</Title>
                <Cards>
                   {data.map(card => <Card id={card.id} img={card.img} game={card.game} type={card.type} rate={card.rate} dow={card.dow}/>)}
                </Cards>
            </MostPopular>
    </div>
  )
}

export default Profile
