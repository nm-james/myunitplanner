import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { SortPost } from './load';
import Fade from 'react-reveal/Fade'
import UpdatePopup from './creation/create'

import '../../assets/css/updates.css';

var path = require('path');

class Updates extends Component {
    constructor() {
        super();
        this.state = {
            togglePopup: false,
            activeId: 1,
            updates: []
        };
    }

    createNewUpdate(id) {
        console.log(id)
        this.setState({
            togglePopup: !this.state.togglePopup,
            activeId: id
        });
    }

    render() {
        const string = "Following our securing of our western flank - our focus must now turn to our east. ATOG forces are to mobilise east towards the town of Sanobar (163 035) where friendly ATOG force" //124
        return(
            <React.StrictMode>
                    <Route path={`/updates`} exact>
                        <div className="holder">
                            <ul>
                                <h2>Updates</h2>
                                {this.props.updates.map(newcontent =>
                                    <Fade>
                                        <li key={newcontent.id}>
                                            <h2 style={{zIndex: '-1'}}> { newcontent.title } </h2>
                                            <button onClick={this.createNewUpdate.bind(this, newcontent.id)}>Click me for pop up!</button>
                                            <div className="extraInformation">
                                                <p style={{textAlign: "left"}}>{ newcontent.creator }</p>
                                                <p style={{textAlign: "right", marginLeft: "10%"}}>{ newcontent.posted }</p>
                                            </div>
                                            <img src={require(`./images/${newcontent.front}`).default} />
                                            <div class="updateDescription">
                                                <p>{string.slice(0, 120) + "..."}</p>
                                                <Link to={path.join(__dirname, `/updates/${newcontent.id}`)}>Read More ></Link>
                                            </div > 
                                        </li>
                                    </Fade>
                                )} 
                                {this.props.updates.map(newcontent =>
                                    <Fade>
                                        <li key={newcontent.id}>
                                            <h2> { newcontent.title } </h2>
                                            <div className="extraInformation">
                                                <p style={{textAlign: "left"}}>{ newcontent.creator }</p>
                                                <p style={{textAlign: "right", marginLeft: "10%"}}>{ newcontent.posted }</p>
                                            </div>
                                            <img src={require(`./images/${newcontent.front}`).default} />
                                            <div class="updateDescription">
                                                <p>Voluptate fugiat velit enim ullamco laborum ad mollit sint. Do adipisicing officia est in laborum aute aute veniam mollit id...</p>
                                                <Link to={path.join(__dirname, `/updates/${newcontent.id}`)}>Read More</Link>
                                            </div >
                                        </li>
                                    </Fade>
                                )} 
                                {this.props.updates.map(newcontent =>
                                    <Fade>
                                        <li key={newcontent.id}>
                                            <h2> { newcontent.title } </h2>
                                            <div className="extraInformation">
                                                <p style={{textAlign: "left"}}>{ newcontent.creator }</p>
                                                <p style={{textAlign: "right", marginLeft: "10%"}}>{ newcontent.posted }</p>
                                            </div>
                                            <img src={require(`./images/${newcontent.front}`).default} />
                                            <div class="updateDescription">
                                                <p>Voluptate fugiat velit enim ullamco laborum ad mollit sint. Do adipisicing officia est in laborum aute aute veniam mollit id...</p>
                                                <Link to={path.join(__dirname, `/updates/${newcontent.id}`)}>Read More</Link>
                                            </div >
                                        </li>
                                    </Fade>
                                )} 
                            </ul>
                        </div>
                    </Route>
                    {this.props.updates.map(newcontent =>
                        <Route path={`/updates/${newcontent.id}`} exact>
                            <SortPost content={newcontent.content} />
                        </Route>
                    )} 
                {this.state.togglePopup ?
                    <UpdatePopup 
                        closePopup={this.createNewUpdate.bind(this)}
                        id={this.state.activeId}
                    />
                    : null
                }
            </React.StrictMode>
        );
    }
}

export default Updates;