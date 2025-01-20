import clsx from "clsx";
import Anchor from '../../components/Anchor/Anchor';
import { useTranslation } from "react-i18next";

export type FooterProps = {
	className?: string;
};

export default function Footer({ className }: FooterProps) {
	const [ t ] = useTranslation();
	return <div className={clsx(className)}>
		<nav className="navBar">
			<li><Anchor className="navBarLinks" href={'/'} text={t('navHome')} /></li>
			<li><Anchor className="navBarLinks" href={'/login'} text={t('navLogin')} /></li>
			<li><Anchor className="navBarLinks" href={'/register'} text={t('navRegister')} /></li>
		</nav>
	</div>;
}
