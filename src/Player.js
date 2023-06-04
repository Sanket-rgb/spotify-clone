import React from "react"
import "./Player.css"
import Sidebar from "./Sidebar"
import Body from "./Body"
import Footer from "./Footer"
const Player = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body spotify={spotify} />
        {/*Sidebar*/}
        {/*Body*/}
      </div>
      <Footer />
      {/*Footer*/}
    </div>
  )
}

export default Player
