import React,{useState} from 'react'

export default function Textarea(props) {
    const[text,setText]=useState("");
    const onChangehandler=(event)=>{
        console.log("change handled");
        setText(event.target.value)
    }
    const upClicked=()=>{
        const newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case","success");
    }
    const lowClicked=()=>{
        const newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case","success");
    }
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="mybox" rows="8"  value={text} onChange={onChangehandler} ></textarea>
                
            </div>
            <button className="btn btn-primary mx-3" value="UpperCase" onClick={upClicked}>UpperCase</button>
            <button className="btn btn-primary" value="LowerCase" onClick={lowClicked}>LowerCase</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} minutes is the average time to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </> 
    )
}
