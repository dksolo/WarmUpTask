import clsx from "clsx";
import styles from './Layout.module.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export type LayoutProps = {
	className?: string;
	children: React.ReactNode;
};

export default function Layout({ className, children }: LayoutProps) {
	return <div className={clsx(styles.container, className)}>
		<Header />
		{children}
		<Footer />
	</div>;
}
