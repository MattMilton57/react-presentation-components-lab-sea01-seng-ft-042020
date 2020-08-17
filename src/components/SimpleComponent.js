import React from 'react';
class SimpleComponent extends React.Component {
    constructor () {
        super ();
        this.state = {
            mood:"happy"
        }
    }

    handleClick = () => {
        this.setState({
            mood:'sad'
        })

    }

    render(){
        return(
            <div onClick={e=>this.handleClick(e)}>
                <h1>{this.state.mood}</h1>
            </div>
        )
    }
} export default SimpleComponent
