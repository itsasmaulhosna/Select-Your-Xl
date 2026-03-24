// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import { Suspense } from 'react';
import './App.css'
import Banner from './Components/Navbar/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Players from './Components/Navbar/Players/Players';
const fetchPlayers=async()=>{
  const res=await fetch('/data.json');
  return res.json();
}
function App() {
const playersPromise=fetchPlayers()

  return (
    <>
     <Navbar></Navbar>
     <Banner></Banner>
<Suspense fallback={<span className="loading loading-spinner loading-lg"></span>
}>     <Players playersPromise={playersPromise}></Players></Suspense>
    </>
  )
}

export default App
