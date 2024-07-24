import React, { useState } from 'react'
import { Document, Page } from 'react-pdf'

export const ImageUpload = () => {
  const [upload, setUpload] = useState(null)
  const [type, setType] = useState("")

  let onChangeHandler = (e) =>{
    let selectedFile = e.target.files[0]
    setUpload(selectedFile)
    setType(selectedFile.type)
  }

  return (
    <div>
      <label htmlFor="">Image upload:
      <input type="file" onChange={onChangeHandler} />
      </label>

      { upload && type.startsWith("image/") && <div style={{textAlign: "center"}}>
       <img src={URL.createObjectURL(upload)} alt={upload} srcSet={upload} height={200} width={200} />
     </div> }

     { upload && type === "application/pdf" && <div style={{textAlign: "center"}}>
       <Document file={URL.createObjectURL(upload)} >
        <Page pageNumber={1} width={200} />
       </Document> 
     </div> }


    </div>
  )
}
