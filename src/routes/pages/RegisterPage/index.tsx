import React, { lazy, Suspense } from 'react';
import { ActionFunctionArgs, Form, LoaderFunctionArgs, useLoaderData } from 'react-router';

const LazyRegisterPage = lazy(() =>
	import('./RegisterPage').then(module => ({
		default: module.RegisterPage
	}))
);

const RegisterPage = (
	props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => {
	const data = useLoaderData<loaderResponse>();
	return (
		<Suspense fallback={<p>Loading...</p>}>
			<LazyRegisterPage data={data} {...props} />
		</Suspense>
	)
};

async function loader({ params, request }: LoaderFunctionArgs) {
    console.log('LOADER: Register Page')
	return Promise.resolve({
		result: 'OK'
	});
}

async function action({ params, request }: ActionFunctionArgs) {
    console.log('ACTION: Register Page')
	const data = await request.formData();
	const payload = Object.fromEntries(data.entries()) as object
	console.log(payload);
	return null;
}

export type loaderResponse = Awaited<ReturnType<typeof loader>>;

export default {
	loader,
	action,
	element: <RegisterPage />
};