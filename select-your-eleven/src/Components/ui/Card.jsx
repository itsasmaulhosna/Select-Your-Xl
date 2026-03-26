import React from 'react';
import  { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
// import Card from "../ui/Card";
const Card = ({player,setCoin,coin,setSelectedPlayers,selectedPlayers}) => {
    const [isSelected,setSelected]=useState(false)
    
    
     
     const handleChoosePlayer=()=>{
        let newCoin=coin-player.price;
    if(newCoin>=0){
        setCoin(coin-player.price)
    }
    else{
        alert('not enough coin')
        return;
    }
        alert (`${player.playerName} is selected`)
setSelected(true);
setSelectedPlayers([...selectedPlayers,player])

}
    return (
        <div>
          <div className="card bg-base-100  shadow-sm">
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
                <button onClick={(handleChoosePlayer)} disabled={isSelected} className="btn">{isSelected===true?'Selected': 'Choose Player'}</button>
              </div>
            </div>
          </div>  
        </div>
    );
};

export default Card;