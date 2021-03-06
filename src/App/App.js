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

  jawsIsComing = (e) => {
    // e.preventDefault();
    const freshMeat = studentData.livingStudents();
    if (freshMeat.length > 0) {
      const randomBite = freshMeat[Math.floor(Math.random() * freshMeat.length)];
      // const tempId = randomBite;
      // const theVictim = freshMeat
      // console.error('theVictim', theVictim);
      studentData.followTheLight(randomBite.id);
      const livingStudents = studentData.livingStudents();
      const dearlyBeloved = studentData.dearlyBeloved();
      this.setState({ livingStudents, dearlyBeloved });
      console.error('livingStudents', livingStudents);
    }
    console.error('hello we attackin?');
  }

  render() {
    const { livingStudents } = this.state;
    const { dearlyBeloved } = this.state;

    return (
      <div className="App">
        <h2>Shark Attack</h2>
        <button className="btn btn-danger" onClick={this.jawsIsComing}>There's sharks in these waters</button>
        <SharkTank students={livingStudents}/>
        <Graveyard students={dearlyBeloved}/>
      </div>
    );
  }
}

export default App;
