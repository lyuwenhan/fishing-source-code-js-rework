export default class NormalizeDataSaver {
	#data = undefined;
	#functions = undefined;
	run;
	#run() {
		const fallback = this.#data.getData();
		const source = this.#functions.isPlainObject(this.#data.gameState.dataSaver) ? this.#data.gameState.dataSaver : {};
		const normalized = {
			...fallback
		};
		normalized.money = this.#functions.clampInt(source.money, 0, Number.MAX_SAFE_INTEGER, fallback.money);
		normalized.catchSpeedLevel = this.#functions.clampInt(source.catchSpeedLevel, 0, this.#data.constant.maxCatchSpeedLevel, fallback.catchSpeedLevel);
		normalized.incomeLevel = this.#functions.clampInt(source.incomeLevel, 0, this.#data.constant.maxIncomeLevel, fallback.incomeLevel);
		normalized.totalFishCaught = this.#functions.clampInt(source.totalFishCaught, 0, Number.MAX_SAFE_INTEGER, fallback.totalFishCaught);
		normalized.bigFishChance = this.#functions.clampInt(source.bigFishChance, 0, 100, fallback.bigFishChance);
		normalized.actionSpeedMultiplier = this.#functions.clampInt(source.actionSpeedMultiplier, 1, 10, fallback.actionSpeedMultiplier);
		normalized.slipOffChance = this.#functions.clampInt(source.slipOffChance, 0, 99, fallback.slipOffChance);
		normalized.rodLevel = this.#functions.clampInt(source.rodLevel, 0, 6, fallback.rodLevel);
		normalized.textSpeed = this.#functions.clampInt(source.textSpeed, 0, 2, fallback.textSpeed);
		normalized.challengeLevel = this.#functions.clampInt(source.challengeLevel, 0, 2, fallback.challengeLevel);
		normalized.ovenCount = this.#functions.clampInt(source.ovenCount, 0, 5, fallback.ovenCount);
		normalized.hunger = this.#functions.clampInt(source.hunger, 0, 100, fallback.hunger);
		normalized.foodFish = this.#functions.clampInt(source.foodFish, 0, Number.MAX_SAFE_INTEGER, fallback.foodFish);
		let foodFish;
		if (!Array.isArray(source.foodFish)) {
			foodFish = fallback.foodFish.map(pair => [...pair])
		} else {
			if (source.foodFish.length >= fallback.foodFish.length) {
				foodFish = source.foodFish.slice(0, fallback.foodFish.length)
			} else {
				foodFish = [...source.foodFish, ...Array.from({
					length: fallback.foodFish.length - source.foodFish.length
				}, () => [0, 0])]
			}
		}
		normalized.foodFish = foodFish.map(pair => [this.#functions.clampInt(pair?.[0], 0, Number.MAX_SAFE_INTEGER, 0), this.#functions.clampInt(pair?.[1], 0, Number.MAX_SAFE_INTEGER, 0)]);
		normalized.compactMode = typeof source.compactMode === "boolean" ? source.compactMode : fallback.compactMode;
		this.#data.gameState.dataSaver = normalized
	}
	constructor(data, functions) {
		this.#data = data;
		this.#functions = functions;
		this.run = this.#run.bind(this);
		Object.freeze(this)
	}
}
