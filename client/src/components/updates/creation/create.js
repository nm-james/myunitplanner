import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './create.css';

import { BasicPopup } from '../../../presets/popup'
import { Collapse } from 'react-collapse';

class CreateStacks extends React.Component {
    static propTypes = {
        isOpened: PropTypes.bool
    };
  
    static defaultProps = {
        isOpened: false
    };
  
    constructor(props) {
        super(props);
        const {isOpened} = this.props;
        this.state = {
            isOpened, 
        };
    }
  
    formatImage( id, alignment ) {
        const styling = {
            center: {
                float: "none",
                width: "100%",
                display: "none"
            },
            right: {
                float: "right",
                width: "50%",
                display: "inline-block"
            },
            left: {
                float: "left",
                width: "50%",
                display: "inline-block"
            }
        }

        if (!styling[alignment]) return ""
        var img = document.getElementById("editImage" + id)
        if (img === null) {
            return styling[alignment]
        }
        img = img.style
        const text = document.getElementById("displayText" + id).style

        const updatedStyling = styling[alignment]

        img.width = updatedStyling.width
        img.float = updatedStyling.float
        text.display = updatedStyling.display
    }

    updateImage( id ) {
        const img = document.getElementById("editImage" + id)
        const file = document.getElementById("fileType" + id).files[0]
        var isImage = file.name.split('.')
        const fileCheck = {
            png: true,
            jpg: true
        }
        if (fileCheck[isImage[isImage.length - 1]]) {
            const newImg = URL.createObjectURL(file)
            const data = this.props.content;

            img.src = newImg
            data[id].image = newImg

            console.log(data)
        }
        else
        {
            console.log("Wrong File!")
        }
    }

    render() {
        const {isOpened, paragraphs} = this.state;
        const data = this.props.content;
        const keys = Object.keys(data);
        return (
            <div className="updateSection">
                <h1 
                    onClick={
                        () => this.setState({isOpened: !isOpened})
                    }
                >
                    {this.props.title}
                </h1>
                <Collapse isOpened={isOpened}>
                    {keys.map(num => 
                        <div className='sectionEntries'>
                            <div className='imgcontainer'>
                                <img id={"editImage" + num} style={this.formatImage(num, data[num].imagealignment)} src={require(`../images/${data[num].image}`).default} />
                                <p id={"displayText" + num}>This is dummy text. Whatever you write below will appear on this side in the final presentation of the update.</p>
                            </div>
                            <div className='sectionEdits'>
                                <button onClick={() => {this.formatImage(num, "left")}}>Left</button>
                                <button onClick={() => {this.formatImage(num, "center")}}>Middle</button>
                                <button onClick={() => {this.formatImage(num, "right")}}>Right</button>
                                <input id={"fileType" + num} onChange={() => {this.updateImage(num)}} type="file" />
                            </div>
                            <textarea onChange={() => {console.log('changed!')}}>{data[num].text}</textarea>
                        </div>
                    )}
                </Collapse>
            </div>
        );
    }
}


class UpdatePopup extends React.Component {
    constructor() {
        super();
        this.state = {
            content: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:3000/api/updates/" + this.props.id, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res =>res.json())
        .then(content => this.setState({content}))
        .catch( (err) => {
            console.log('Error!', err)
        })
    }

    getKeys() {
        let titles = [];
        this.state.content.forEach(element => {
            titles = Object.keys(element.content)
        });
        return titles
    }

    render() {
        const titles = this.getKeys()
        return (
            <BasicPopup close={this.props.closePopup}>
                {this.state.content.map(newcontent =>
                    <li className='liTesst' key={newcontent.id}>
                        {titles.map(sections =>
                            <CreateStacks 
                                title={sections}
                                content={newcontent.content[sections]}
                            />
                        )}
                    </li>
                )} 
            </BasicPopup>
        )
    }
}

export default UpdatePopup;