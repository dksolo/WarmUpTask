import { createContext } from 'react';
import { useContext } from "react";
import React, {
	AnchorHTMLAttributes,
	FunctionComponent,
	MouseEvent,
} from 'react';


export type AnchorProps = Omit<
	AnchorHTMLAttributes<HTMLAnchorElement>,
	'href'
> & {
	href?: string | ((event: MouseEvent<HTMLAnchorElement>) => void);
};

export type AnchorContextType = {
	AnchorElement?: FunctionComponent<AnchorProps>;
};

export type AnchorProviderProps = AnchorContextType & {
	children: React.ReactNode;
};



export const AnchorContext = createContext<AnchorContextType>({});



export function AnchorProvider({
	children,
	AnchorElement
}: AnchorProviderProps) {
	return (
		<AnchorContext.Provider value={{AnchorElement}}>
			{children}
		</AnchorContext.Provider>
	);
}


export const useAnchorWProps = (
	link?: string | FunctionComponent
) => {
	const props: AnchorHTMLAttributes<HTMLAnchorElement> = {};
	const { AnchorElement } = useContext(AnchorContext);
    switch (typeof link) {
        case "string":
            props.href = link;
            break;
        case "function":
            props.onClick = (e) => {
                e.preventDefault();
                e.stopPropagation();
                link(e);
            };
            break;
    }
	if (!AnchorElement) {
		throw new Error('Please provide context')
	}
    return  {
		'AnchorElement': AnchorElement, 
		'props': props
	} ;
};
