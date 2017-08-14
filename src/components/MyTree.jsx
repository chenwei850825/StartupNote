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
import Mytree_SingleNode from 'components/Mytree_SingleNode.jsx';

export default class MyTree extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>

          <Route exact path="/Mytree" render={() => (
            <div>
              <Link to='/Mytree_SingleNode'>雙擊以進入單一節點</Link>
              <Card>
                <CardImg top width="50%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="樹總覽"/>
                <CardBlock>
                  <CardTitle>樹總覽</CardTitle>
                </CardBlock>
              </Card>
              <CardDeck>
                <Card>
                  <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="編輯樹教學1"/>
                  <CardBlock>
                    <CardTitle>編輯樹教學1</CardTitle>
                  </CardBlock>
                </Card>
                <Card>
                  <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="編輯樹教學2"/>
                  <CardBlock>
                    <CardTitle>編輯樹教學2</CardTitle>
                  </CardBlock>
                </Card>
                <Card>
                  <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="編輯樹教學3"/>
                  <CardBlock>
                    <CardTitle>編輯樹教學3</CardTitle>
                  </CardBlock>
                </Card>
              </CardDeck>
            </div>
          )}/>

          <Route exact path="/Mytree_SingleNode" render={() => (
            <div>
              <Mytree_SingleNode/>
            </div>
          )}/>

        </div>
      </Router>
    );
  }

}
