import React from 'react';
import { Section } from "@/components/Layout/Section/Section";
import { Card } from "@/components/Layout/Card/Card";

import LoginForm from "@/screens/LoginForm/LoginForm";
import { Typography } from "@/components/common/Typography/Typography";

const handleLogIn = (email: string, password: string) => {
	// Это долна быть Async функция. 
	console.log('Login submitted:', { email, password });
};

export type LoginPageProps = {
	data: {result: string}
}


export const LoginPage: React.FC<LoginPageProps> = ( {data} ) => {
    return (
		<Section>
			<Card>
				<LoginForm onSubmit={() => handleLogIn} />
				<Typography tag='p' value={data.result} />
			</Card>
		</Section>
	);
};