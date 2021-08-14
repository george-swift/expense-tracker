import PropTypes from 'prop-types';

const FlashMessage = ({ children }) => (
  <div className="alert alert-danger">
    { children }
  </div>
);

FlashMessage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FlashMessage;
