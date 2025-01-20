import Anchor from '../../components/Anchor/Anchor';
import { useTranslation } from "react-i18next";

export type MenuProps = {
	className?: string;
};

export default function Menu({ className }: MenuProps) {
	const [ t ] = useTranslation();
	return( 
		<nav className="navBar">
			<li><Anchor className="navBarLinks" href={'/'} text={t('navHome')} /></li>
			<li><Anchor className="navBarLinks" href={'/login'} text={t('navLogin')} /></li>
			<li><Anchor className="navBarLinks" href={'/register'} text={t('navRegister')} /></li>
		</nav>
        );
}
