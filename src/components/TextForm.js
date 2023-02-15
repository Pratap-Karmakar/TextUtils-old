import React, { useState } from 'react'

export default function TextForm(props) {
    const [text,setText]=useState('');

  const handleUpClick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
  }
  const handleLowerClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
  }

  // to edit the text area
  const handleOnChange=(event)=>{
    setText(event.target.value);
  }

  return (
    <>
      <div className='mb-3'>
        <h1>{props.heading}</h1>
        <div>
          <textarea className='form-control' id='exampleFormControlTextarea1' rows="5" value={text} onChange={handleOnChange}></textarea>
        </div>
        <button className='btn btn-primary' onClick={handleUpClick}>Convert to UpperCase</button>
        <button className='btn btn-primary' onClick={handleLowerClick} style={{marginLeft:4}}>Convert to LowerCase</button>
      </div>

      <div className='my-4'>
        <h2>Your text summary</h2> 
        <h4>{text.split(" ").length} Words and {text.length} Characters</h4>
        <h5>{0.008 * text.split(" ").length} Minuits to read</h5>
        <h3 className='my-4'>Preview</h3>
        <p className='my-2'>{text}</p>
      </div>
    </>
  )
}
