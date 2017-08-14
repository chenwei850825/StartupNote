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

export default class AboutMe extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return ( < div > <Card>
      <CardImg top width="50%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap"/>
      <CardBlock>
        <CardTitle>相片</CardTitle>
      </CardBlock>
    </Card> < p > 姓名 學歷 email < /p>

        <Button>編輯 預覽 儲存</Button > < p > 基本資料和自我介紹 < /p>
      </div >);
  }

}
