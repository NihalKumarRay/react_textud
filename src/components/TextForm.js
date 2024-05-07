import React,{useState} from 'react'
export default function TextForm(prop) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText)
        prop.showAlert("Converted to uppercasel", "success");
    }
    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText)
        prop.showAlert("Converted to Lowercase", "success");

    }
    const handleClearClick = ()=>{
        // console.log("Uppercase was clicked " + text);
        let newText = " ";
        setText(newText)
        prop.showAlert("text Cleared!", "success");


    }
    const hendleOnChange = (event)=>{
        setText(event.target.value);
       

       

    }
   const handleCopy = ()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    prop.showAlert("copied to clipboard!", "success");
   }
   const handleExtraspaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    prop.showAlert("Extra spaces removed! ", "success");

   }
    const [text, setText] = useState('')
//    text= "New text" //Wrong way to change the state
//    setText =("new text"); //correct way to change the state
  return (
    <>
    <div className='container' style={{color:prop.mode==='light'?'#042743':'white'}}>
        <h1>{prop.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={hendleOnChange} style={{backgroundColor:prop.mode==='light'?'white':'grey',
    color:prop.mode==='light'?'#042743':'white'
  }} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppecase</button>
<button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Uppecase</button>
<button className="btn btn-primary mx-1" onClick={handleClearClick}>clear text</button>
<button className="btn btn-primary mx-1 my-2" onClick={handleCopy}> Copy </button>
<button className="btn btn-primary mx-1 my-2" onClick={ handleExtraspaces}> Remove Extra Spaces </button>
    </div>
    <div className="container my-3" style={{color:prop.mode==='light'?'#042743':'white'}}>
      <h2>You text summary</h2>
      <p>{text.split(" ").length} words and {text.length} chraracters </p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to priview it here"} </p>
    </div>
    </>
  )
}
