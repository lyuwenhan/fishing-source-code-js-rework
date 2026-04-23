export default class Lottery {
	#lang = undefined;
	#data = undefined;
	#functions = undefined;
	run;
	async #run() {
		while (true) {
			await this.#functions.clear();
			await this.#functions.print(this.#functions.listToChoice(this.#lang.current.lottery.menu));
			await this.#functions.print(this.#lang.current.lottery.costPrefix + this.#data.gameState.dataSaver.totalFishCaught + this.#lang.current.lottery.currentMoneyPrefix + this.#data.gameState.dataSaver.money);
			await this.#functions.print(this.#lang.current.lottery.oddsHeader);
			for (const line of this.#lang.current.lottery.oddsTable) {
				await this.#functions.print(line)
			}
			while (true) {
				const c = await this.#functions.getch();
				if (c === "1") {
					if (this.#data.gameState.dataSaver.totalFishCaught < 100 && this.#data.gameState.dataSaver.money < 1e3) {
						await this.#functions.print(this.#lang.current.lottery.notEnoughBoth);
						await this.#functions.sleep(1);
						break
					}
					if (this.#data.gameState.dataSaver.totalFishCaught < 100) {
						await this.#functions.print(this.#lang.current.lottery.notEnoughFishCount);
						await this.#functions.sleep(1);
						break
					}
					if (this.#data.gameState.dataSaver.money < 1e3) {
						await this.#functions.print(this.#lang.current.lottery.notEnoughMoney);
						await this.#functions.sleep(1);
						break
					}
					this.#data.gameState.dataSaver.totalFishCaught -= 100;
					this.#data.gameState.dataSaver.money -= 1e3;
					const ran = this.#functions.random(1, 100);
					if (ran <= 2) {
						await this.#functions.print(this.#lang.current.lottery.rewardDiamondFish + "x1");
						this.#data.gameState.diamondFish++
					} else if (ran <= 20) {
						await this.#functions.print(this.#lang.current.lottery.rewardBigFishBait + "x1");
						this.#data.gameState.bigFish++
					} else if (ran <= 28) {
						await this.#functions.print(this.#lang.current.lottery.rewardAprilFoolsEgg + "x1");
						this.#data.gameState.fishMan = true
					} else if (ran <= 49) {
						this.#data.gameState.dataSaver.money += 500;
						await this.#functions.print(this.#lang.current.lottery.rewardGoldText + 500)
					} else if (ran <= 73) {
						this.#data.gameState.dataSaver.money += 200;
						await this.#functions.print(this.#lang.current.lottery.rewardGoldText + 200)
					} else if (ran <= 80) {
						this.#data.gameState.bigFish += 2;
						await this.#functions.print(this.#lang.current.lottery.rewardBigFishBait + "x2")
					} else {
						await this.#functions.print(this.#lang.current.lottery.thanks)
					}
					await this.#functions.sleep(1);
					break
				} else if (c === "2") {
					return
				}
			}
		}
	}
	constructor(lang, data, functions) {
		this.#lang = lang;
		this.#data = data;
		this.#functions = functions;
		this.run = this.#run.bind(this);
		Object.freeze(this)
	}
}
