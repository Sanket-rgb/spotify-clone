import React from "react"
import "./Footer.css"
import {
  PlayCircleOutline,
  PlaylistPlay,
  VolumeDown,
} from "@mui/icons-material"
import { SkipPrevious } from "@mui/icons-material"
import { SkipNext } from "@mui/icons-material"
import { Shuffle } from "@mui/icons-material"
import { Repeat } from "@mui/icons-material"
import { Grid, Slider } from "@mui/material"

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
          alt=""
        />
        <div className="footer__songInfo">
          <h4>YEah!</h4>
          <p>Usher</p>
        </div>
      </div>
      <div className="footer__center">
        <Shuffle className="footer__green" />
        <SkipPrevious className="footer__icon" />
        <PlayCircleOutline fontSize="large" className="footer__icon" />
        <SkipNext className="footer__icon" />
        <Repeat className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer
