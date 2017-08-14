import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col} from 'reactstrap';

export default class Search extends React.Component {
    constructor(props) {
        super(props);

        }

    render() {
      return (
        <Row>
           <Col sm="12" md={{ size: 8, offset: 2 }}>
                    <Form>
                        <Input  name="search"  id="searchresult" placeholder="searchresult"  />
                    </Form>
            </Col>
        </Row>
      );
    }

}
