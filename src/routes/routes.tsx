import mainPage from './pages/MainPage'
import loginPage from './pages/LoginPage'
import registerPage from './pages/RegisterPage'

export const routes = [
	{ index: true, ...mainPage},
	{ path: '/login', ...loginPage },
	{ path: '/register', ...registerPage}
];