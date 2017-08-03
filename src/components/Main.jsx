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
import Login from 'components/login.jsx';

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
                        <div className={`main bg-faded ${this.state.group}`}>
                            <div className='container'>
                                <Navbar color="faded" light toggleable>
                                    <NavbarToggler right onClick={this.handleNavbarToggle}/>
                                      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                        <DropdownToggle caret>
                                          MENU
                                        </DropdownToggle>
                                        <DropdownMenu>
                                          <DropdownItem>首頁</DropdownItem>
                                          <DropdownItem>個人資料</DropdownItem>
                                          <DropdownItem>我的關注</DropdownItem>
                                          <DropdownItem>其他人的樹</DropdownItem>
                                          <DropdownItem>公共樹</DropdownItem>
                                          <DropdownItem>網站介紹</DropdownItem>
                                          <DropdownItem>關於我們</DropdownItem>
                                        </DropdownMenu>
                                      </Dropdown>
                                    <Collapse isOpen={this.state.navbarToggle} navbar>
                                        <span className=' ml-auto'>
                                            <Form>
                                              <Input  name="search" id="exampleEmail" placeholder="search" />
                                            </Form>
                                        </span>
                                         <Nav navbar>
                                            <NavItem>
                                                <NavLink tag={Link} to='/login'>登入</NavLink>
                                            </NavItem>
                                        </Nav>
                                    </Collapse>
                                </Navbar>
                            </div>
                            <img src={`images/startup-concept-colorful-note-written-in-notepad-GP3ND2.jpg`}/>
                        </div>
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
