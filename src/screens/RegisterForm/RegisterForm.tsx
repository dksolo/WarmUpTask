import clsx from "clsx";
import { Field } from "../../containers/Field/Field";
import { Input } from "../../components/Input/Input";
import { Action } from "../../components/Action/Action";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export type RegisterFormProps = {
	onSubmit: (userName: string, email: string, password: string) => void;
};

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
	const [userName, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [ t ] = useTranslation();

	

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		onSubmit(userName, email, password);
		setIsLoading(false);
	};

	return (
		<form className="form" onSubmit={handleSubmit}>
			<Field inputID={'userName'} text={t('writeName')}>
				<Input id={'userName'} type={"userName"} onChange={(e) => setUserName(e.target.value)} />
			</Field>
			<Field inputID={'email'} text={t('writeEmail')}>
				<Input id={'email'} type={'email'} onChange={(e) => setEmail(e.target.value)} />
			</Field>
			<Field inputID={'password'} text={t('writePassword')}>
				<Input id={'password'} type={'password'} onChange={(e) => setPassword(e.target.value)} />
			</Field>
			<Action  type="button" disabled={!email || !password || !userName} text={isLoading ? t('isLoading') : t('Send')} />
		</form>
	)
}

export default RegisterForm;
