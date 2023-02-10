class UpdateEImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style: []
        };
    }
  
    formatImage( alignment ) {
        let styling = []
        
        if (alignment === "center") {
            styling = {
                width: '65%'
            }
        }
        else if (alignment === "right") {
            styling = {
                width: '32.5%'
            }
        }

        else if (alignment === "left") {
            styling = {
                width: '32.5%'
            }
        }

        return this.setState({style: styling})
    }

    render() {
        const imgStyle = this.state.style;
        return (
            <img style={imgStyle} src={this.props.path} />
        );
    }
}
