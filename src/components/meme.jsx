import { useState } from "react";
const Meme = ({meme,setMeme}) => {
    const [form,setForm] = useState({
        template_id: meme.id,
        username: "Rachit-3850",
        password: "memeGene",
        boxes: [],
    })
    const generateMeme=() => {
        let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`
        form.boxes.map((box,index) => (
            url += (`&boxes[${index}][text]=${box.text}`)
        ))
        fetch(url).then(res => res.json())
        .then(data => {
            console.log(data)
            setMeme({...meme,url: data.data.url})
        })
    }
    console.log(meme);
    return (
        <div className="img">
            <div className="conatainer">
            <img src={meme.url} />
            </div>
            <div className="text">
                {
                    [...Array(meme.box_count)].map((e,index) => (
                        <input type = "text"
                        key={index}
                        className = "input" 
                        placeholder = {`Meme caption ${index+1}`}
                        onChange={(e) => {
                            const newBoxes = form.boxes;
                            newBoxes[index] = {text: e.target.value };
                            setForm({...form, boxes:newBoxes})
                        }}
                        />
                    ))
                }
            </div>
            <div className="button">
                <button className="button1" onClick={generateMeme}>Generate Meme</button>
                <button className="button2 " onClick={() =>{setMeme(null)}}>Choose Template</button>
            </div>
        </div>
    )
}
export default Meme;