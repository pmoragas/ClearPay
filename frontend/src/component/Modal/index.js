import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './styles.module.scss';

const Modal = ({ children, className, containerClassName, onClose, visible }) => {
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
        <div className={classnames(styles.container, className)}>
          <div className={classnames(styles.content, containerClassName)}>{children}</div>
          <div className={styles.overlay} onClick={onClose} />
        </div>,
        document.body
      )
    : null;
};

Modal.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	containerClassName: PropTypes.string,
	onClose: PropTypes.func,
	visible: PropTypes.bool.isRequired,
};

Modal.defaultProps = {
	className: undefined,
	containerClassName: undefined,
	onClose: () => {},
};

export default Modal;
