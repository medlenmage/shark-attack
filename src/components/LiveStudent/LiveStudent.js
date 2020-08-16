import React from 'react';
import PropTypes from 'prop-types';
import studentShape from '../../helpers/propz/studentShape';

class LiveStudent extends React.Component {
  static propTypes = {
    student: studentShape.studentShape,
    jawsIsComing: PropTypes.func,
  }

  render() {
    const { student } = this.props;

    return (
      <div className="card liveStudent">
        <div className="card-body">
          <h5 className="card-title">{student.firstName} {student.lastName}</h5>
          <h6>I'm Alive Help!</h6>
        </div>
      </div>
    );
  }
}

export default LiveStudent;
