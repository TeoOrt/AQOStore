import React from "react";
import { Container, Heading, Input, Button } from "./stylesComponents";
import AQOLogo from "../../NavBar/AQOLOGO.svg"
const SignUp = () => {
  return (
    <Container>
      {/* <img src={AQOLogo} alt="Aqo Logo" /> */}
      <Heading>AQO Store</Heading>
      <h2>Create User</h2>
      <Input type="text" placeholder="Full Name" />
      <Input type="email" placeholder="Email Address" />
      <Input type="password" placeholder="Password" />
      <Input type="addres" placeholder="Current Address" />
      <Button>Sign Up</Button>
    </Container>
  );
};

export default SignUp;
