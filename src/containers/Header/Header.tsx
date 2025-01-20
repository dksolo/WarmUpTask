import clsx from "clsx";
import { Typography } from "../../components/Typography/Typography";
import { useTranslation } from "react-i18next";
import Menu from "../Menu/Menu";

export type HeaderProps = {
	className?: string;
};

export default function Header({ className }: HeaderProps) {
	const [ t ] = useTranslation();

	return <div className={clsx(className)}>
		<Typography tag='h1' value={t('warmUpTask')}/>
		<Menu />
	</div>;
}