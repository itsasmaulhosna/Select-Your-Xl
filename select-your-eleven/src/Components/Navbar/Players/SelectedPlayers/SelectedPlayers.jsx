import React from 'react';
import Players from '../Players';
import { MdDelete } from "react-icons/md";
import { FaUser } from "react-icons/fa";


const SelectedPlayers = ({selectedPlayers,setSelectedPlayers,coin,setCoin}) => {
    console.log(selectedPlayers)
    const handleSelectedPlayersDlt=(player)=>{
    console.log(player)
    const filteredPlayers=selectedPlayers.filter((selectedPlayers)=>selectedPlayers.playerName!== player.playerName)
    console.log(filteredPlayers)
    setSelectedPlayers(filteredPlayers)
    setCoin(coin+player.price)
}

    return (
        <div>
            {selectedPlayers.length===0? <div className='h-[300px] flex items-center justify-center flex-col gap-4'>
<h2 className='text-2xl font-bold'>No player yet</h2>
<p>Go to available to select</p>
            </div>
            :
                selectedPlayers.map((player)=>{
return <div className='flex items-center gap-5 justify-between p-10 rounded-2xl border'>
    <div>
        <img src='{player.image}'/>
        <div>
            <h2 className='flex items-center gap-4 font-bold text-3xl'><FaUser />{player.playerName}</h2>
            <p>{player.playerType}</p>
        </div>
    </div>
    <button onClick={()=> handleSelectedPlayersDlt(player)} className='btn text-red-500'><MdDelete />
</button>
</div>

                })
            }
        </div>
    );
};

export default SelectedPlayers;