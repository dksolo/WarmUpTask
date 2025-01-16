import clsx from "clsx";
import styles from './Typography.module.scss';

export type TypographyProps = {
	type: 'title' | 'text';
	value: string;
};

export function Typography({ type, value }: TypographyProps) {
	return <div className={clsx(styles.container, className)} data-testid="TemplateName">
		TemplateName
	</div>;
}
