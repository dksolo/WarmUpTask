import clsx from "clsx";
import styles from './Input.module.scss';

export type InputProps = {
	type: 'InputText' | 'InputEmail' | 'InputPassword';
	value: string;
	placeholder?: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function TemplateName({ className }: TemplateNameProps) {
	return <div className={clsx(styles.container, className)} data-testid="TemplateName">
		TemplateName
	</div>;
}
