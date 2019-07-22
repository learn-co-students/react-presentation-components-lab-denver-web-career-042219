// Code SimpleComponent Here
import React from 'react'

class SimpleComponent extends React.Component { 
    constructor() {
        super()
        this.state = {
            mood: "happy"
        }
    }

    flipMood = (event) => {
        this.state.mood !== "happy" ? this.setState({mood: "happy"}) : this.setState({mood: "sad"})
    }

    render() {
        return(
            <React.Fragment>
                <div onClick={event => this.flipMood(event)}>
                    {this.state.mood}
                </div>
            </React.Fragment>
        )
    }


}

export default SimpleComponent
