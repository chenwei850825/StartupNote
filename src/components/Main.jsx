import React from 'react';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
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

import Today from 'components/Today.jsx';
import Forecast from 'components/Forecast.jsx';
import Login from 'components/Login.jsx';
import Profile from 'components/Profile.jsx';
import NavBar from 'components/NavBar.jsx';
import SearchResult from 'components/SearchResult.jsx';
import MyAttention from 'components/MyAttention.jsx';

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
    this.handleNavbarSearch = this.handleNavbarSearch.bind(this);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      isSearch: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    let content = null;
    if(this.state.isSearch){
         content = <SearchResult/>;
       }else{
           content =
           <div >
             <img src={`images/background.jpg`} className = "background"/>
           </div>;

       }
    return (
      <Router>
        <div>

          <Route exact path="/" render={() => (
            <div>
              <NavBar onSearch={this.handleNavbarSearch}/> {content}
            </div>
          )}/>

          <Route exact path="/Profile" render={() => (
            <div>
              <NavBar/>
              <Profile/>
            </div>
          )}/>

          <Route exact path="/MyAttention" render={() => (
                      <div>
                        <NavBar/>
                        <MyAttention/>
                      </div>
                    )}/>


          <Route exact path="/login" render={() => (<Login unit={this.state.unit} onUnitChange={this.handleUnitChange}/>)}/>


        </div>
      </Router>
    );
  }

  handleNavbarToggle() {
    this.setState((prevState, props) => ({
      navbarToggle: !prevState.navbarToggle
    }));
  }

  handleNavbarSearch(e) {
    e.preventDefault();

    this.setState({isSearch: true});
    //console.log("search");

  }

  handleUnitChange(unit) {
    this.setState({unit: unit});
  }

}
