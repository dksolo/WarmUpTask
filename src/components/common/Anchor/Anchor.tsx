import clsx from "clsx";
import styles from './Anchor.module.scss';
import { useAnchorWProps } from "./AnchorContextProvider";
import { FunctionComponent } from "react";

export type AnchorProps = {
	children: React.ReactNode;
	link?: string | FunctionComponent;
	className?: string;
}


const Anchor: React.FC<AnchorProps> = ({...anchorProps}) => {
	const {AnchorElement , props} = useAnchorWProps(anchorProps.link)

	const typeOfLink = typeof anchorProps.link
	if (anchorProps.className) {
		props.className=clsx(
			styles.className,
			typeOfLink === 'string' && styles.simpleAnchor,
			typeOfLink === 'function' && styles.FancyAnchor
		)
	}

	if (AnchorElement) {
		return <AnchorElement  {...props}>{anchorProps.children}</AnchorElement>;
	} else {
		console.log('Anchor element is missing')
		console.log(AnchorElement)
		console.log(props)
	}
}

export default Anchor
