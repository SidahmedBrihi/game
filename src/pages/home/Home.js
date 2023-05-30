import "./Home.css"
import {Hero , MostPopular, Title, Cards, Card, Gaming, Games, Game} from "../../components/index";

import logo_1 from '../../assets/images/popular-01.jpg' 
import logo_2 from '../../assets/images/popular-02.jpg'
import logo_3 from '../../assets/images/popular-03.jpg'
import logo_4 from '../../assets/images/popular-04.jpg'
import logo_5 from '../../assets/images/popular-05.jpg'
import logo_6 from '../../assets/images/popular-06.jpg'
import logo_7 from '../../assets/images/popular-07.jpg'
import logo_8 from '../../assets/images/popular-08.jpg'
import gaming_1 from '../../assets/images/game-01.jpg'
import gaming_2 from '../../assets/images/game-02.jpg'
import gaming_3 from '../../assets/images/game-03.jpg'
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
let GamingData = [
    {
        id: 9 ,
        img:gaming_1,
        name:'Dota 2',
        date:"24/8/2019",
        hours: "336",
        
    },
    {
        id: 10 ,
        img:gaming_2,
        name:'Fortnite',
        date:"02/06/2017",
        hours: "412",
        
    },
    {
        id: 11 ,
        img:gaming_3,
        name:'CS-GO',
        date:"17/05/2022",
        hours: "112",
        
    },
]

const Home = () => {
  return (
    <div>
      <Hero />
            <MostPopular>
                <Title>Most popular</Title>
                <Cards>
                   {data.map(card => <Card id={card.id} img={card.img} game={card.game} type={card.type} rate={card.rate} dow={card.dow}/>)}
                </Cards>
            </MostPopular>
            <Gaming>
                <Title>Your Gaming</Title>
                <Games>
                    {GamingData.map(game => <Game id={game.id} img={game.img} name={game.name} date={game.date} hours={game.hours} />)} 
                </Games>
            </Gaming>
    </div>
  )
}

export default Home