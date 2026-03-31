import EN from "./lang/EN.js";
import CN from "./lang/CN.js";
const allLangs = {
	EN,
	CN
};
const langs = {
	langs: allLangs,
	langCodes: "",
	langCode: "EN",
	current: allLangs.EN,
	setLanguage
};
langs.langCodes = Object.keys(allLangs);
langs.langCode = langs.langCodes?.[0] || "EN";
langs.current = allLangs[langs.langCode] || {};

function setLanguage(lang) {
	if (allLangs[lang]) {
		langs.langCode = lang;
		langs.current = {
			...allLangs["EN"],
			...allLangs[lang]
		}
	}
}
export default langs;
