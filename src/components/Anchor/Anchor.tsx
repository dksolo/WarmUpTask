import clsx from "clsx";
import styles from './Anchor.module.scss';
import { To, NavLink } from 'react-router';

export type AnchorProps = {
	type: 'to' | 'href';
	className?: string;
	href?: string;
	to?: To;
	text: string;
}

const Anchor: React.FC<AnchorProps> = ({ type, className, to, href, text }) => {
	let component: React.ReactNode;
	switch (type) {
		case "to":
			component = <NavLink className={clsx(styles.container, className)} to={to!}>{text}</NavLink>;
			break;
		case "href":
			component = <a className={clsx(styles.container, className)} href={href!}>{text}</a>;
			break;

	}
	return component;
}

export default Anchor
