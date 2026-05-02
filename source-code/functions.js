export default function createFunctions(data, lang) {
	const inputBuffer = [];
	const waitingResolvers = [];

	function listToChoice(...lists) {
		return [lists].flat(2).map((name, index) => `${index+1}. ${capitalize(name)}`).join(", ")
	}

	function write(text) {
		return data.gameState.requiredFunctions.write(String(text || "").replace(/\n/g, "\r\n"))
	}
	async function clear() {
		await write("\x1bc")
	}

	function onInput(str) {
		if (typeof str !== "string") {
			str = String(str)
		}
		for (const ch of str.replace(/\r\n/g, "\r").replace(/\n/g, "\r").replace(/\x08/g, "")) {
			if (waitingResolvers.length > 0) {
				const resolve = waitingResolvers.shift();
				resolve(ch)
			} else {
				inputBuffer.push(ch)
			}
		}
	}
	async function getch() {
		if (inputBuffer.length > 0) {
			return inputBuffer.shift()
		}
		return new Promise(resolve => {
			waitingResolvers.push(resolve)
		})
	}

	function getch2() {
		if (inputBuffer.length > 0) {
			return inputBuffer.shift()
		}
		return ""
	}

	function getch2s() {
		if (inputBuffer.length === 0) {
			return ""
		}
		return inputBuffer.splice(0).join("")
	}

	function isNumberBetween(num, l, r) {
		return num >= l && num <= r
	}
	async function getline(type = 0) {
		let ans = "";
		while (true) {
			const a = await getch();
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
						await write("\b \b")
					}
				}
				continue
			}
			if (!/[!-~]/.test(a)) {
				continue
			}
			ans += a;
			if (type === 1) {
				await write(a)
			} else if (type === 2) {
				await write("*")
			}
		}
		await write("\n");
		return ans
	}
	async function getlineYe(type = 0) {
		let ans = "";
		while (true) {
			const a = await getch();
			if (a === "\r") {
				break
			}
			if (a === "") {
				if (ans.length > 0) {
					ans = ans.slice(0, -1);
					if (type === 1 || type === 2) {
						await write("\b \b")
					}
				}
				continue
			}
			if (!/[!-~]/.test(a)) {
				continue
			}
			ans += a;
			if (type === 1) {
				await write(a)
			} else if (type === 2) {
				await write("*")
			}
		}
		await write("\n");
		return ans
	}
	async function sleep(time) {
		return new Promise(resolve => setTimeout(resolve, (Number.isFinite(time) && time > 0 ? time : 0) * 1e3))
	}

	function capitalize(text) {
		if (!text) {
			return ""
		}
		return text[0].toUpperCase() + text.slice(1)
	}
	async function printnl(text, time = .02) {
		await write("\x1b[?25l");
		try {
			if (!isNumberBetween(data.gameState.dataSaver.textSpeed, 0, 1) || time <= 0 || data.gameState.settings.forceInstantOutput) {
				await write(text)
			} else {
				for (const char of String(text || "")) {
					await write(char);
					await sleep(time / (data.gameState.dataSaver.textSpeed + 1) / lang.current.functions.outputSpeed)
				}
			}
		} finally {
			await write("\x1b[m\x1b[?25h")
		}
	}
	async function print(text, time = .02) {
		await printnl(text, time);
		await write("\n")
	}
	async function printa(text = "", time = .02) {
		await print(text + (text ? "    " : "") + "(" + capitalize(lang.current.functions.pressEnterToContinue) + ")", time);
		while (await getch() !== "\r");
	}
	async function printYn(text = "", time = .02) {
		const toYN = {
			Y: "y",
			N: "n",
			y: "y",
			n: "n",
			"\r": "y"
		};
		await print(text + (text ? " " : "") + "(Y/n)", time);
		let input;
		do {
			input = await getch()
		} while (!toYN[input]);
		return toYN[input] === "y"
	}

	function random(l, r) {
		return Math.floor(Math.random() * (r - l + 1)) + l
	}

	function isPlainObject(value) {
		if (value === null || typeof value !== "object") {
			return false
		}
		const proto = Object.getPrototypeOf(value);
		return proto === Object.prototype || proto === null
	}

	function clamp(value, min, max, fallback = min) {
		const numberValue = Number(value);
		if (Number.isNaN(numberValue)) {
			return fallback
		}
		return Math.min(max, Math.max(min, numberValue))
	}

	function clampInt(value, min, max, fallback = min) {
		const numberValue = Number(value);
		if (Number.isNaN(numberValue)) {
			return fallback
		}
		return Math.min(max, Math.max(min, Math.trunc(numberValue)))
	}

	function deepCopy(obj) {
		if (obj === null || typeof obj !== "object") {
			return obj
		}
		if (Array.isArray(obj)) {
			return obj.map(item => deepCopy(item))
		}
		const result = {};
		for (const key of Object.keys(obj)) {
			result[key] = deepCopy(obj[key])
		}
		return result
	}
	return Object.freeze({
		listToChoice,
		write,
		clear,
		onInput,
		getch,
		getch2,
		getch2s,
		isNumberBetween,
		getline,
		getlineYe,
		sleep,
		capitalize,
		printnl,
		print,
		printa,
		printYn,
		random,
		isPlainObject,
		clamp,
		clampInt,
		deepCopy
	})
}
