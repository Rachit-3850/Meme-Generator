import {useState,useEffect} from 'react';
import React from 'react';
import Meme from "./components/meme";
import "./style.css"
import Template from './components/box';

function App(props) {
    const [template,setTemplate] = useState([]);
    const [meme , setMeme] = useState(null);
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then((res) => res.json())
        .then((data) => {
            setTemplate(data.data.memes);
            console.log(data.data.memes)
        });
    },[])
    return (
    <div className="App">
        <h1>Meme Generator</h1>
        {
            !meme ? (<Template template={template} setMeme={setMeme} />)
            :(<Meme meme = {meme} setMeme={setMeme}/>)
        }
    </div>
    );
}
export default App;
// https://api.imgflip.com/get_memes