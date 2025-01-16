import clsx from "clsx";
import styles from './TemplateName.module.scss';
import Anchor from '../../components/Anchor/Anchor';

export type FooterProps = {
	className?: string;
};

export default function Footer({ className }: FooterProps) {
	return <div className={clsx(styles.container, className)}>
		<div>Logo</div>
		<nav>
			<li><Anchor type={'href'} href={'/'} text={'Home'} /></li>
			<li><Anchor type={'href'} href={'/login'} text={'Login'} /></li>
			<li><Anchor type={'href'} href={'/register'} text={'Register'} /></li>
		</nav>
	</div>;
}
