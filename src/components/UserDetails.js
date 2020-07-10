import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Appbar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
class UserDetails extends Component {
  
  continue = (e) => {
    const firstName = document.getElementById('firstName')
    const lastName = document.getElementById('lastName')
    const email = document.getElementById('email')
    if(firstName.value===''){
      firstName.style.boxShadow ='0px 0px 15px 0px lightblue'
    }
    if(lastName.value===''){
      lastName.style.boxShadow ='0px 0px 15px 0px lightblue'
    }
    if(email.value===''){
      email.style.boxShadow ='0px 0px 15px 0px lightblue'
    }
    else {e.preventDefault();
      this.props.nextStep();
   }
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
            onChange={handleChange}
            defaultValue={values.firstName}
            style={styles.marginRight}
          />
          <br />
          <TextField
            id="lastName"
            hintText="Enter Your Last Name"
            floatingLabelText="Last Name"
            onChange={handleChange}
            defaultValue={values.lastName}
            style={styles.marginRight}
          />
          <br />
          <TextField
            id="email"
            hintText="Enter Your Email"
            floatingLabelText="Email"
            onChange={handleChange}
            defaultValue={values.email}
            style={styles.marginRight}
          />
          <br />
          <RaisedButton
            id="continueButton"
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
