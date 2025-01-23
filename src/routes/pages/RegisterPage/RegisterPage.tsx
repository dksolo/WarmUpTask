import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout/Layout';
import { Section } from '@/components/Layout/Section/Section';
import { Card } from '@/components/Layout/Card/Card';
import RegisterForm from '@/screens/RegisterForm/RegisterForm';
import { getRegisterData, RegisterData } from '@/api/registerApi';

//TODO FIX THIS \|/

const handleRegisterSubmit = (
	name: string,
	email: string,
	password: string
) => {
	console.log('Register submitted:', {
		name,
		email,
		password
	});
};

const RegisterPage: React.FC = () => {
	const [data, setData] = useState<RegisterData | null>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		getRegisterData()
			.then((response) => {setData(response); console.log(data)})
			.catch((err) =>
				setError(err instanceof Error ? err.message : String(err))
			);
	}, []);

	return (
		<Section>
			<Card>
				<RegisterForm onSubmit={handleRegisterSubmit} />
			</Card>
			{error && <div>Error: {error}</div>}
		</Section>
	);
};

export default RegisterPage;