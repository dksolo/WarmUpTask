import clsx from "clsx";
import styles from './Action.module.scss';

export type ActionProps = {
	type: 'button' | 'link';
	href?: string;
	text: string;
	className?: string;
	disabled?: boolean;
	onClick?: () => void;

};

export function Action({ type, href, disabled, text, className, onClick }: ActionProps) {
	let component: React.ReactNode;
	switch (type) {
		case 'button':
			component = <button disabled={disabled} className={clsx(className, styles.button)} onClick={onClick}>{text}</button>;
			break;
		case 'link':
			component = <a className={clsx(className)} href={href}>{text}</a>;
			break;
	}

	return component;
}
