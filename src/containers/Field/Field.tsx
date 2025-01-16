import clsx from "clsx";
import styles from './Field.module.scss';

export type FieldProps = {
	className: string;
	inputID: string;
	input: React.ReactNode;
	text: string;
};

export function Field({ className, inputID, input, text }: FieldProps) {
	return <div>
		<label htmlFor={inputID} className={clsx(styles.container, className)}>
			{text}
		</label>
		{input}
	</div>;
}
