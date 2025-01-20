import clsx from "clsx";
import { Action } from "../Action/Action";
import React from "react";
import { useTranslation } from "react-i18next";

const languages = [
	{code: 'en', lang: 'English'},
	{code: 'ru', lang: 'Русский'}
]

const LanguageSelector: React.FC = () => {
	const { i18n } = useTranslation();

	const changeLanguage = async (lng:string) => {
		await i18n.changeLanguage(lng);
	}	

	return (
		<div>
			{languages.map((lng) => {
				return <Action type="button" key={lng.code} disabled={lng.code === i18n.language} text={lng.lang} onClick={() => changeLanguage(lng.code)} />
			}
			)}
		</div>
	)
}

export default LanguageSelector;
