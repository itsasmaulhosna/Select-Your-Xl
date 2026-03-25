import React from 'react';
import dollarImg from "../../assets/assets/dollar 1.png"
const Navbar = ({coin}) => {
    return (
        <div className='container mx-auto'>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <button className=" flex justify-between items-center gap-2 text-xl font-bold">
        {coin} coins
<img src={dollarImg}/>
    </button>
  </div>
</div>
        </div>
    );
};

export default Navbar;