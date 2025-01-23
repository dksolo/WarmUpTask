import Header from './Header/Header';
import Footer from './Footer/Footer';
import { useTranslation } from "react-i18next";
import { MenuItemProps } from './Menu/Menu';

export type LayoutProps = {
	children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	const [ t ] = useTranslation();
	const navItems: MenuItemProps[] = [
		{
			'text': t('navHome'),
			'href': '/'
		},
		{
			'text': t('navLogin'),
			'href': '/login'
		},
		{
			'text': t('navRegister'),
			'href': '/register'
		},
	]

	return (
	<div className='layout'>
		<Header className='headerFooter' menu={navItems} />
		{children}
		<Footer className='headerFooter' menu={navItems}/>
	</div>);
}

export default Layout