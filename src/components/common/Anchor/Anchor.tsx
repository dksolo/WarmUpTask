import clsx from "clsx";
import styles from './Anchor.module.scss';
import { To, NavLink } from 'react-router';

export type AnchorProps = {
	className?: string;
	href?: string;
	to?: To;
	text: string;
}

const Anchor: React.FC<AnchorProps> = ({ className, to, href, text }) => {
	let component: React.ReactNode;
	if (to) {
		component = <NavLink className={clsx(className)} to={to}>{text}</NavLink>;

	} else {
		component = <a className={clsx(className)} href={href}>{text}</a>;
	}
	return component;
}

export default Anchor
