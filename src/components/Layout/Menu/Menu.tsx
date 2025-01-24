import clsx from 'clsx';
import Anchor from '../../common/Anchor/Anchor';

export type MenuProps = {
	className?: string;
	menuItems: MenuItemProps[];
};

export type MenuItemProps = {
	text: string;
	href: string;
	className?: string;
}

export default function Menu({ className, menuItems }: MenuProps) {
	const renderItem = ((item : MenuItemProps) => <Anchor className={item.className} link={item.href}>{item.text}</Anchor>);

	return( 
		<nav className={clsx(className)}>
			{
			menuItems.map((item, index) => 
				<li key={index}>
					{renderItem(item)}
				</li>)
			}
		</nav>
        );
}
