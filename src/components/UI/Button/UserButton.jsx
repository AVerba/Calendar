import styles from './UserButton.module.css';
import PropTypes from 'prop-types';
import cx from 'classnames';

export const UserButton = ({ className, children }) => {
  const classList = cx(styles.btn, className);
  return <button className={classList}>{children}</button>;
};
UserButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
