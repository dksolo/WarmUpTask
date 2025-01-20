import clsx from "clsx";
import Menu from "../Menu/Menu";

export type FooterProps = {
	className?: string;
};

export default function Footer({ className }: FooterProps) {
	return <div className={clsx(className)}>
		<Menu />
	</div>;
}
