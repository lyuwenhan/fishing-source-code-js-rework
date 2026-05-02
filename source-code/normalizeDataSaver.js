export default function createNormalizeDataSaver(data, functions) {
	function run() {
		const fallback = data.createDataSaver();
		const source = functions.isPlainObject(data.gameState.dataSaver) ? data.gameState.dataSaver : {};
		const normalized = {
			...fallback
		};
		normalized.money = functions.clampInt(source.money, 0, Number.MAX_SAFE_INTEGER, fallback.money);
		normalized.catchSpeedLevel = functions.clampInt(source.catchSpeedLevel, 0, data.constant.maxCatchSpeedLevel, fallback.catchSpeedLevel);
		normalized.incomeLevel = functions.clampInt(source.incomeLevel, 0, data.constant.maxIncomeLevel, fallback.incomeLevel);
		normalized.totalFishCaught = functions.clampInt(source.totalFishCaught, 0, Number.MAX_SAFE_INTEGER, fallback.totalFishCaught);
		normalized.bigFishChance = functions.clampInt(source.bigFishChance, 0, 100, fallback.bigFishChance);
		normalized.actionSpeedMultiplier = functions.clampInt(source.actionSpeedMultiplier, 1, 10, fallback.actionSpeedMultiplier);
		normalized.slipOffChance = functions.clampInt(source.slipOffChance, 0, 99, fallback.slipOffChance);
		normalized.rodLevel = functions.clampInt(source.rodLevel, 0, 6, fallback.rodLevel);
		normalized.textSpeed = functions.clampInt(source.textSpeed, 0, 2, fallback.textSpeed);
		normalized.challengeLevel = functions.clampInt(source.challengeLevel, 0, 2, fallback.challengeLevel);
		normalized.ovenCount = functions.clampInt(source.ovenCount, 0, 5, fallback.ovenCount);
		normalized.hunger = functions.clampInt(source.hunger, 0, 100, fallback.hunger);
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
		normalized.foodFish = foodFish.map(pair => [functions.clampInt(pair?.[0], 0, Number.MAX_SAFE_INTEGER, 0), functions.clampInt(pair?.[1], 0, Number.MAX_SAFE_INTEGER, 0)]);
		normalized.compactMode = typeof source.compactMode === "boolean" ? source.compactMode : fallback.compactMode;
		data.gameState.dataSaver = normalized
	}
	return run
}
