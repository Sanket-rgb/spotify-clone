import { Favorite, MoreHoriz, PlayCircleFilled } from "@mui/icons-material"
import React from "react"
import "./Body.css"
import { useDataLayerValue } from "./DataLayer"
import Header from "./Header"
import SongRow from "./SongRow"

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue()

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZF1E38RPheYfiO0K`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          })
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          })
        })
      })
  }

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          })
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          })
        })
      })
  }
  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilled className="body__shuffle" onClick={playPlaylist} />
          <Favorite fontSize="large" />
          <MoreHoriz />
        </div>
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow playSong={playSong} track={item.track} />
        ))}
      </div>
    </div>
  )
}

export default Body
