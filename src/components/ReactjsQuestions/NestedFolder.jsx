import React, { useState } from 'react'

export const NestedFolder = ({explorer}) => {
  const [isClicked, setIsClicked] = useState(false)

  if (explorer.isFolder){
    return (
      <>
        <span onClick={()=> setIsClicked(!isClicked)}>
          {explorer.name}
        </span>
          <br />
        <div style={{display: isClicked ? "block" : "none", marginLeft: "40px"}}>
          {explorer.folder.map((item)=> <NestedFolder key={item} explorer={item} />)}
        </div>
      </>
    )
  }

  else {
    return ( <div>{explorer.name}</div> )
  }

}