import React from 'react'
import AlbumImage from './AlbumImage/AlbumImage'
import AlbumInfo from './AlbumInfo/AlbumInfo'
import css from './SongCard.module.css'
import photo from '../../assets/photo.png'

function SongCard({album}) {
  return (
    <div className={css.songcard_body}>
        <AlbumImage url={album?.images[0]?.url || photo}/>
        <AlbumInfo album={album}/>
    </div>
  )
}

export default SongCard