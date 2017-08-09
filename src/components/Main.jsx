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
import Login from 'components/Login.jsx';
import Profile from 'components/Profile.jsx';
import NavBar from 'components/NavBar.jsx';

import './Main.css';

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            unit: 'metric',
            navbarToggle: false
        };

        this.handleNavbarToggle = this.handleNavbarToggle.bind(this);
        this.handleUnitChange = this.handleUnitChange.bind(this);


        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
          };
        }

        toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
          });
        }

    render() {
        return (
            <Router>
                <div>

                    <Route exact path="/" render={() => (
                      <div>
                        <NavBar/>
                        <img src={`images/startup-concept-colorful-note-written-in-notepad-GP3ND2.jpg`}/>
                      </div>
                      )}/>



                    <Route exact path="/Profile" render={() => (
                      <NavBar/>
                    )}/>

                    <Route exact path="/login" render={() => (
                      <Login unit={this.state.unit} onUnitChange={this.handleUnitChange} />
                    )}/>


                </div>
            </Router>
        );
    }

    handleNavbarToggle() {
        this.setState((prevState, props) => ({
            navbarToggle: !prevState.navbarToggle
        }));
    }

    handleUnitChange(unit) {
        this.setState({
            unit: unit
        });
    }

}
