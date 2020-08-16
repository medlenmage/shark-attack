import React from 'react';
import PropTypes from 'prop-types';
import studentShape from '../../helpers/propz/studentShape';

class Gravestone extends React.Component {
  static propTypes = {
    student: studentShape.studentShape,
    jawsIsComing: PropTypes.func,
  }

  render() {
    const { student } = this.props;

    return (
      <div className="card dead-student">
        <div className="card-body">
          <h5 className="card-title">{student.firstName} {student.lastName}</h5>
          <h6>I'm Alive Help!</h6>
        </div>
      </div>
    );
  }
}

export default Gravestone;
