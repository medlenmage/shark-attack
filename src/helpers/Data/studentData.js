const students = [
  {
    id: 'student1',
    firstName: 'Austin',
    lastName: 'Phy',
    isDead: false,
  },
  {
    id: 'student2',
    firstName: 'Brooke',
    lastName: 'Nemchak',
    isDead: false,
  },
  {
    id: 'student3',
    firstName: 'Gene',
    lastName: 'McNew',
    isDead: false,
  },
  {
    id: 'student4',
    firstName: 'Gwynne',
    lastName: 'Meeks',
    isDead: false,
  },
  {
    id: 'student5',
    firstName: 'Jeanine',
    lastName: 'Beckle',
    isDead: false,
  },
  {
    id: 'student6',
    firstName: 'Jeremiah',
    lastName: 'Vasquez',
    isDead: false,
  },
  {
    id: 'student7',
    firstName: 'Jim',
    lastName: 'Browning',
    isDead: false,
  },
  {
    id: 'student8',
    firstName: 'Jonathan',
    lastName: 'Shearon',
    isDead: false,
  },
  {
    id: 'student9',
    firstName: 'Joshua',
    lastName: 'Medlen',
    isDead: false,
  },
  {
    id: 'student10',
    firstName: 'Kamiran',
    lastName: 'Ibrahim',
    isDead: false,
  },
  {
    id: 'student11',
    firstName: 'Mark',
    lastName: 'Young',
    isDead: false,
  },
  {
    id: 'student12',
    firstName: 'Matt',
    lastName: 'Logan',
    isDead: false,
  },
  {
    id: 'student13',
    firstName: 'Michael',
    lastName: 'Dotson',
    isDead: false,
  },
  {
    id: 'student14',
    firstName: 'Nate',
    lastName: 'Owens',
    isDead: false,
  },
  {
    id: 'student15',
    firstName: 'Nick',
    lastName: 'Walters',
    isDead: false,
  },
  {
    id: 'student16',
    firstName: 'Nikhil',
    lastName: 'Gaikwad',
    isDead: false,
  },
  {
    id: 'student17',
    firstName: 'Ola',
    lastName: 'Oladinni',
    isDead: false,
  },
  {
    id: 'student18',
    firstName: 'Pete',
    lastName: 'Stewart',
    isDead: false,
  },
  {
    id: 'student19',
    firstName: 'Phonesalo',
    lastName: 'Sihanorak',
    isDead: false,
  },
  {
    id: 'student20',
    firstName: 'Ryan',
    lastName: 'Bieden',
    isDead: false,
  },
  {
    id: 'student21',
    firstName: 'William',
    lastName: 'Campbell',
    isDead: false,
  },
];

const getStudents = () => students;

const livingStudents = () => {
  if (students.isDead === false) {
    return students;
  }
  return livingStudents;
};

const dearlyBeloved = () => {
  if (students.isDead === true) {
    return students;
  }
  return dearlyBeloved;
};

const followTheLight = (studentId) => {
  students.forEach((response) => {
    if (response.id === studentId) {
      students.isDead = true;
    }
  });
};
export default {
  getStudents,
  livingStudents,
  dearlyBeloved,
  followTheLight,
};
