import * as EN from "./lang/EN.js";
import * as CN from "./lang/CN.js";
export default class Lang {
	setLanguage(lang) {
		if (this.langs[lang]) {
			this.langCode = lang;
			this.current = {
				...this.langs["EN"],
				...this.langs[lang]
			}
		}
	}
	constructor(code) {
		this.langs = {
			EN: EN.getCopy(),
			CN: CN.getCopy()
		};
		this.langCodes = Object.keys(this.langs);
		this.langCode = "EN";
		this.current = this.langs.EN;
		if (code) {
			this.setLanguage(code)
		}
		Object.seal(this)
	}
}
