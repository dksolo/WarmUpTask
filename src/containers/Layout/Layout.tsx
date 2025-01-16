import clsx from "clsx";
import styles from './Layout.module.scss';

export type LayoutProps = {
	children: React.ReactNode;
};

export function TemplateName({ className }: TemplateNameProps) {
	return <div className={clsx(styles.container, className)} data-testid="TemplateName">
		TemplateName
	</div>;
}
