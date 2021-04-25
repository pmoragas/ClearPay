import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { useForm } from 'react-hook-form';

import styles from './styles.module.scss';

const FormLogin = ({ onSubmitForm, className }) => {
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => {
		onSubmitForm(data);
	};

	return (
		<div className={classnames(styles.formContainer, className)}>
			<div className={styles.loginTitle}>clearpay admin</div>
			<div className={styles.formWrapper}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className={styles.inputWrapper} >
						<label className={styles.label}>
							Email
							<input label='Email' name="email" required {...register('email')}/>
						</label>
					</div>
					<div className={styles.inputWrapper}>
						<label className={styles.label}>
							Password
							<input
								label='Password'
								name="password"
								required
								{...register('password')}
								type="password"
								className={styles.password}
							/>
						</label>

					</div>

					<div className={styles.buttonContainer}>
						<button type="submit" className={styles.button}>
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

FormLogin.propTypes = {
	onSubmitForm: PropTypes.func.isRequired,
	className: PropTypes.string,
};

FormLogin.defaultProps = {
	className: undefined,
};

export default FormLogin;
