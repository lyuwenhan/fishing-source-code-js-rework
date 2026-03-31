import EN from "./lang/EN.js";
import CN from "./lang/CN.js";
const allLangs = {
	EN,
	CN
};
const langs = {
	...allLangs,
	current: allLangs.EN
};
export function setLanguage(lang) {
	if (langs[lang]) {
		langs.current = langs[lang]
	}
}
export default langs;
