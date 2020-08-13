import React from 'react';
import './App.scss';
import studentData from '../helpers/Data/studentData';
import SharkTank from '../components/SharkTank/SharkTank';

class App extends React.Component {
  state = {
    livingStudents: [],
    // deadPeoples: [],
  }

  componentDidMount() {
    const livingStudents = studentData.livingStudents();
    this.setState({ livingStudents });
  }

  render() {
    const { livingStudents } = this.state;
    // const { dearlyBeloved } = this.state;

    return (
      <div className="App">
        <h2>Shark Attack</h2>
        <SharkTank students={livingStudents}/>
      </div>
    );
  }
}

export default App;
