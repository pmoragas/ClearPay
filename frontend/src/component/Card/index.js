import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import { useForm } from 'react-hook-form';

const Card = ({wallet, onSubmit, errorMsg}) => {
    const { register, handleSubmit } = useForm();

    return (
        <div className={styles.container}>
            <div className={styles.title}>Transfer operation</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.subtitle}>Origin</div>
                <label className={styles.inputElem}>Wallet ID</label>
                <input
                    id="originWalletId"
                    label='Wallet ID'
                    name="originWalletId"
                    required
                    {...register('originWalletId')}
                    type="text"
                    className={styles.inputElem}
                    readOnly
                    value={wallet.id}
                />
                <div className={styles.dataPoint}>
                    <div className={styles.label}>Amount</div>
                    <div className={styles.data}>{wallet.amount}</div>
                </div>
                <div className={styles.subtitle}>Destination</div>
                <label className={styles.inputElem}>Wallet ID</label>
                <input
                    id="destinationWalletId"
                    label='Wallet ID'
                    name="destinationWalletId"
                    required
                    {...register('destinationWalletId')}
                    type="text"
                    className={styles.inputElem}
                />
                <label className={styles.inputElem}>Amount</label>
                <input
                    id="amount"
                    label='Amount'
                    name="amount"
                    required
                    {...register('amount')}
                    type="number"
                    className={styles.inputElem}
                />
                <div className={styles.buttonContainer}>
                    <div className={styles.error}>{errorMsg}</div>
                    <button id="submit" type="submit" className={styles.button}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

Card.propTypes = {
	wallet: PropTypes.shape({
        id: PropTypes.string,
        amount: PropTypes.number
    }),
    onSubmit: PropTypes.func,
    errorMsg: PropTypes.string
};

Card.default = {
	wallet: {},
    onSubmit: () => {},
	errorMsg: undefined
};

export default Card;
