import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCustomers } from 'store/customer/actions';

import styles from './styles.module.scss';

const Character = () => {
    const dispatch = useDispatch();
    const { characters } = useSelector((state) => state.character);

    useEffect(() => {
        dispatch(getCustomers());
    }, [dispatch]);

    return (
        <div className={styles.container}>
            {characters.length > 0 && characters.map((item,index) =>
                <Link
                    key={index}
                    className={styles.link}
                    to=''>
                </Link>
            )}
        </div>
    );
}

export default Character;
