import clsx from "clsx";
import styles from './TemplateName.module.scss';

export type ActionProps = {
	type: 'button' | 'link';
	href: string;
	text: string;
	className?: string;
};

export function Action({ type, href, text, className, ...props }: ActionProps) {
	var component: React.ReactNode;
	switch (type) {
		case 'button':
			component = <button className={clsx(styles.container, className)} {...props}>{text}</button>;
			break;
		case 'link':

			component = <a className={clsx(styles.container, className)} href={href}>{text}</a>;
			break;
	}
	return <div className={clsx(styles.container, className)} data-testid="TemplateName">
		TemplateName
	</div>;
}
