import React from "react";

import styles from './styles.css'

function Container(props){
  return(
    <div className="Container">{props.children}</div>
  )
}

export default Container