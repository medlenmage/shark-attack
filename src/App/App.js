import React from 'react';
import './App.scss';
import studentData from '../helpers/Data/studentData';

class App extends React.Component {
  state = {
    students: [],
  }

  componentDidMount() {
    const livingStudents = studentData.livingStudents();
    const dearlyBeloved = studentData.dearlyBeloved();
    this.setState({ livingStudents, dearlyBeloved });
  }

  render() {
    return (
      <div className="App">
        <h2>Shark Attack</h2>
      </div>
    );
  }
}

export default App;
