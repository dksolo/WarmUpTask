import clsx from "clsx";
import React from 'react';
import Layout from '../../containers/Layout/Layout';
import { Section } from '../../containers/Section/Section';
import { Card } from '../../containers/Card/Card';
import LoginForm from '../../screens/LoginForm/LoginForm';

const handleLogIn = async (email: string, password: string) => {
	console.log('Login submitted:', { email, password });
};

const LoginPage: React.FC = () => {
    return (
		<Section>
			<Card>
				<LoginForm onSubmit={handleLogIn} />
			</Card>
		</Section>
	);
};

export default LoginPage