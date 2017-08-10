import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import {
     Button, Form, FormGroup, Label, Input
} from 'reactstrap';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
    }
   render() {
    return (
      <Form inline>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>{' '}
          <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
        </FormGroup>
        {' '}
        <FormGroup>
          <Label for="examplePassword">Password</Label>{' '}
          <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" />
        </FormGroup>
        {' '}
        <Button>Submit</Button>
      </Form>
    );
  }
}
