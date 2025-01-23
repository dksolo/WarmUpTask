import React, { useState, useEffect } from 'react';
import { Section } from '@/components/Layout/Section/Section';
import { Action } from '@/components/common/Action/Action';
import { Modal } from '@/components/Layout/Modal/Modal';
import LoginForm from '@/screens/LoginForm/LoginForm';
import RegisterForm from '@/screens/RegisterForm/RegisterForm';
import { useTranslation } from 'react-i18next';
import { Card } from '@/components/Layout/Card/Card';
import LanguageSelector from '@/components/common/LanguageSelector/LanguageSelector';
import { Typography } from '@/components/common/Typography/Typography';

export type MainPageProps = {
	data: {result: string}
}

export const MainPage: React.FC<MainPageProps> = ( {data} ) => {
	const [logInModalVisible, setLogInModalVisible] = useState(false);
	const [regModalVisible, setRegModalVisible] = useState(false);
	const [ t ] = useTranslation()


	return (
		<Section>
			<Card>
				<LanguageSelector />
				<Action type="button" text={t('LogIn')} onClick={() => setLogInModalVisible(true)} />
				<Action type="button" text={t('Register')} onClick={() => setRegModalVisible(true)} />
				<Typography tag='p' value={data.result} />
			</Card>
			{logInModalVisible && (
				<Modal onClose={() => setLogInModalVisible(false)}>
				<LoginForm
					onSubmit={(email, password) => {
						console.log('Logging In...\n DATA:', { email, password });
						setLogInModalVisible(false);
					}}
				/>
			</Modal>
		)}
		{regModalVisible && (
			<Modal onClose={() => setRegModalVisible(false)}>
				<RegisterForm
					onSubmit={(name, email, password) => {
						console.log('Registering...\nDATA:', {
							name,
							email,
							password
						});
						setRegModalVisible(false);
					}}
				/>
			</Modal>
		)}
		</Section>
	)
}