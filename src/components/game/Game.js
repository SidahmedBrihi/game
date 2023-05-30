import './Game.css'


const Game = (props) => {
  return (
    <div className='game'>
      <img className='game-image' src={props.img} alt="" />
      <ul className='game-group'>
        <li className='game-items' id='1'>
           <h6>{props.name}</h6>
           <p>sandbox</p>
        </li>
        <li className='game-items' id='2'>
           <h6>Date Added</h6>
           <p>{props.date}</p>
        </li>
        <li className='game-items' id='3'>
           <h6>Hours Played</h6>
           <p>{props.hours}</p>
        </li>
        <li className='game-items' id='14'>
           <h6>Currently</h6>
           <p>Downloaded</p>
        </li>
      </ul>
      <a className='game-dow' href="">Download</a>
    </div>
  )
}

export default Game
