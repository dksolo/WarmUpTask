import { createBrowserRouter, RouterProvider, Outlet } from 'react-router';
import { routes as publicRoutes } from '@/routes/routes';
import Layout from './components/Layout/Layout';

function LayoutWrapper() {
	return (
	<Layout>
		<Outlet />
	</Layout>
		);
}
const router = createBrowserRouter([
	{
		element: <LayoutWrapper />,
		children: publicRoutes,
	},
]);
function App() {
	return <RouterProvider router={router} />;
}

export default App;