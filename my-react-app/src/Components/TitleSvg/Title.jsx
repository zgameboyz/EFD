import {ReactComponent as ElmaTitle} from './ElmaTitle.svg';
import React from "react";
import "../../index.css";
import "./Title.css";
import "bootstrap/dist/css/bootstrap.css";


class Title extends React.Component {
  render() {

    return (
    <>
      <div id='titleContainer'>
        <ElmaTitle id="elmaTitle"/>
      </div>  
    </>
);
    }
  }

  export default Title;