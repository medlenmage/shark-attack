import React from 'react';
import './App.scss';
import studentData from '../helpers/Data/studentData';
import SharkTank from '../components/SharkTank/SharkTank';
import Graveyard from '../components/Graveyard/Graveyard';

class App extends React.Component {
  state = {
    livingStudents: [],
    dearlyBeloved: [],
  }

  componentDidMount() {
    const livingStudents = studentData.livingStudents();
    const dearlyBeloved = studentData.dearlyBeloved();
    this.setState({ livingStudents, dearlyBeloved });
  }

  render() {
    const { livingStudents } = this.state;
    const { dearlyBeloved } = this.state;

    return (
      <div className="App">
        <h2>Shark Attack</h2>
        <SharkTank students={livingStudents}/>
        <Graveyard students={dearlyBeloved}/>
      </div>
    );
  }
}

export default App;
