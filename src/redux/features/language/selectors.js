export const selectedLanguage = (state) => {
	const languageKey = state.language.selectedLanguage;
	const allLanguages = state.language.languages;

	return allLanguages[languageKey];
}