import React from 'react';
import PropTypes from 'prop-types';
import Gravestone from '../Gravestone/Gravestone';
import studentShape from '../../helpers/propz/studentShape';

class Graveyard extends React.Component {
  static propTypes = {
    student: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const { students } = this.props;

    const studentCards = students.map((student) => (<Gravestone key={student.id} student={student}/>));

    return (
      <div>
        <h2>Bring out yah dead!</h2>
        { studentCards }
      </div>
    );
  }
}

export default Graveyard;
