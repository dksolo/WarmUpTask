import clsx from "clsx";

export type FieldProps = {
	className?: string;
	inputID?: string;
	text: string;
	children: React.ReactNode;
};

export function Field({ className, inputID, children, text }: FieldProps) {
	return (
			<label htmlFor={inputID} className={clsx(className)}>
				{text}
				{children}
			</label>
			);
}
