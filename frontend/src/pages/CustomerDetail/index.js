import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCustomer } from 'store/customer/actions';

import styles from './styles.module.scss';

const CharacterDetail = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const detailId = params.detailId ? parseInt(params.detailId, 10) : undefined;
    const { characterDetail } = useSelector((state) => state.character);

    useEffect(() => {
        dispatch(getCustomer(detailId));
    }, [dispatch, detailId]);

    return (
        <div className={styles.container}>
            {characterDetail &&
                <div>patata</div>
            }

        </div>
    );
}

export default CharacterDetail;
