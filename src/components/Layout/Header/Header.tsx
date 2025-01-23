import clsx from "clsx";
import { Typography } from "../../common/Typography/Typography";
import { useTranslation } from "react-i18next";
import Menu, { MenuItemProps } from "../Menu/Menu";

export type HeaderProps = {
	className?: string;
	menu?: MenuItemProps[];
};

export default function Header({ className, menu }: HeaderProps) {
	const [ t ] = useTranslation();

	return <div className={clsx(className)}>
		<Typography tag='h1' value={t('warmUpTask')}/>
		{menu ? <Menu menuItems={menu}/> : null}
	</div>;
}