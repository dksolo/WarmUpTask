import Header from './Header/Header';
import Footer from './Footer/Footer';
import { useTranslation } from "react-i18next";
import { MenuItemProps } from './Menu/Menu';
import styles from './Layout.module.scss';
import clsx from 'clsx';

export type LayoutProps = {
	children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	const [ t ] = useTranslation();
	const navItems: MenuItemProps[] = [
		{
			'text': t('navHome'),
			'href': '/',
			'className': 'navAnchor'
		},
		{
			'text': t('navLogin'),
			'href': '/login',
			'className': 'navAnchor'
		},
		{
			'text': t('navRegister'),
			'href': '/register',
			'className': 'navAnchor'
		},
	]

	return (
	<div className={clsx(styles.layout)}>
		<Header className={clsx(styles.headerFooter)} menu={navItems} />
		{children}
		<Footer className={clsx(styles.headerFooter)} menu={navItems}/>
	</div>);
}

export default Layout