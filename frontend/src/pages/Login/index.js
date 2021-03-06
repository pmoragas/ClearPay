import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { login } from 'store/user/actions';
import FormLogin from 'containers/FormLogin';
import { CUSTOMERS_PATH } from 'router/paths';

import styles from './styles.module.scss';

const Login = () => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const onSubmitForm = (values) => {
    dispatch(login(values));
  };

  useEffect(() => {
    if (user) {
      const { from } = location.state || { from: { pathname: CUSTOMERS_PATH } };

      history.replace(from);
    }
  }, [history, location.state, user]);

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <FormLogin className={styles.formLogin} onSubmitForm={onSubmitForm} />
      </div>
    </div>
  );
  };

  export default Login;
