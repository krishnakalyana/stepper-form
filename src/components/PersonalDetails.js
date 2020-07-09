import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Appbar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton' 
class PersonalDetails extends Component {
    continue = e =>{
        e.preventDefault()
        this.props.nextStep()
    }
    back = e =>{
        e.preventDefault()
        this.props.previousStep()
    }
    render() {
        const {values,handleChange} = this.props
        return (
            <MuiThemeProvider>
            <React.Fragment>
            <Appbar title="Enter Personal Details"/>
            <TextField
            hintText="Enter Your Occupation"
            floatingLabelText="Occupation"
            onChange={handleChange('occupation')}
            defaultValue={values.occupation}
            style ={styles.marginRight}
            />
            <br/>
            <TextField
            hintText='Enter Your City'
            floatingLabelText="City"
            onChange={handleChange('city')}
            defaultValue={values.city}
            style ={styles.marginRight}
            />
            <br/>
            <TextField
            hintText="Enter Your Bio"
            floatingLabelText="Bio"
            onChange={handleChange('bio')}
            defaultValue={values.bio}
            style ={styles.marginRight}
            />
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
const styles = {
    marginRight: {
      margin: 15,
    },
  };

export default PersonalDetails
