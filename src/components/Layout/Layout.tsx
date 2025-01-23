import Header from './Header/Header';
import Footer from './Footer/Footer';

export type LayoutProps = {
	children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
	return (
	<div className='layout'>
		<Header className='headerFooter' />
		{children}
		<Footer className='headerFooter'/>
	</div>);
}
