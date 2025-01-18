import clsx from "clsx";
import styles from './Typography.module.scss';

export type TypographyProps = {
	tag: string;
	value: string;
	className?: string;
};

export function Typography({ tag, value, className }: TypographyProps) {
	const CustomTag = tag as keyof JSX.IntrinsicElements;
	return <CustomTag className={clsx(styles.container, className)}>
		{value}
	</CustomTag>;
}
