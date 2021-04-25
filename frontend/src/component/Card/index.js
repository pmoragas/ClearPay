import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './styles.module.scss';
import { useForm } from 'react-hook-form';

const Card = ({wallet, onSubmit}) => {
    const { register, handleSubmit } = useForm();

    return (
        <div className={styles.container}>
            <div className={styles.title}>Transfer operation</div>
            <div className={styles.origin}>
                <div className={styles.subtitle}>Origin</div>
                <div className={styles.dataPoint}>
                    <div className={styles.label}>Wallet ID</div>
                    <div className={styles.data}>{wallet.id}</div>
                </div>
                <div className={styles.dataPoint}>
                    <div className={styles.label}>Amount</div>
                    <div className={styles.data}>{wallet.amount}</div>
                </div>
            </div>
            <div className={styles.destination}>
                <div className={styles.subtitle}>Destination</div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className={styles.inputElem} for="id">Wallet ID</label>
                    <input
                        label='Wallet ID'
                        name="id"
                        required
                        {...register('id')}
                        type="text"
                        className={styles.inputElem}
                    />
                    <label className={styles.inputElem} for="amount">Amount</label>
                    <input
                        label='Amount'
                        name="amount"
                        required
                        {...register('amount')}
                        type="number"
                        className={styles.inputElem}
                    />
                    <div className={styles.buttonContainer}>
						<button type="submit" className={styles.button}>
							Submit
						</button>
					</div>
                </form>
            </div>
        </div>
    );
}

Card.propTypes = {
	wallet: PropTypes.shape({
        id: PropTypes.string,
        amount: PropTypes.number
    }),
};

Card.default = {
	wallet: {}
};

export default Card;
