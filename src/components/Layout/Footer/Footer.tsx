import clsx from "clsx";
import Menu, { MenuItemProps } from "../Menu/Menu";

export type FooterProps = {
	className?: string;
	menu?: MenuItemProps[];
};

export default function Footer({ className, menu }: FooterProps) {
	return <div className={clsx(className)}>
		{menu ? <Menu className='navBar' menuItems={menu}/> : null}
	</div>;
}
