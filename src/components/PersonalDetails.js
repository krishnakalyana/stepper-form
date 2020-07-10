import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Appbar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
class PersonalDetails extends Component {
  continue = (e) => {
    const occupation = document.getElementById("occupation");
    const city = document.getElementById("city");
    const bio = document.getElementById("bio");
    if (occupation.value === "") {
        occupation.style.boxShadow = "0px 0px 15px 0px lightblue";
    }
    if (city.value === "") {
        city.style.boxShadow = "0px 0px 15px 0px lightblue";
    }
    if (bio.value === "") {
      bio.style.boxShadow = "0px 0px 15px 0px lightblue";
    } else {
      e.preventDefault();
      this.props.nextStep();
    }
  };
  back = (e) => {
    e.preventDefault();
    this.props.previousStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <Appbar title="Enter Personal Details" />
          <TextField
          id='occupation'
            hintText="Enter Your Occupation"
            floatingLabelText="Occupation"
            onChange={handleChange}
            defaultValue={values.occupation}
            style={styles.marginRight}
          />
          <br />
          <TextField
          id='city'
            hintText="Enter Your City"
            floatingLabelText="City"
            onChange={handleChange}
            defaultValue={values.city}
            style={styles.marginRight}
          />
          <br />
          <TextField
          id='bio'
            hintText="Enter Your Bio"
            floatingLabelText="Bio"
            onChange={handleChange}
            defaultValue={values.bio}
            style={styles.marginRight}
          />
          <br />
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.marginRight}
            onClick={this.continue}
          />
          <RaisedButton
            label="Back"
            primary={false}
            style={styles.marginRight}
            onClick={this.back}
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

export default PersonalDetails;
