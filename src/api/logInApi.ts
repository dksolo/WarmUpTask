export interface LogInData {
	message: string;
}

export const getLogInData = (): Promise<LogInData> => {
	return Promise.resolve({
		message: 'PROMISE RESOLVED: LogIn Data',
	});
};