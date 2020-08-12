import React from 'react';
import PropTypes from 'prop-types';
import './SharkTank.scss';
import studentShape from '../../helpers/propz/studentShape';

class SharkTank extends React.Component {
  static propTypes = {
    student: studentShape.studentShape,
  }

  render() {
    const { student } = this.props;

    return (
      <div class="card" id={student.id}>
        <div class="card-body">
          <h5 class="card-title">{student.firstName} {student.lastName}</h5>
          <h6>{student.isDead}</h6>
        </div>
      </div>
    );
  }
}
