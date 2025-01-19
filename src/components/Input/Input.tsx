import clsx from "clsx";
import styles from './Input.module.scss';
import { HTMLInputTypeAttribute } from 'react'

export type InputProps = {
	type?: 'email' | 'userName' | 'password' | 'text';
	value?: string;
	id?: string;
	className?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Input({ type, id, value, onChange, className }: InputProps) {
	let placeholder: string;
	let inputType: string;
	switch (type) {
		case 'email':
			placeholder = 'johnSmith@mail.com';
			inputType = 'email';
			break;

		case 'userName':
			placeholder = 'John Smith';
			inputType = 'text'
			break;

		case 'password':
			placeholder = 'Password1!';
			inputType = 'password'
			break;

		case 'text':
			placeholder = 'some text';
			inputType = 'text'
			break;

		default:
			placeholder = 'Error';
			inputType = 'text'
			break;

	};

	return <input type={inputType}
		className={clsx(styles.container, className)}
		id={id}
		value={value}
		onChange={onChange}
		placeholder={placeholder} />;
}
