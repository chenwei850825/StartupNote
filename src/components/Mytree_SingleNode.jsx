import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBlock,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';

import './Main.css';

export default class Mytree_SingleNode extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return ( < div > <Card>
      <CardImg top width="50%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap"/>
      <CardBlock>
        <CardTitle>單一節點</CardTitle>
      </CardBlock>
    </Card> < p > 姓名 學歷 email < /p>

        <Button>編輯 預覽 儲存</Button > < p > 提問 < Button > 觀看回答 < /Button >
        <Button>回答</Button > <Button>關注</Button > < Button > 刪除 < /Button >
        < /p > <p>
      回答
      <Button>贊同</Button >
      <Button>回覆此回答</Button >
    </p> < /div >);
  }

}
