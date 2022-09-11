import PropTypes from 'prop-types';

export const Contact = ({ contact: { id, name, number }, onDeleteContact }) => {
  return (
    <li>
      {name}: {number}{' '}
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
