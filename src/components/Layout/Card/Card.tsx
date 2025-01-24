import styles from './Card.module.scss';
import clsx from 'clsx';

export type CardProps = {
	children: React.ReactNode;
	href?: string;
};

export function Card({ children, href }: CardProps) {
	const WrapperTag = href ? 'a' : 'div';
	return (
	<WrapperTag className={clsx(styles.card, WrapperTag == 'a' && styles.cardLink, )}>
		{children}
	</WrapperTag>
	);
}