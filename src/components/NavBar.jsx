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

export default class NavBar extends React.Component {
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
                        <DropdownItem>
                          <NavItem>
                              <NavLink tag={Link} to='/Profile'>個人資料</NavLink>
                          </NavItem>
                        </DropdownItem>
                        <DropdownItem>我的關注</DropdownItem>
                        <DropdownItem>公共樹</DropdownItem>
                        <DropdownItem>網站介紹</DropdownItem>
                        <DropdownItem>關於我們</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  <Collapse isOpen={this.state.navbarToggle} navbar>
                      <span className=' ml-auto'>
                          <Form  onSubmit={this.props.onSearch}>
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


            </div>
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

    handleSubmit(e) {
      this.props.router.push('/some/location');
      }
}
