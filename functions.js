export default class Functions {
	#inputBuffer = [];
	#waitingResolvers = [];
	#data = undefined;
	#lang = undefined;
	listToChoice;
	write;
	clear;
	onInput;
	getch;
	getch2;
	getch2s;
	getline;
	getlineYe;
	printnl;
	print;
	printa;
	printYn;
	deepCopy;
	#listToChoice(...lists) {
		return [lists].flat(2).map((name, index) => `${index+1}. ${this.capitalize(name)}`).join(", ")
	}
	#write(text) {
		return this.#data.gameState.requiredFunctions.write(text.replace(/\n/g, "\r\n"))
	}
	async #clear() {
		await this.#write("\x1bc")
	}
	#onInput(str) {
		if (typeof str !== "string") {
			str = String(str)
		}
		for (const ch of [...str.replace(/\r\n/g, "\r").replace(/\n/g, "\r").replace(/\x08/g, "")]) {
			if (this.#waitingResolvers.length > 0) {
				const resolve = this.#waitingResolvers.shift();
				resolve(ch)
			} else {
				this.#inputBuffer.push(ch)
			}
		}
	}
	async #getch() {
		if (this.#inputBuffer.length > 0) {
			return this.#inputBuffer.shift()
		}
		return new Promise(resolve => {
			this.#waitingResolvers.push(resolve)
		})
	}
	#getch2() {
		if (this.#inputBuffer.length > 0) {
			return this.#inputBuffer.shift()
		}
		return ""
	}
	#getch2s() {
		if (this.#inputBuffer.length === 0) {
			return ""
		}
		return this.#inputBuffer.splice(0).join("")
	}
	isNumberBetween(num, l, r) {
		return num >= l && num <= r
	}
	async #getline(type = 0) {
		let ans = "";
		while (true) {
			const a = await this.#getch();
			if (a === "\r") {
				if (ans) {
					break
				} else {
					continue
				}
			}
			if (a === "") {
				if (ans.length > 0) {
					ans = ans.slice(0, -1);
					if (type === 1 || type === 2) {
						await this.#write("\b \b")
					}
				}
				continue
			}
			if (!/[!-~]/.test(a)) {
				continue
			}
			ans += a;
			if (type === 1) {
				await this.#write(a)
			} else if (type === 2) {
				await this.#write("*")
			}
		}
		await this.#write("\n");
		return ans
	}
	async #getlineYe(type = 0) {
		let ans = "";
		while (true) {
			const a = await this.#getch();
			if (a === "\r") {
				break
			}
			if (a === "") {
				if (ans.length > 0) {
					ans = ans.slice(0, -1);
					if (type === 1 || type === 2) {
						await this.#write("\b \b")
					}
				}
				continue
			}
			if (!/[!-~]/.test(a)) {
				continue
			}
			ans += a;
			if (type === 1) {
				await this.#write(a)
			} else if (type === 2) {
				await this.#write("*")
			}
		}
		await this.#write("\n");
		return ans
	}
	async sleep(time) {
		return new Promise(resolve => setTimeout(resolve, time * 1e3))
	}
	capitalize(text) {
		if (!text) {
			return ""
		}
		return text[0].toUpperCase() + text.slice(1)
	}
	async #printnl(text, time = .02) {
		await this.#write("\x1b[?25l");
		try {
			if (!this.isNumberBetween(this.#data.gameState.dataSaver.textSpeed, 0, 1) || time <= 0 || this.#data.gameState.settings.forceInstantOutput) {
				await this.#write(text)
			} else {
				for (const char of text) {
					await this.#write(char);
					await this.sleep(time / (this.#data.gameState.dataSaver.textSpeed + 1) / this.#lang.current.functions.outputSpeed)
				}
			}
		} finally {
			await this.#write("\x1b[m\x1b[?25h")
		}
	}
	async #print(text, time = .02) {
		await this.#printnl(text, time);
		await this.#write("\n")
	}
	async #printa(text = "", time = .02) {
		await this.#print(text + (text ? "    " : "") + "(" + this.capitalize(this.#lang.current.functions.pressEnterToContinue) + ")", time);
		while (await this.#getch() !== "\r");
	}
	async #printYn(text = "", time = .02) {
		const toYN = {
			Y: "y",
			N: "n",
			y: "y",
			n: "n",
			"\r": "y"
		};
		await this.#print(text + (text ? " " : "") + "(Y/n)", time);
		let c;
		do {
			c = await this.#getch()
		} while (!toYN[c]);
		return toYN[c] === "y"
	}
	random(l, r) {
		return Math.floor(Math.random() * (r - l + 1)) + l
	}
	isPlainObject(value) {
		if (value === null || typeof value !== "object") {
			return false
		}
		const proto = Object.getPrototypeOf(value);
		return proto === Object.prototype || proto === null
	}
	clamp(value, min, max, fallback = min) {
		const numberValue = Number(value);
		if (Number.isNaN(numberValue)) {
			return fallback
		}
		return Math.min(max, Math.max(min, numberValue))
	}
	clampInt(value, min, max, fallback = min) {
		const numberValue = Number(value);
		if (Number.isNaN(numberValue)) {
			return fallback
		}
		return Math.min(max, Math.max(min, Math.trunc(numberValue)))
	}
	#deepCopy(obj) {
		if (obj === null || typeof obj !== "object") {
			return obj
		}
		if (Array.isArray(obj)) {
			return obj.map(item => this.#deepCopy(item))
		}
		const result = {};
		for (const key of Object.keys(obj)) {
			result[key] = this.#deepCopy(obj[key])
		}
		return result
	}
	constructor(data, lang) {
		this.#data = data;
		this.#lang = lang;
		this.listToChoice = this.#listToChoice.bind(this);
		this.write = this.#write.bind(this);
		this.clear = this.#clear.bind(this);
		this.onInput = this.#onInput.bind(this);
		this.getch = this.#getch.bind(this);
		this.getch2 = this.#getch2.bind(this);
		this.getch2s = this.#getch2s.bind(this);
		this.getline = this.#getline.bind(this);
		this.getlineYe = this.#getlineYe.bind(this);
		this.printnl = this.#printnl.bind(this);
		this.print = this.#print.bind(this);
		this.printa = this.#printa.bind(this);
		this.printYn = this.#printYn.bind(this);
		this.deepCopy = this.#deepCopy.bind(this);
		Object.freeze(this)
	}
}
