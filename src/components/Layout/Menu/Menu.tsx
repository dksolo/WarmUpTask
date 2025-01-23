import Anchor from '../../common/Anchor/Anchor';

export type MenuProps = {
	className?: string;
	menuItems: MenuItemProps[];
};

export type MenuItemProps = {
	text: string;
	href: string;
}

export default function Menu({ className, menuItems }: MenuProps) {
	const renderItem = ((item : MenuItemProps) => <Anchor className={className} href={item.href} text={item.text} />);

	return( 
		<nav className="navBar">
			{
			menuItems.map((item, index) => 
				<li key={index}>
					{renderItem(item)}
				</li>)
			}
		</nav>
        );
}
