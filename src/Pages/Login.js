import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

const Login = () => {
  return (
    <>
      <Card className="mx-auto card--centered card--form card--login">
        <CardImg
          className="card--form__logo card--login__logo"
          top
          width="80px"
          src="/logo192.png"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle className="text-center" tag="h2">
            Login
          </CardTitle>
          <CardSubtitle className="text-center">Login subtitle</CardSubtitle>

          <Form>
            <FormGroup className="mt-3">
              <Label for="exampleEmail" className="mr-sm-2">
                Email
              </Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="something@idk.cool"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword" className="mr-sm-2">
                Password
              </Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="don't tell!"
              />
            </FormGroup>
            <Button block color="primary" className="mt-3">
              Submit
            </Button>
          </Form>
        </CardBody>
      </Card>
    </>
  );
};

export default Login;
