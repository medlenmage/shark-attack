import React from 'react';
import PropTypes from 'prop-types';
import './SharkTank.scss';
import LiveStudent from '../LiveStudent/LiveStudent';
import studentShape from '../../helpers/propz/studentShape';

class SharkTank extends React.Component {
  static propTypes = {
    student: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const { students } = this.props;

    const studentCards = students.map((student) => (<LiveStudent key={student.id} student={student}/>));

    return (
      <div>
        <h2>Here be the Living</h2>
        { studentCards }
      </div>
    );
  }
}

export default SharkTank;
