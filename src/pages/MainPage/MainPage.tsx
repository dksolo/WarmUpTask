import React, { useState, useEffect } from 'react';
import { Section } from '@/containers/Section/Section';
import Anchor from '@/components/Anchor/Anchor';
import { Action } from '@/components/Action/Action'; //Button
import { Modal } from '../../containers/Modal/Modal';
import LoginForm from '../../screens/LoginForm/LoginForm';
import RegisterForm from '../../screens/RegisterForm/RegisterForm';
import { getMainData, MainData } from '../../api/mainApi';
import { useTranslation } from 'react-i18next';
import {Card} from '../../containers/Card/Card';
import LanguageSelector from '@/components/LanguageSelector/LanguageSelector';

const MainPage: React.FC = () => {
	const [logInModalVisible, setLogInModalVisible] = useState(false);
	const [regModalVisible, setRegModalVisible] = useState(false);
	const [data, setData] = useState<MainData | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [ t ] = useTranslation()

	useEffect(() => {
		getMainData()
			.then((response) => {setData(response); console.log(data)})
			.catch((err) =>
				setError(err instanceof Error ? err.message : String(err))
			);
	}, []);


	return (
		<Section>
			<Card>
				<LanguageSelector />
				<Action type="button" text={t('LogIn')} onClick={() => setLogInModalVisible(true)} />
				<Action type="button" text={t('Register')} onClick={() => setRegModalVisible(true)} />
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
		{error && <div>Error: {error}</div>}
		</Section>
	)
}

export default MainPage;