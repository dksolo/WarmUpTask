import styles from './Card.module.scss';

export type CardProps = {
	children: React.ReactNode;
};

export function Card({ children }: CardProps) {
	return <div className={styles.card}>
		{children}
	</div>;
}