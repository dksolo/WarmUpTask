import clsx from "clsx";
import styles from './Section.module.scss';

export type SectionProps = {
	children: React.ReactNode;
};

export function Section({ children }: SectionProps) {
	return <div className={clsx(styles.sectionContainer)}>
		<div className={styles.sectionContent}>
			{children}
		</div>
	</div>;
}
