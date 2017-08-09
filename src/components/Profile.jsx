import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import Today from 'components/Today.jsx';
import Forecast from 'components/Forecast.jsx';

import './Main.css';

export default class Profile extends React.Component {
    constructor(props) {
        super(props);

        }

    render() {
      return (
          <div >
            Test!!
          </div>
      );
    }

}
