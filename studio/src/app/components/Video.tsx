import React from 'react'
import { VideoComponentProps } from '../types'
import * as styles from '../styles'
import Player from 'react-player'

/**
 * 
 * @param props 
 */
export const Video: React.FC<VideoComponentProps> = (props) => {
  return (<div style={styles.screen}>      
   <Player 
    onEnded={props.onDone}
    url={props.url}
    playing
    style={{
      background: "#fffff",
    }}
    width="100%"
    height="100%"
  />
  </div>)
}