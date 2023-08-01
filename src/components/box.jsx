import {useState,useEffect} from 'react';
const Template = ({template,setMeme}) => {
    return (
        <div className="memeContainer">
            {
                template.map((template) => (
                    <div key={template.id} className="template">
                        <div className="image"
                            // style={{backgroundImage : `url(${template.url})` }}
                            onClick={() => setMeme(template)}>
                                <img src={template.url} />
                        </div>
                    </div>
                    
                ))
            }
        </div>
        );
}
export default Template;