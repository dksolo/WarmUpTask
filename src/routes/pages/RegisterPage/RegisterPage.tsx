import React, { useState, useEffect } from 'react';
import { Section } from '@/components/Layout/Section/Section';
import { Card } from '@/components/Layout/Card/Card';
import RegisterForm from '@/screens/RegisterForm/RegisterForm';
import { Typography } from '@/components/common/Typography/Typography';


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


export type RegisterPageProps = {
	data: {result: string}
}

export const RegisterPage: React.FC<RegisterPageProps> = ({data}) => {
	return (
		<Section>
			<Card>
				<RegisterForm onSubmit={handleRegisterSubmit} />
				<Typography tag='p' value={data.result} />
			</Card>
		</Section>
	);
};
