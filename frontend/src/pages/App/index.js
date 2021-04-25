import {logout} from 'store/user/actions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { CUSTOMERS_PATH } from 'router/paths';
import styles from './styles.module.scss';

const App = ({children}) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link
          className={styles.link}
          to={CUSTOMERS_PATH}
        >
          {"clearpay"}
        </Link>
        <button onClick={()=> dispatch(logout())}>Logout</button>
      </div>
      <div className={styles.content}>
				{children}
			</div>
    </div>
  );
}

export default App;
