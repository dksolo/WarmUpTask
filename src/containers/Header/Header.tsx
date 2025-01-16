import clsx from "clsx";
import styles from './TemplateName.module.scss';

export type HeaderProps = {
	className: string;
	children?: React.ReactNode;
};

export default function Header({ className }: TemplateNameProps) {
	return <div className={clsx(styles.container, className)}>

		{children}
	</div>;
}
