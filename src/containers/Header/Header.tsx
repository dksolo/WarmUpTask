import clsx from "clsx";
import styles from './TemplateName.module.scss';
import Anchor from '../../components/Anchor/Anchor';



export type HeaderProps = {
	className: string;
};

export default function Header({ className }: HeaderProps) {
	return <div className={clsx(styles.container, className)}>
		<div>Logo</div>
		<nav>
			<li><Anchor type={'href'} href={'/'} text={'Home'} /></li>
			<li><Anchor type={'href'} href={'/login'} text={'Login'} /></li>
			<li><Anchor type={'href'} href={'/register'} text={'Register'} /></li>
		</nav>
	</div>;
}
