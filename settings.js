export default class Settings {
	#lang = undefined;
	#data = undefined;
	#functions = undefined;
	constructor(lang, data, functions) {
		this.#lang = lang;
		this.#data = data;
		this.#functions = functions;
		Object.freeze(this)
	}
	async choose() {
		await this.#functions.clear();
		if (!this.#data.gameState.settings.forceInstantOutput) {
			await this.#functions.print(this.#lang.current.functions.chooseSpeed);
			await this.#functions.print(this.#functions.listToChoice(this.#lang.current.functions.speedName));
			let c;
			do {
				c = await this.#functions.getch()
			} while (!/[1-3]/.test(c));
			this.#data.gameState.dataSaver.textSpeed = Number(c) - 1
		}
		await this.#functions.clear();
		for (const text of this.#lang.current.functions.skills) {
			await this.#functions.print(text)
		}
		while (true) {
			const c = await this.#functions.getch();
			if (c === "1") {
				this.#data.gameState.dataSaver.catchSpeedLevel = 5;
				break
			} else if (c === "2") {
				this.#data.gameState.dataSaver.incomeLevel = 5;
				break
			} else if (c === "3") {
				this.#data.gameState.dataSaver.slipOffChance = 10;
				break
			} else if (c === "4") {
				this.#data.gameState.dataSaver.cleanerCount = 1;
				this.#data.gameState.dataSaver.cleaningMultiplier = 2;
				break
			} else if (c === "5") {
				this.#data.gameState.dataSaver.actionSpeedMultiplier = 2;
				break
			} else if (c === "6") {
				this.#data.gameState.dataSaver.bigFishChance = 40;
				break
			} else if (c === "7") {
				break
			}
		}
	}
	async setTextSpeed() {
		await this.#functions.clear();
		await this.#functions.print(this.#lang.current.functions.chooseSpeed);
		await this.#functions.print(this.#functions.listToChoice(this.#lang.current.functions.speedName, this.#lang.current.functions.exit));
		let c;
		do {
			c = Number(await this.#functions.getch())
		} while (!this.#functions.isNumberBetween(c, 1, 4));
		if (c <= 3) {
			this.#data.gameState.dataSaver.textSpeed = c - 1
		}
	}
}
