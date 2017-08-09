import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText
} from 'reactstrap';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router>
                <Form>
                    <FormGroup>
                      <Label for="exampleEmail">Email</Label>
                      <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="examplePassword">Password</Label>
                      <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </Router>
        );
    }
}
