import React, { lazy, Suspense } from 'react';
import { ActionFunctionArgs, Form, LoaderFunctionArgs, useLoaderData } from 'react-router';

const LazyMainPage = lazy(() =>
	import('./MainPage').then(module => ({
		default: module.MainPage
	}))
);

const MainPage = (
	props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => {
	const data = useLoaderData<loaderResponse>();
	return (
		<Suspense fallback={<p>Loading...</p>}>
			<LazyMainPage data={data} {...props} />
		</Suspense>
	)
};

async function loader({ params, request }: LoaderFunctionArgs) {
    console.log('LOADER: Main Page')
	return Promise.resolve({
		result: 'OK'
	});
}

async function action({ params, request }: ActionFunctionArgs) {
    console.log('ACTION: Main Page')
	const data = await request.formData();
	const payload = Object.fromEntries(data.entries()) as object
	console.log(payload);
	return null;
}

export type loaderResponse = Awaited<ReturnType<typeof loader>>;

export default {
	loader,
	action,
	element: <MainPage />
};