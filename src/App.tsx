import { createBrowserRouter, RouterProvider, Outlet, Link } from 'react-router';
import { routes as publicRoutes } from '@/routes/routes';
import Layout from './components/Layout/Layout';
import { AnchorProvider } from './components/common/Anchor/AnchorContextProvider';

function LayoutWrapper() {
	return (
	<AnchorProvider 
	AnchorElement={({ href, ...props }) => {
		return <Link {...props} to={href as string} />;
	}}>
		<Layout>
			<Outlet />
		</Layout>
	</AnchorProvider>
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