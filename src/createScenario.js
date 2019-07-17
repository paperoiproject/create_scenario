import React, { Component } from "react";
import "./assets/createScenario.css";
import NamingField from "./containers/namingField.js";
import Indicate from "./containers/indicate";

class CreateScenario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actionHash : {
        "topLeft": "笑う",
        "topCenter": "顔を赤らめる",
        "topRight": "あやまる",
        "midwayLeft": "首を縦に振る",
        "midwayCenter": "首を横に振る",
        "midwayrRight": "首を傾ける",
        "bottomLeft": "左を向く",
        "bottomCenter": "右を向く",
        "bottomRight": "何もしない"
      },
      elements: [
        {
          //judg: "backImage",
          //imageData: "imageData",
          //text: "textValue"
        }//,
        //{
        //  judg: "actionAndVoice",
        //  text: "textValue"
        //}
      ],
    };
  }

  addList(item) {
    let index = this.state.items.findIndex(temp => temp.name === item.name);
    let temp_items = this.state.itemsForTimeTable;
    temp_items.push(this.state.items[index]);
    this.setState({
      itemsForTimeTable: temp_items
    });
  }

  onDecide(imageData, textValue) {
    let temp_elements = this.state.elements;
    temp_elements.push({
      judg: "backImage",
      imageData: imageData,
      text: textValue
    });
    this.setState({
      elements: temp_elements
    });
  }

  onDecideAv = (alignment, voiceTextValue) => {
    let temp_elements = this.state.elements;
    temp_elements.push({
      judg: "actionAndVoice",
      text: this.state.actionHash[alignment] + "：" + voiceTextValue
    });
    this.setState({
      elements: temp_elements
    });
  }

  render() {
    return (
      <div className="create-scenario">
        <div className="Scenario-naming-field">
          <NamingField />
        </div>
        <div className="Action-list-field">
          <Indicate
            elements={this.state.elements}
            onDecide={(imageData, textValue) =>
              this.onDecide(imageData, textValue)
            }
            onDecideAv={(alignment, voiceTextValue) => {
              this.onDecideAv(alignment, voiceTextValue)
            }}
          />
        </div>
      </div>
    );
  }
}

export default CreateScenario;
