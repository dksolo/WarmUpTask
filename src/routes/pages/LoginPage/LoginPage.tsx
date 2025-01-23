import clsx from "clsx";
import React from 'react';
import { Section } from "@/components/Layout/Section/Section";
import { Card } from "@/components/Layout/Card/Card";

import LoginForm from "@/screens/LoginForm/LoginForm";

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