import clsx from "clsx";
import {Field} from "@/containers/Field/Field";
import { Input } from "@/components/Input/Input";
import { Action } from "@/components/Action/Action";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export type LoginFormProps = {
	onSubmit: (email: string, password: string) => void;
};

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isValid, setValidation] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [ t ] = useTranslation();	

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		onSubmit(email, password);
		setIsLoading(false);
	};

	return (
		<form className="form" onSubmit={handleSubmit}>
			<Field inputID={'email'} text={t('writeEmail')}>
				<Input id={'email'} type={'email'} onChange={(e) => setEmail(e.target.value)} />
			</Field>
			<Field inputID={'password'} text={t('writePassword')}>
				<Input id={'password'} type={'password'} onChange={(e) => setPassword(e.target.value)} />
			</Field>
			<Action type="button" disabled={!email || !password} text={isLoading ? t('isLoading') : t('Send')} />
		</form>
	)
}

export default LoginForm;
