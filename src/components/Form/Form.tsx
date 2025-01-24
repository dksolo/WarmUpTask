import clsx from "clsx";
import styles from './Form.module.scss';

export type FormProps = {
	children: React.ReactNode;
	onSubmit: (e: React.FormEvent) => void;
	className?: string;
};

export function Form({ children, onSubmit, className }: FormProps) {
	return (
	<form className={clsx(styles.form, className)} onSubmit={onSubmit}>
		{children}
	</form>
	);
}
