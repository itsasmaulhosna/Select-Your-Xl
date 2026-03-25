
// import { FaUser } from "react-icons/fa";
// import { FaFlag } from "react-icons/fa";
 import Card from "../ui/Card";

const AvailablePlayers = ({players,setCoin,coin}) => {
    console.log(players)
   
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {
            players.map(player=>{
                console.log(player)
                return(
                    <div className='container mx-auto'>
                        <Card player={player} setCoin={setCoin} coin={coin}></Card>
            {/* <div className="card bg-base-100  shadow-sm">
  <figure>
    <img
      src={player.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title"><FaUser></FaUser> {player.playerName}</h2>
    <div className='flex gap-2 items-center'>
    <FaFlag />
<p>{player.playerCountry}</p>
<button className='btn'>{player.playerType}</button>

 </div>
 <div className="divider"></div>
<h2 className='font-bold'>Ratting{player.playeratting}</h2>
<div className='flex justify-between gap-4 font-bold'>
    <p>{player.battingStyle}</p>
    <p>{player.bowlingStyle}</p>
</div>
    
    <div className="card-actions justify-between items-center">
        <p>Price{player.price}</p>
      <button onClick={()=>setSelected(true)} disabled={isSelected} className="btn">{isSelected===true?'Selected': 'Choose Player'}</button>
    </div>
  </div>
</div> */}
        </div>
                )
            })
            }
        </div>
    );
};

export default AvailablePlayers;