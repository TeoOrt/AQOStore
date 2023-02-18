import React from "react";
import { Container, Heading, Input, Button } from "./stylesComponents";

const SignUp = () => {
  return (
    <Container>
      <Heading>Sign Up</Heading>
      <Input type="text" placeholder="Full Name" />
      <Input type="email" placeholder="Email Address" />
      <Input type="password" placeholder="Password" />
      <Input type="addres" placeholder="Current Address" />
      <Button>Sign Up</Button>
    </Container>
  );
};

export default SignUp;
