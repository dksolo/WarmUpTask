import clsx from "clsx";
import styles from './TemplateName.module.scss';

export type ModalProps = {
	children: React.ReactNode;
};

export function TemplateName({ className }: TemplateNameProps) {
	return <div className={clsx(styles.container, className)} data-testid="TemplateName">
		TemplateName
	</div>;
}
