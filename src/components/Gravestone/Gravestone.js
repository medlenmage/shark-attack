import React from 'react';
import studentShape from '../../helpers/propz/studentShape';

class Gravestone extends React.Component {
  static propTypes = {
    student: studentShape.studentShape,
  }

  render() {
    const { student } = this.props;

    return (
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{student.firstName} {student.lastName}</h5>
          <h6>I'm Alive Help!</h6>
        </div>
      </div>
    );
  }
}

export default Gravestone;
