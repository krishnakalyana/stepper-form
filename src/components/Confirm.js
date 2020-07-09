import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Appbar from 'material-ui/AppBar'
//import TextField from 'material-ui/TextField'
import {List,ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton' 
class Confirm extends Component {
    continue = e =>{
        e.preventDefault()
        this.props.nextStep()
    }
    back = e =>{
        e.preventDefault()
        this.props.previousStep()
    }
    render() {
        const {values:{firstName,lastName,email,bio,occupation,city}} = this.props
        return (
            <MuiThemeProvider>
            <React.Fragment>
            <Appbar title="Confirm Details"/>
            <List>
            <ListItem
            primaryText='First Name'
            secondaryText={firstName}
            />
            <br/>
            <ListItem
            primaryText='Last Name'
            secondaryText={lastName}
            />
            <br/>
            <ListItem
            primaryText='Email'
            secondaryText={email}
            />
            <br/>
            <ListItem
            primaryText='City'
            secondaryText={city}
            />
            <br/>
            <ListItem
            primaryText='Occupation'
            secondaryText={occupation}
            />
            <br/>
            <ListItem
            primaryText='Bio'
            secondaryText={bio}
            />
            <br/>
            </List>
            <br/>
            <RaisedButton
            label='Continue'
            primary={true}
            style ={styles.marginRight}
            onClick={this.continue}
            />
            <RaisedButton
            label='Back'
            primary={false}
            style ={styles.marginRight}
            onClick={this.back}
            />
            </React.Fragment>
            </MuiThemeProvider>
        )
    }
}
const styles ={
    marginRight:{
        margin:15
    }
}

export default Confirm
