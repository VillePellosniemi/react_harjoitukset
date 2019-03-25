import React, {Component} from 'react';
import Table from './components/table';
import {getAllMedia} from './utils/MediaAPI';

class App extends Component {

  state = {
    picArray: [],
  };

  componentDidMount() {
    getAllMedia().then(pics => {
      this.setState({picArray: pics});
    });
  }

  render() {
    return (
      <div className="container">
        <Table picArray={this.state.picArray}/>
      </div>
    );
  }
}

export default App;
