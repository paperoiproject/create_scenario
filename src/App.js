import React, { Component } from "react";
import "./assets/App.css";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import CreateScenario from "./createScenario.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AppBar position="static" color="default">
            <Tabs variant="fullWidth">
              <Tab label="シナリオ一覧" />
              <Tab label="シナリオ作成" />
              <Tab label="タイムテーブル" />
              <Tab label="リアルタイム操作" />
            </Tabs>
          </AppBar>
        </header>
        <main className="App-main">
          <CreateScenario />
        </main>
      </div>
    );
  }
}

export default App;
