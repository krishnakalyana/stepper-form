import React, { Component } from "react";
import UserDetails from './UserDetails'
import PersonalDetails from './PersonalDetails'
import Confirm from "./Confirm";
import Sucess from "./Sucess";
class Home extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
  };
  //nextStep
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };
  //PreviousStep
  previousStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };
  // handle change in input fields
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };
  render() {
    const { step } = this.state;
    const { firstName, lastName, email, city, bio, occupation } = this.state;
    const values = { firstName, lastName, email, city, bio , occupation};
    switch (step) {
      case 1:
        return (
          <UserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values ={values}
          />
        );
        case 2: return (
            <PersonalDetails
              nextStep={this.nextStep}
              previousStep={this.previousStep}
              handleChange={this.handleChange}
              values ={values}
            />
          );
        case 3: return (
            <Confirm
              nextStep={this.nextStep}
              previousStep={this.previousStep}
              //handleChange={this.handleChange}
              values ={values}
            />
          );
        case 4: return <Sucess/>
    }
  }
}

export default Home;
