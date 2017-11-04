import React, { Component } from 'react';
import logo from './Neko2.svg';
import './App.css';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { inputDate: 0
                 , outputKin: 0
    };
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">経費精算（自家用車）</h1>
        </header>
        
        <body className="App-intro">
          <FormGroup>
            <ControlLabel>勤務日数</ControlLabel>
            <FormControl type="number" placeholder="入力してください" 
                         value={this.state.inputDate}
                         onChange={this.onChangeInputDate}/>
          </FormGroup>

          <FormGroup>
            <ControlLabel>算出結果</ControlLabel>
            <ControlLabel>{this.state.outputKin}</ControlLabel>
            <ControlLabel>円</ControlLabel>
          </FormGroup>
          
          <FormGroup>
            <ControlLabel>算出式</ControlLabel>
            <ControlLabel>{`125円×${this.state.inputDate}日×30km/10km`}</ControlLabel>
          </FormGroup>

          <FormGroup>
            <ControlLabel>注記）</ControlLabel>
            <ControlLabel>「申請日」は対象月の月末とすること。</ControlLabel>
          </FormGroup>
          
        </body>
      </div>
    );
  }
  
  // 変更イベント：勤務日数
  onChangeInputDate = (event) => {
    this.setState({
        inputDate : event.target.value
      , outputKin : this.calcKin(event)
    });
  }
  
  // 金額計算
  calcKin = (event) => {
    let myKingaku = 125*(event.target.value)*30/10;
    return myKingaku;
  }
}

export default App;
