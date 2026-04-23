export default class Shop {
	#lang = undefined;
	#data = undefined;
	#functions = undefined;
	constructor(lang, data, functions) {
		this.#lang = lang;
		this.#data = data;
		this.#functions = functions;
		Object.freeze(this)
	}
	#avgText(minValue, maxValue) {
		const sum = minValue + maxValue;
		return sum % 2 === 0 ? String(sum / 2) : `${Math.floor(sum/2)}.5`
	}
	async #showResult(text) {
		await this.#functions.print(text);
		await this.#functions.sleep(.5)
	}
	async #shop0() {
		while (true) {
			await this.#functions.clear();
			await this.#functions.print(this.#functions.listToChoice(this.#lang.current.shop.shopMainMenu));
			await this.#functions.print(this.#lang.current.shop.hookSpeedTitle + ": ");
			if (this.#data.gameState.dataSaver.catchSpeedLevel === this.#data.constant.maxCatchSpeedLevel) {
				await this.#functions.print("    " + this.#lang.current.shop.maxLevelReached)
			} else {
				await this.#functions.print("    " + this.#lang.current.shop.hookSpeedCurrentPrefix + ": " + this.#avgText(this.#data.constant.minCatchSpeed[this.#data.gameState.dataSaver.catchSpeedLevel], this.#data.constant.maxCatchSpeed[this.#data.gameState.dataSaver.catchSpeedLevel]) + ", " + this.#lang.current.shop.hookSpeedNextPrefix + ": " + this.#avgText(this.#data.constant.minCatchSpeed[this.#data.gameState.dataSaver.catchSpeedLevel + 1], this.#data.constant.maxCatchSpeed[this.#data.gameState.dataSaver.catchSpeedLevel + 1]));
				await this.#functions.print("    " + this.#lang.current.shop.upgradeCostPrefix + ": $" + this.#data.constant.catchSpeedUpgradeCost[this.#data.gameState.dataSaver.catchSpeedLevel + 1] + ", " + this.#lang.current.shop.currentGoldPrefix + ": $" + this.#data.gameState.dataSaver.money)
			}
			await this.#functions.print(this.#lang.current.shop.fishingIncomeTitle + ": ");
			if (this.#data.gameState.dataSaver.incomeLevel === this.#data.constant.maxIncomeLevel) {
				await this.#functions.print("    " + this.#lang.current.shop.maxLevelReached)
			} else {
				await this.#functions.print("    " + this.#lang.current.shop.fishingIncomeCurrentPrefix + ": " + this.#avgText(this.#data.constant.minIncome[this.#data.gameState.dataSaver.incomeLevel], this.#data.constant.maxIncome[this.#data.gameState.dataSaver.incomeLevel]) + ", " + this.#lang.current.shop.fishingIncomeNextPrefix + ": " + this.#avgText(this.#data.constant.minIncome[this.#data.gameState.dataSaver.incomeLevel + 1], this.#data.constant.maxIncome[this.#data.gameState.dataSaver.incomeLevel + 1]));
				await this.#functions.print("    " + this.#lang.current.shop.upgradeCostPrefix + ": $" + this.#data.constant.incomeLevelUpgradeCost[this.#data.gameState.dataSaver.incomeLevel + 1] + ", " + this.#lang.current.shop.currentGoldPrefix + ": $" + this.#data.gameState.dataSaver.money)
			}
			await this.#functions.print(this.#lang.current.shop.hookOffTitle + ": ");
			if (this.#data.gameState.dataSaver.slipOffChance === 0) {
				await this.#functions.print("    " + this.#lang.current.shop.maxLevelReached)
			} else if (this.#data.gameState.dataSaver.slipOffChance > 10) {
				await this.#functions.print("    " + this.#lang.current.shop.hookOffCurrentPrefix + ": " + this.#data.gameState.dataSaver.slipOffChance + "%, " + this.#lang.current.shop.hookOffNextPrefix + ": " + (this.#data.gameState.dataSaver.slipOffChance - 10) + "%");
				await this.#functions.print("    " + this.#lang.current.shop.hookOffCostPrefix + " $100, " + this.#lang.current.shop.currentGoldPrefix + ": $" + this.#data.gameState.dataSaver.money)
			} else if (this.#data.gameState.dataSaver.slipOffChance > 5) {
				await this.#functions.print("    " + this.#lang.current.shop.hookOffPresetCurrent + " 10% " + this.#lang.current.shop.hookOffPresetNext + " 5%");
				await this.#functions.print("    " + this.#lang.current.shop.hookOffCostPrefix + " $100, " + this.#lang.current.shop.currentGoldPrefix + ": $" + this.#data.gameState.dataSaver.money)
			} else if (this.#data.gameState.dataSaver.slipOffChance > 1) {
				await this.#functions.print("    " + this.#lang.current.shop.hookOffCurrentPrefix + ": " + this.#data.gameState.dataSaver.slipOffChance + "%, " + this.#lang.current.shop.hookOffNextPrefix + ": " + (this.#data.gameState.dataSaver.slipOffChance - 1) + "%");
				await this.#functions.print("    " + this.#lang.current.shop.hookOffCostPrefix + " $100, " + this.#lang.current.shop.currentGoldPrefix + ": $" + this.#data.gameState.dataSaver.money)
			} else {
				await this.#functions.print("    " + this.#lang.current.shop.hookOffPresetCurrent + " 1% " + this.#lang.current.shop.hookOffPresetNext + " 0%");
				await this.#functions.print("    " + this.#lang.current.shop.hookOffCostPrefix + " $500, " + this.#lang.current.shop.currentGoldPrefix + ": $" + this.#data.gameState.dataSaver.money)
			}
			await this.#functions.print("    " + this.#lang.current.shop.cleanerCountPrefix + ": " + this.#data.gameState.dataSaver.cleanerCount);
			await this.#functions.print("    " + this.#lang.current.shop.purchaseCostPrefix + " $10, " + this.#lang.current.shop.currentGoldPrefix + ": $" + this.#data.gameState.dataSaver.money);
			await this.#functions.print(this.#lang.current.shop.cleanEfficiencyTitle + ": ");
			if (this.#data.gameState.dataSaver.cleaningMultiplier >= 10) {
				await this.#functions.print("    " + this.#lang.current.shop.maxLevelReached)
			} else {
				await this.#functions.print("    " + this.#lang.current.shop.cleanEfficiencyCurrentPrefix + " " + this.#data.gameState.dataSaver.cleaningMultiplier + " " + this.#lang.current.shop.cleanEfficiencyNextPrefix + " " + (this.#data.gameState.dataSaver.cleaningMultiplier + 1) + " " + this.#lang.current.shop.cleanEfficiencySuffix);
				await this.#functions.print("    " + this.#lang.current.shop.purchaseCostPrefix + " $30, " + this.#lang.current.shop.currentGoldPrefix + ": $" + this.#data.gameState.dataSaver.money)
			}
			await this.#functions.print(this.#lang.current.shop.aquariumCapacityTitle + ": ");
			if (this.#data.gameState.dataSaver.aquariumCapacity >= 30) {
				await this.#functions.print("    " + this.#lang.current.shop.maxLevelReached)
			} else {
				await this.#functions.print("    " + this.#lang.current.shop.aquariumCurrentPrefix + " " + this.#data.gameState.dataSaver.aquariumCapacity + " " + this.#lang.current.shop.aquariumNextPrefix + " " + (this.#data.gameState.dataSaver.aquariumCapacity + 2) + " " + this.#lang.current.shop.aquariumSuffix);
				await this.#functions.print("    " + this.#lang.current.shop.purchaseCostPrefix + " " + (this.#data.gameState.dataSaver.aquariumCapacity + 2) * 100 + ", " + this.#lang.current.shop.currentGoldPrefix + ": $" + this.#data.gameState.dataSaver.money)
			}
			await this.#functions.print(this.#lang.current.shop.ovenCountTitle + ": ");
			if (this.#data.gameState.dataSaver.ovenCount >= 3) {
				await this.#functions.print("    " + this.#lang.current.shop.ovenMaxCount)
			} else {
				await this.#functions.print("    " + this.#lang.current.shop.ovenCurrentPrefix + ": " + this.#data.gameState.dataSaver.ovenCount);
				if (this.#data.gameState.dataSaver.ovenCount < 1) {
					await this.#functions.print("    " + this.#lang.current.shop.purchaseCostPrefix + " $50, " + this.#lang.current.shop.currentGoldPrefix + ": $" + this.#data.gameState.dataSaver.money)
				} else if (this.#data.gameState.dataSaver.ovenCount === 1) {
					await this.#functions.print("    " + this.#lang.current.shop.purchaseCostPrefix + " $1000, " + this.#lang.current.shop.currentGoldPrefix + ": $" + this.#data.gameState.dataSaver.money)
				} else {
					await this.#functions.print("    " + this.#lang.current.shop.purchaseCostPrefix + " $2000, " + this.#lang.current.shop.currentGoldPrefix + ": $" + this.#data.gameState.dataSaver.money)
				}
			}
			while (true) {
				const type = await this.#functions.getch();
				if (type === "1") {
					if (this.#data.gameState.dataSaver.catchSpeedLevel === this.#data.constant.maxCatchSpeedLevel) {
						await this.#showResult("    " + this.#lang.current.shop.maxLevelReached);
						break
					} else if (this.#data.gameState.dataSaver.money < this.#data.constant.catchSpeedUpgradeCost[this.#data.gameState.dataSaver.catchSpeedLevel + 1]) {
						await this.#showResult("    " + this.#lang.current.shop.notEnoughMoney);
						break
					} else {
						this.#data.gameState.dataSaver.money -= this.#data.constant.catchSpeedUpgradeCost[++this.#data.gameState.dataSaver.catchSpeedLevel];
						await this.#showResult("    " + this.#lang.current.shop.purchaseSuccess);
						break
					}
				} else if (type === "2") {
					if (this.#data.gameState.dataSaver.incomeLevel === this.#data.constant.maxIncomeLevel) {
						await this.#showResult("    " + this.#lang.current.shop.maxLevelReached);
						break
					} else if (this.#data.gameState.dataSaver.money < this.#data.constant.incomeLevelUpgradeCost[this.#data.gameState.dataSaver.incomeLevel + 1]) {
						await this.#showResult("    " + this.#lang.current.shop.notEnoughMoney);
						break
					} else {
						this.#data.gameState.dataSaver.money -= this.#data.constant.incomeLevelUpgradeCost[++this.#data.gameState.dataSaver.incomeLevel];
						await this.#showResult("    " + this.#lang.current.shop.purchaseSuccess);
						break
					}
				} else if (type === "3") {
					if (this.#data.gameState.dataSaver.slipOffChance === 0) {
						await this.#showResult("    " + this.#lang.current.shop.maxLevelReached);
						break
					} else if (this.#data.gameState.dataSaver.slipOffChance === 1) {
						if (this.#data.gameState.dataSaver.money < 500) {
							await this.#showResult("    " + this.#lang.current.shop.notEnoughMoney);
							break
						} else {
							this.#data.gameState.dataSaver.money -= 500;
							this.#data.gameState.dataSaver.slipOffChance = 0;
							await this.#showResult("    " + this.#lang.current.shop.purchaseSuccess);
							break
						}
					} else {
						if (this.#data.gameState.dataSaver.money < 100) {
							await this.#showResult("    " + this.#lang.current.shop.notEnoughMoney);
							break
						} else {
							this.#data.gameState.dataSaver.money -= 100;
							if (this.#data.gameState.dataSaver.slipOffChance > 10) {
								this.#data.gameState.dataSaver.slipOffChance -= 10
							} else if (this.#data.gameState.dataSaver.slipOffChance > 5) {
								this.#data.gameState.dataSaver.slipOffChance = 5
							} else if (this.#data.gameState.dataSaver.slipOffChance > 0) {
								this.#data.gameState.dataSaver.slipOffChance -= 1
							}
							await this.#showResult("    " + this.#lang.current.shop.purchaseSuccess);
							break
						}
					}
				} else if (type === "4") {
					if (this.#data.gameState.dataSaver.money < 10) {
						await this.#showResult("    " + this.#lang.current.shop.notEnoughMoney);
						break
					} else {
						this.#data.gameState.dataSaver.cleanerCount++;
						this.#data.gameState.dataSaver.money -= 10;
						await this.#showResult("    " + this.#lang.current.shop.purchaseSuccess);
						break
					}
				} else if (type === "5") {
					if (this.#data.gameState.dataSaver.cleaningMultiplier === 10) {
						await this.#showResult("    " + this.#lang.current.shop.maxLevelReached);
						break
					} else if (this.#data.gameState.dataSaver.money < 30) {
						await this.#showResult("    " + this.#lang.current.shop.notEnoughMoney);
						break
					} else {
						this.#data.gameState.dataSaver.money -= 30;
						this.#data.gameState.dataSaver.cleaningMultiplier++;
						await this.#showResult("    " + this.#lang.current.shop.purchaseSuccess);
						break
					}
				} else if (type === "6") {
					if (this.#data.gameState.dataSaver.aquariumCapacity === 30) {
						await this.#showResult("    " + this.#lang.current.shop.maxLevelReached);
						break
					} else if (this.#data.gameState.dataSaver.money < (this.#data.gameState.dataSaver.aquariumCapacity + 2) * 100) {
						await this.#showResult("    " + this.#lang.current.shop.notEnoughMoney);
						break
					} else {
						this.#data.gameState.dataSaver.money -= (this.#data.gameState.dataSaver.aquariumCapacity + 2) * 100;
						this.#data.gameState.dataSaver.aquariumCapacity += 2;
						await this.#showResult("    " + this.#lang.current.shop.purchaseSuccess);
						break
					}
				} else if (type === "7") {
					if (this.#data.gameState.dataSaver.ovenCount >= 3) {
						await this.#showResult("    " + this.#lang.current.shop.ovenMaxCount);
						break
					} else {
						if (this.#data.gameState.dataSaver.ovenCount < 1) {
							if (this.#data.gameState.dataSaver.money < 50) {
								await this.#showResult("    " + this.#lang.current.shop.notEnoughMoney);
								break
							} else {
								this.#data.gameState.dataSaver.money -= 50;
								this.#data.gameState.dataSaver.ovenCount = 1;
								await this.#showResult("    " + this.#lang.current.shop.purchaseSuccess);
								break
							}
						} else if (this.#data.gameState.dataSaver.ovenCount === 1) {
							if (this.#data.gameState.dataSaver.money < 1e3) {
								await this.#showResult("    " + this.#lang.current.shop.notEnoughMoney);
								break
							} else {
								this.#data.gameState.dataSaver.money -= 1e3;
								this.#data.gameState.dataSaver.ovenCount = 2;
								await this.#showResult("    " + this.#lang.current.shop.purchaseSuccess);
								break
							}
						} else {
							if (this.#data.gameState.dataSaver.money < 2e3) {
								await this.#showResult("    " + this.#lang.current.shop.notEnoughMoney);
								break
							} else {
								this.#data.gameState.dataSaver.money -= 2e3;
								this.#data.gameState.dataSaver.ovenCount = 3;
								await this.#showResult("    " + this.#lang.current.shop.purchaseSuccess);
								break
							}
						}
					}
				} else if (type === "8") {
					return
				}
			}
		}
	}
	async #shop1() {
		while (true) {
			await this.#functions.clear();
			await this.#functions.print(this.#functions.listToChoice(this.#lang.current.shop.superShopMainMenu));
			await this.#functions.print(this.#lang.current.shop.superCastSpeedTitle + ": ");
			if (this.#data.gameState.dataSaver.actionSpeedMultiplier >= 10) {
				await this.#functions.print("    " + this.#lang.current.shop.maxLevelReached)
			} else {
				await this.#functions.print("    " + this.#lang.current.shop.superCurrentPrefix + ": " + this.#data.gameState.dataSaver.actionSpeedMultiplier + " " + this.#lang.current.shop.superNextPrefix + ": " + (this.#data.gameState.dataSaver.actionSpeedMultiplier + 1) + " " + this.#lang.current.shop.superSpeedSuffix);
				await this.#functions.print("    " + this.#lang.current.shop.purchaseCostPrefix + " $1000, " + this.#lang.current.shop.currentGoldPrefix + ": $" + this.#data.gameState.dataSaver.money)
			}
			await this.#functions.print(this.#lang.current.shop.superBigFishTitle + ": ");
			if (this.#data.gameState.dataSaver.bigFishChance >= 60) {
				await this.#functions.print("    " + this.#lang.current.shop.maxLevelReached)
			} else {
				await this.#functions.print("    " + this.#lang.current.shop.superBigFishCurrentPrefix + ": " + this.#data.gameState.dataSaver.bigFishChance + " " + "%, " + this.#lang.current.shop.superBigFishNextPrefix + ": " + (this.#data.gameState.dataSaver.bigFishChance + 5) + "%");
				await this.#functions.print("    " + this.#lang.current.shop.purchaseCostPrefix + " $1000, " + this.#lang.current.shop.currentGoldPrefix + ": $" + this.#data.gameState.dataSaver.money)
			}
			while (true) {
				const type = await this.#functions.getch();
				if (type === "1") {
					if (this.#data.gameState.dataSaver.actionSpeedMultiplier >= 10) {
						await this.#showResult("    " + this.#lang.current.shop.maxLevelReached);
						break
					} else if (this.#data.gameState.dataSaver.money < 1e3) {
						await this.#showResult("    " + this.#lang.current.shop.notEnoughMoney);
						break
					} else {
						this.#data.gameState.dataSaver.money -= 1e3;
						this.#data.gameState.dataSaver.actionSpeedMultiplier++;
						await this.#showResult("    " + this.#lang.current.shop.purchaseSuccess);
						break
					}
				} else if (type === "2") {
					if (this.#data.gameState.dataSaver.bigFishChance >= 60) {
						await this.#showResult("    " + this.#lang.current.shop.maxLevelReached);
						break
					} else if (this.#data.gameState.dataSaver.money < 1e3) {
						await this.#showResult("    " + this.#lang.current.shop.notEnoughMoney);
						break
					} else {
						this.#data.gameState.dataSaver.money -= 1e3;
						this.#data.gameState.dataSaver.bigFishChance += 5;
						await this.#showResult("    " + this.#lang.current.shop.purchaseSuccess);
						break
					}
				} else if (type === "3") {
					return
				}
			}
		}
	}
	async run() {
		await this.#functions.clear();
		await this.#functions.print(this.#functions.listToChoice(this.#lang.current.shop.shopSelectMenu));
		let type;
		while (true) {
			type = await this.#functions.getch();
			if (type === "1") {
				await this.#shop0();
				break
			} else if (type === "2") {
				await this.#shop1();
				break
			} else if (type === "3") {
				return
			}
		}
	}
}
