import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Modal = ({ children, onClose, visible }) => {
  const handleKeyDown = (e) => {
    const isEsc = e.keyCode === 27;

    if (isEsc) {
      e.preventDefault();
      onClose();
    }
  };

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    }
    document.addEventListener('keydown', handleKeyDown, false);

    return () => {
      document.body.removeAttribute('style');
      document.removeEventListener('keydown', handleKeyDown, false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return visible
    ? ReactDOM.createPortal(
        <div className={styles.container}>
          <div className={styles.content}>{children}</div>
          <div className={styles.overlay} onClick={onClose} />
        </div>,
        document.body
      )
    : null;
};

Modal.propTypes = {
	children: PropTypes.node.isRequired,
	onClose: PropTypes.func,
	visible: PropTypes.bool.isRequired,
};

Modal.defaultProps = {
	onClose: () => {},
};

export default Modal;
