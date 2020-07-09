import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Appbar from 'material-ui/AppBar'
export class Sucess extends Component {
    render() {
        return (
            <MuiThemeProvider>
            <React.Fragment>
            <Appbar title="Your Details Has Been Submitted"/>
            <h1>ThankYOU</h1>
            </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Sucess
