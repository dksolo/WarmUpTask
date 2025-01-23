import clsx from "clsx";
import styles from './Typography.module.scss';

export type TypographyProps = {
	tag: string;
	value: string;
	className?: string;
};

export function Typography({ tag, value, className }: TypographyProps) {
	const CustomTag = tag as keyof JSX.IntrinsicElements;
	let extraStyle: string;
	switch (CustomTag) {
		case 'h1':
			extraStyle = styles.mainHeader;
			break;
		case 'p':
			extraStyle = styles.paragraph;
			break;
		default:
			extraStyle = '';
			break;
	}
	return <CustomTag className={clsx(extraStyle, className)}>
		{value}
	</CustomTag>;
}
