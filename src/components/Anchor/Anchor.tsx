import clsx from "clsx";
import styles from './Anchor.module.scss';
import { NavLink, To } from 'react-router';

export type AnchorProps = {
	type: 'navLink' | 'href';
	className?: string;
	href?: string;
	to?: To;
	text: string;
}

export function Anchor({ type, className, href, to, text }: AnchorProps) {
	let component: React.ReactNode;
	switch (type) {
		case "navLink":
			component = <NavLink className={clsx(styles.container, className)} to={to!}>{text}</NavLink>;
			break;
		case "href":
			component = <a className={clsx(styles.container, className)} href={href!}>{text}</a>;
			break;
	}

	return component;
}
