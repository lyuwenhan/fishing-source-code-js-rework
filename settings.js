export default function createSettings(lang, data, functions) {
	async function choose() {
		await functions.clear();
		if (!data.gameState.settings.forceInstantOutput) {
			await functions.print(lang.current.functions.chooseSpeed);
			await functions.print(functions.listToChoice(lang.current.functions.speedName));
			let c;
			do {
				c = await functions.getch()
			} while (!/[1-3]/.test(c));
			data.gameState.dataSaver.textSpeed = Number(c) - 1
		}
		await functions.clear();
		for (const text of lang.current.functions.skills) {
			await functions.print(text)
		}
		while (true) {
			const c = await functions.getch();
			if (c === "1") {
				data.gameState.dataSaver.catchSpeedLevel = 5;
				break
			} else if (c === "2") {
				data.gameState.dataSaver.incomeLevel = 5;
				break
			} else if (c === "3") {
				data.gameState.dataSaver.slipOffChance = 10;
				break
			} else if (c === "4") {
				data.gameState.dataSaver.actionSpeedMultiplier = 2;
				break
			} else if (c === "5") {
				data.gameState.dataSaver.bigFishChance = 40;
				break
			} else if (c === "6") {
				break
			}
		}
	}
	async function setTextSpeed() {
		await functions.clear();
		await functions.print(lang.current.functions.chooseSpeed);
		await functions.print(functions.listToChoice(lang.current.functions.speedName, lang.current.functions.exit));
		let c;
		do {
			c = Number(await functions.getch())
		} while (!functions.isNumberBetween(c, 1, 4));
		if (c <= 3) {
			data.gameState.dataSaver.textSpeed = c - 1
		}
	}
	return Object.freeze({
		choose,
		setTextSpeed
	})
}
