import clsx from "clsx";
import {Field} from "@/components/Form/Field/Field";
import { Input } from "@/components/Form/Input/Input";
import { Action } from "@/components/common/Action/Action";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Form } from "@/components/Form/Form";
import { Typography } from "@/components/common/Typography/Typography";

export type LoginFormProps = {
	onSubmit: (email: string, password: string) => void;
};

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [ t ] = useTranslation();	

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		onSubmit(email, password);
		setIsLoading(false);
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Typography tag='h2' value={t('navLogin')}/>
			<Field inputID={'email'} text={t('writeEmail')}>
				<Input id={'email'} type={'email'} onChange={(e) => setEmail(e.target.value)} />
			</Field>
			<Field inputID={'password'} text={t('writePassword')}>
				<Input id={'password'} type={'password'} onChange={(e) => setPassword(e.target.value)} />
			</Field>
			<Action type="button" disabled={!email || !password} text={isLoading ? t('isLoading') : t('Send')} />
		</Form>
	)
}

export default LoginForm;
