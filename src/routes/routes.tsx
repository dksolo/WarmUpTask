import RegisterPage from "./pages/RegisterPage/RegisterPage";
import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/LoginPage/LoginPage";

export const routes = [
	{ index: true, element: <MainPage /> },
	{ path: '/register', element: <RegisterPage /> },
	{ path: '/login', element: <LoginPage /> }
];