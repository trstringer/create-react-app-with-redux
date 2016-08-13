import React, {PropTypes} from 'react';

const Person = ({person}) => {
  return (
    <div>
      {person.lastname}, {person.firstname}
    </div>
  );
};

Person.propTypes = {
  person: PropTypes.object.isRequired
};

export default Person;
