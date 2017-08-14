import React from 'react';
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBlock
} from 'reactstrap';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import './Main.css';
import AboutMe from 'components/AboutMe.jsx';
import MyTree from 'components/MyTree.jsx';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>

          <Route exact path="/Profile" render={() => (
            <div>
              <CardDeck>
                <Card>
                  <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap"/>
                  <CardBlock>
                    <CardTitle>
                      <Link to='/AboutMe'>關於我</Link>
                    </CardTitle>
                  </CardBlock>
                </Card>
                <Card>
                  <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap"/>
                  <CardBlock>
                    <CardTitle>
                      <Link to='/MyTree'>我的樹</Link>
                    </CardTitle>
                  </CardBlock>
                </Card>
              </CardDeck>
            </div>
          )}/>

          <Route exact path="/AboutMe" render={() => (
            <div>
              <AboutMe/>
            </div>
          )}/>
          <Route exact path="/MyTree" render={() => (
            <div>
              <MyTree/>
            </div>
          )}/>

        </div>
      </Router>

    );
  }

}
