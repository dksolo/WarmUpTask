import clsx from "clsx";
import styles from './Typography.module.scss';

export type TypographyProps = {
	tag: string;
	value: string;
	className?: string;
};

export function Typography({ tag, value, className }: TypographyProps) {
	const CustomTag = tag as keyof JSX.IntrinsicElements;
	return <CustomTag className={clsx(
		className, 
		CustomTag == 'h1' && styles.mainHeader, 
		CustomTag == 'h2' && styles.header2, 
		CustomTag == 'h3' && styles.header3, 
		CustomTag == 'p' && styles.paragraph)}>
		{value}
	</CustomTag>;
}
