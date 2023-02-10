import React from 'react';
import ReactDOM from 'react-dom';

function SortSections( array ) {
    console.log(array);

    array.forEach(para => {
        console.log(para);
        para.updatedImage = require(`./images/${para.image}`).default;
    });

    return array;
}

export function SortPost( props ) {
    const titles = Object.keys( props.content );
    console.log(props.content);
    titles.forEach(section => {
    //     // const newDetails = SortSections(content[section]);
    //     // content[section] = newDetails;
    });

    const newHtml = (
        <React.StrictMode>
            <div>
            {titles.map(key =>
                <div>
                    <h3>{key}</h3>
                    {props.content[key].map(val => 
                        <div>
                            <p>{val.text}</p>
                            {<img style={{width: "100%", height: "auto", margin: "2% 0 0% 0"}} src={val.updatedImage} />}
                        </div>
                    )}
                </div> 
                )}
            </div>
        </React.StrictMode>
    );

    return newHtml
}

