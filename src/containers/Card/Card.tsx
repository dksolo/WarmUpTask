import clsx from "clsx";
import styles from './Card.module.scss';

export type CardProps = {
	className?: string;
	children?: React.ReactNode;
};

export function Card({ className, children }: CardProps) {
	return <div className={clsx(styles.container, className)}>
		{children}
	</div>;
}
