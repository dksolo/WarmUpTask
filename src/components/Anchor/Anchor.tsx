import clsx from "clsx";
import styles from './Anchor.module.scss';
import { AnchorHTMLAttributes } from 'react';


export type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>

export function Anchor({ className }: AnchorProps) {
	return <div className={clsx(styles.container, className)} data-testid="Anchor">
		This is an Anchor
	</div>;
}
