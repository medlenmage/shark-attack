const students = [
  {
    id: '',
    firstName: '',
    lastName: '',
    isDead: false,
  },
  {
    id: '',
    firstName: '',
    lastName: '',
    isDead: false,
  },
  {
    id: '',
    firstName: '',
    lastName: '',
    isDead: false,
  },
  {
    id: '',
    firstName: '',
    lastName: '',
    isDead: false,
  },
  {
    id: '',
    firstName: '',
    lastName: '',
    isDead: false,
  },
  {
    id: '',
    firstName: '',
    lastName: '',
    isDead: false,
  },
  {
    id: '',
    firstName: '',
    lastName: '',
    isDead: false,
  },
  {
    id: '',
    firstName: '',
    lastName: '',
    isDead: false,
  },
  {
    id: '',
    firstName: '',
    lastName: '',
    isDead: false,
  },
  {
    id: '',
    firstName: '',
    lastName: '',
    isDead: false,
  },
  {
    id: '',
    firstName: '',
    lastName: '',
    isDead: false,
  },
  {
    id: '',
    firstName: '',
    lastName: '',
    isDead: false,
  },
  {
    id: '',
    firstName: '',
    lastName: '',
    isDead: false,
  },
  {
    id: '',
    firstName: '',
    lastName: '',
    isDead: false,
  },
  {
    id: '',
    firstName: '',
    lastName: '',
    isDead: false,
  },
  {
    id: '',
    firstName: '',
    lastName: '',
    isDead: false,
  },
  {
    id: '',
    firstName: '',
    lastName: '',
    isDead: false,
  },
  {
    id: '',
    firstName: '',
    lastName: '',
    isDead: false,
  },
  {
    id: '',
    firstName: '',
    lastName: '',
    isDead: false,
  },
  {
    id: '',
    firstName: '',
    lastName: '',
    isDead: false,
  },
];

const livingStudents = () => {
  students.isDead = false;
  return students;
};

const dearlyBeloved = () => {
  students.isDead = true;
  return students;
};

const followTheLight = (id) => {
  students.isDead = true;
};
export default { livingStudents, dearlyBeloved, followTheLight };
