import clsx from "clsx";
import Anchor from '../../components/Anchor/Anchor';
import { Typography } from "../../components/Typography/Typography";
import { useTranslation } from "react-i18next";

export type HeaderProps = {
	className?: string;
};

export default function Header({ className }: HeaderProps) {
	const [ t ] = useTranslation();

	return <div className={clsx(className)}>
		<Typography tag='h1' value={t('warmUpTask')}/>
		<nav className="navBar">
			<li><Anchor className="navBarLinks" href={'/'} text={t('navHome')} /></li>
			<li><Anchor className="navBarLinks" href={'/login'} text={t('navLogin')} /></li>
			<li><Anchor className="navBarLinks" href={'/register'} text={t('navRegister')} /></li>
		</nav>
	</div>;
}