import Updates from './components/updates/updates';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Navigation from './components/navigation/nav'
import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            updates: [],
        };
    }

    componentDidMount() {
        fetch("http://localhost:3000/api/updates/true", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res =>res.json())
        .then(updates => this.setState({updates}))

        .catch( (err) => {
            console.log('Error!', err)
        })
    }

    render() {
        return (
            <Router>
                <Navigation />
                <Switch>
                    <Updates updates={this.state.updates}/>
                </Switch>
            </Router>
        )
    }
}

export default App;