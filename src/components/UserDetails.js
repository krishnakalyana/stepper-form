import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Appbar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
class UserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
        
      <MuiThemeProvider>
      <React.Fragment> 
          <Appbar title="Enter User Details" />
         <TextField
            id="firstName"
            hintText="Enter Your First Name"
            floatingLabelText="First Name"
            onChange={handleChange("firstName")}
            defaultValue={values.firstName}
            style={styles.marginRight}
          />
          <br />
          <TextField
            hintText="Enter Your Last Name"
            floatingLabelText="Last Name"
            onChange={handleChange("lastName")}
            defaultValue={values.lastName}
            style={styles.marginRight}
          />
          <br />
          <TextField
            hintText="Enter Your Email"
            floatingLabelText="Email"
            onChange={handleChange("email")}
            defaultValue={values.email}
            style={styles.marginRight}
          />
          <br />
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.marginRight}
            onClick={this.continue}
          />
          
          </React.Fragment>
      </MuiThemeProvider>
     
    );
  }
}
const styles = {
  marginRight: {
    margin: 15,
  },
};


export default UserDetails;
