import deepFreeze from "./deepFreeze.js";
export default class Fishing {
	#lang = undefined;
	#data = undefined;
	#functions = undefined;
	#fish_gai;
	#old;
	#la;
	#la2;
	#weatherpcr;
	#macnt;
	#fu;
	#fucolor;
	#weather;
	#lw;
	#weapoint;
	#paint;
	#color;
	#last;
	#fish;
	#dirty;
	#fish_color;
	#now_status;
	#fish_add;
	#ter_big;
	run;
	#change(wea) {
		if (wea[0] < 0 || wea[0] > 5 || wea[1] < 0 || wea[1] > 3) {
			return [3, 0]
		}
		if (wea[0] === 0 || wea[0] === 1) {
			if (wea[1] < 2) {
				let ra = this.#functions.random(1, 20);
				if (ra <= 9) {
					return wea
				} else if (ra <= 15) {
					return [wea[0], this.#functions.random(1, 3)]
				} else if (ra <= 18) {
					return [this.#functions.random(0, 1), wea[1]]
				} else {
					return [this.#functions.random(2, 4), 0]
				}
			} else {
				let ra = this.#functions.random(1, 2);
				if (ra <= 1) {
					return [wea[0], this.#functions.random(1, 3)]
				} else if (ra <= 15) {
					return wea
				}
			}
		} else if (wea[0] === 2 || wea[0] === 3 || wea[0] === 4) {
			let ra = this.#functions.random(1, 10);
			if (ra <= 1) {
				return [5, wea[1]]
			} else if (ra <= 3) {
				return [this.#functions.random(0, 1), this.#functions.random(1, 2)]
			} else if (ra <= 6) {
				return [this.#functions.random(2, 4), wea[1]]
			} else {
				return wea
			}
		} else {
			let ra = this.#functions.random(1, 10);
			if (ra <= 3) {
				return [this.#functions.random(2, 4), wea[1]]
			} else {
				return wea
			}
		}
		return wea
	}
	#rand_time(l = this.#data.gameState.dataSaver.catchSpeedLevel) {
		return this.#functions.random(this.#data.constant.minCatchSpeed[l], this.#data.constant.maxCatchSpeed[l])
	}
	#gr(l = this.#data.gameState.dataSaver.incomeLevel, bei = 1) {
		return this.#functions.random(bei * this.#data.constant.minIncome[l], bei * this.#data.constant.maxIncome[l])
	}
	#gettype() {
		let ty = this.#functions.random(1, 1e4);
		for (let i = 0; i <= 6; i++) {
			ty -= this.#fish_gai[this.#data.gameState.dataSaver.rodLevel][i];
			if (ty <= 0) {
				return i
			}
		}
		return 0
	}
	async #get(is_big, type) {
		await this.#functions.clear();
		if (this.#data.gameState.dataSaver.hunger <= 2) {
			await this.#functions.printa(this.#lang.current.fishing.youCaughtA + this.#fish_color[type] + this.#lang.current.fishing.fishName[type] + (is_big ? this.#lang.current.fishing.big : "") + this.#lang.current.fishing.fish + "\x1b[m, " + this.#lang.current.fishing.eaten);
			this.#data.gameState.dataSaver.hunger += type + 3;
			return
		}
		let pri = this.#gr(this.#data.gameState.dataSaver.incomeLevel, (is_big + 1) * this.#fish_add[type]);
		if (type === 4 && is_big) {
			await this.#functions.printa(this.#lang.current.fishing.youCaughtA + this.#fish_color[type] + this.#lang.current.fishing.egg + ", " + this.#lang.current.fishing.worth + "$" + pri)
		} else {
			await this.#functions.printa(this.#lang.current.fishing.youCaughtA + this.#fish_color[type] + this.#lang.current.fishing.fish + (is_big ? this.#lang.current.fishing.bf : "", this.#lang.current.fishing.fishName[type]) + ", " + this.#lang.current.fishing.worth + "$" + pri)
		}
		this.#fish[type].push(10);
		this.#data.gameState.dataSaver.totalFishCaught++
	}
	#lmi = 0;
	#lma = 0;
	#lst = 0;
	#swp = false;
	async #draw(mi = 0, ma = 0) {
		this.#data.gameState.dataSaver.compactMode = this.#data.gameState.dataSaver.compactMode != this.#swp;
		let wcg = false,
			wcgd = false;
		const now = Math.floor(Date.now() / 1e3);
		while (now - this.#la > 10) {
			let nweather = this.#change(this.#weather);
			if (nweather != this.#weather) {
				wcg = true
			}
			this.#weather = nweather;
			if (this.#weather[0] <= 1) {
				this.#lw = this.#weather[0]
			}
			if (now - this.#la > 100) {
				this.#la = now - 100
			}
			this.#la += 10
		}
		let need_cl = this.#swp;
		if (this.#lmi != mi || this.#lma != ma) {
			this.#lmi = mi;
			this.#lma = ma;
			wcg = true;
			need_cl = true
		}
		if (this.#lst != this.#now_status) {
			this.#lst = this.#now_status;
			wcg = true;
			need_cl = true
		}
		while (this.#la2 > .2) {
			this.#la2 -= .2;
			for (let i = this.#weapoint.length - 1; i >= 0; i--) {
				this.#weapoint[i][0] += 1;
				wcgd = true;
				if (this.#weapoint[i][0] > 10) {
					[this.#weapoint[i], this.#weapoint[this.#weapoint.length - 1]] = [this.#weapoint[this.#weapoint.length - 1], this.#weapoint[i]];
					this.#weapoint.pop()
				}
			}
			if (this.#macnt[this.#weather[1]]) {
				wcgd = true;
				this.#weapoint.push([0, this.#functions.random(0, 44)])
			}
			for (let i = 1; i <= this.#macnt[this.#weather[1]] / 6 - 1 && this.#weapoint.length < this.#macnt[this.#weather[1]]; i++) {
				if (this.#weapoint.length < this.#macnt[this.#weather[1]] && this.#functions.random(1, 2) <= 1) {
					wcgd = true;
					this.#weapoint.push([0, this.#functions.random(0, 44)])
				}
			}
		}
		let start = 0;
		let nowsize = this.#data.gameState.consoleSize;
		const notEnoughRows = nowsize.rows < 20,
			notEnoughCols = nowsize.cols < 51;
		const paintStr = JSON.stringify(this.#paint);
		if (this.#last !== paintStr) {
			wcgd = true;
			this.#last = paintStr
		}
		if (this.#ter_big != nowsize) {
			this.#ter_big = nowsize;
			need_cl = true
		}
		if (this.#data.gameState.dataSaver.compactMode || notEnoughRows || notEnoughCols) {
			if (need_cl) {
				await this.#functions.write("\x1bc\x1b[?25l")
			} else if (this.#data.gameState.dataSaver.compactMode || wcg) {
				await this.#functions.write("\x1b[H")
			} else {
				return
			}
			if (!this.#data.gameState.dataSaver.compactMode) {
				if (notEnoughRows) {
					await this.#functions.write(this.#lang.current.fishing.notEnoughRows + "\n");
					await this.#functions.write(this.#lang.current.fishing.currentSize + ": " + nowsize.rows + this.#lang.current.fishing.rows + "\n")
				}
				if (notEnoughCols) {
					await this.#functions.write(this.#lang.current.fishing.notEnoughCols + "\n");
					await this.#functions.write(this.#lang.current.fishing.currentSize + ": " + nowsize.cols + this.#lang.current.fishing.cols + "\n")
				}
			}
		} else {
			if (need_cl) {
				await this.#functions.write("\x1bc\x1b[?25l")
			} else if (wcg || wcgd) {
				await this.#functions.write("\x1b[H")
			} else {
				return
			}
			if (this.#weather[0] >= 2 && this.#weather[0] <= 4) {
				start = 4;
				for (let i = 0; i < 4; i++) {
					await this.#functions.write(this.#weatherpcr[this.#weather[0] - 2][i] + "\n")
				}
			}
			for (let i = start; i < 15; i++) {
				for (let j = 0; j < 44; j++) {
					let b = false;
					for (const p of this.#weapoint) {
						if (p[0] === i && p[1] === j) {
							b = true;
							break
						}
					}
					if (this.#paint[i][j] === " " && b) {
						await this.#functions.write("\x1b[m" + this.#fucolor[this.#lw] + this.#fu[this.#lw])
					} else {
						await this.#functions.write("\x1b[m" + this.#color[i][j] + this.#paint[i][j])
					}
				}
				await this.#functions.write("\n")
			}
		}
		await this.#functions.write(this.#lang.current.fishing.currentStatus + ": " + this.#lang.current.fishing.waitingStatus[this.#now_status] + "\n");
		await this.#functions.write(this.#lang.current.fishing.totalFishCaught + ": " + this.#data.gameState.dataSaver.totalFishCaught + " " + this.#lang.current.fishing.currentWeather + ": " + this.#lang.current.fishing.rainSize[this.#weather[1]] + this.#lang.current.fishing.weatherNames[this.#weather[0]] + "\n");
		if (ma) {
			if (mi) {
				await this.#functions.write(this.#lang.current.fishing.remainingTime + ": " + mi / 2 + " min ~ " + ma / 2 + " min\n")
			} else {
				await this.#functions.write(this.#lang.current.fishing.remainingTime + ": < " + ma / 2 + " min\n")
			}
		}
		await this.#functions.write((this.#data.gameState.dataSaver.compactMode ? this.#lang.current.fishing.exitCompactMode : this.#lang.current.fishing.enterCompactMode) + "\n");
		this.#swp = false
	}
	async #sleepck(s) {
		for (const c of await this.#functions.getch2s()) {
			if (c === "e") {
				this.#swp = !this.#swp
			}
		}
		await this.#functions.sleep(s)
	}
	async #slep(s) {
		s = Math.round(s * 100) / 100;
		if (s < .01) {
			s = .01
		}
		while (s > .1) {
			await this.#sleepck(.1);
			await this.#draw();
			s -= .1;
			this.#la2 += .1
		}
		await this.#sleepck(s);
		await this.#draw();
		this.#la2 += s
	}
	async #wait(s) {
		s = Math.round(s * 100) / 100;
		let mi = this.#data.constant.minCatchSpeed[this.#data.gameState.dataSaver.catchSpeedLevel] * 10,
			ma = this.#data.constant.maxCatchSpeed[this.#data.gameState.dataSaver.catchSpeedLevel] * 10;
		if (s && s < .01) {
			s = .01
		}
		while (s > .1) {
			await this.#sleepck(.1);
			if (mi > 0) {
				mi -= 1
			}
			if (ma > 10) {
				ma -= 1
			}
			s -= .1;
			this.#la2 += .1;
			await this.#draw(Math.floor((mi - 10) / 300), Math.ceil(Math.max((ma + 290) / 300, 1)))
		}
		if (s) {
			await this.#sleepck(s);
			await this.#draw(Math.floor((mi - 10) / 300), Math.ceil(Math.max((ma + 290) / 300, 1)))
		}
		this.#la2 += s
	}
	async #fishing(is_big, type) {
		const hung_speed = this.#data.gameState.dataSaver.hunger < 5 ? 3 : this.#data.gameState.dataSaver.hunger < 10 ? 2 : this.#data.gameState.dataSaver.hunger < 30 ? 1 : this.#data.gameState.dataSaver.hunger < 35 ? .8 : .5;
		await this.#functions.write("\x1b[?25l");
		this.#color[11][18] = "\x1b[1;34m";
		this.#paint[11][18] = "~";
		this.#color[10][19] = this.#fish_color[type];
		this.#paint[11][19] = "^";
		this.#paint[10][19] = "O";
		await this.#slep(.5 * hung_speed * (is_big + 1) / this.#data.gameState.dataSaver.actionSpeedMultiplier);
		this.#color[11][19] = "\x1b[1;34m";
		this.#paint[11][19] = "~";
		this.#color[9][19] = this.#fish_color[type];
		this.#paint[10][19] = "^";
		this.#paint[9][19] = "O";
		await this.#slep(.5 * hung_speed * (is_big + 1) / this.#data.gameState.dataSaver.actionSpeedMultiplier);
		for (let i = 8; i >= 5; i--) {
			this.#color[i + 2][19] = "";
			this.#paint[i + 2][19] = " ";
			this.#color[i][19] = this.#fish_color[type];
			this.#paint[i + 1][19] = "^";
			this.#paint[i][19] = "O";
			await this.#slep(.5 * hung_speed * (is_big + 1) / this.#data.gameState.dataSaver.actionSpeedMultiplier)
		}
		this.#paint[9][24] = this.#paint[8][24] = this.#paint[7][24] = this.#paint[6][24] = "|";
		this.#paint[8][23] = this.#paint[7][22] = this.#paint[6][21] = this.#paint[5][20] = this.#paint[5][19] = this.#paint[6][19] = " ";
		this.#color[5][19] = this.#color[6][19] = "";
		this.#paint[5][23] = ">";
		this.#paint[5][24] = "O";
		this.#color[5][23] = this.#color[5][24] = this.#fish_color[type];
		await this.#slep(.5 * hung_speed * (is_big + 1) / this.#data.gameState.dataSaver.actionSpeedMultiplier);
		this.#paint[9][26] = "V";
		this.#paint[8][24] = this.#paint[7][24] = this.#paint[6][24] = this.#paint[5][23] = this.#paint[5][24] = " ";
		this.#color[5][23] = this.#color[5][24] = "";
		this.#paint[9][26] = this.#paint[8][26] = this.#paint[7][26] = this.#paint[6][26] = "|";
		this.#paint[9][24] = "/";
		this.#paint[5][25] = ">";
		this.#paint[5][26] = "O";
		this.#color[5][25] = this.#color[5][26] = this.#fish_color[type];
		await this.#slep(.5 * hung_speed * (is_big + 1) / this.#data.gameState.dataSaver.actionSpeedMultiplier);
		this.#paint[9][26] = this.#paint[8][27] = this.#paint[7][28] = this.#paint[6][29] = "/";
		this.#color[5][25] = this.#color[5][26] = "";
		this.#paint[8][26] = this.#paint[7][26] = this.#paint[6][26] = this.#paint[5][25] = this.#paint[5][26] = " ";
		this.#paint[5][29] = ">";
		this.#paint[5][30] = "O";
		this.#color[5][29] = this.#color[5][30] = this.#fish_color[type];
		await this.#slep(.5 * hung_speed * (is_big + 1) / this.#data.gameState.dataSaver.actionSpeedMultiplier);
		this.#paint[8][27] = this.#paint[7][28] = this.#paint[6][29] = this.#paint[5][29] = this.#paint[5][30] = " ";
		this.#paint[9][26] = "\\";
		this.#paint[9][27] = this.#paint[9][28] = this.#paint[9][29] = this.#paint[9][30] = this.#paint[9][31] = this.#paint[9][32] = this.#paint[9][33] = this.#paint[9][34] = "-";
		this.#paint[8][35] = "V";
		this.#paint[9][35] = "O";
		this.#color[9][35] = this.#color[8][35] = this.#fish_color[type];
		this.#color[5][29] = this.#color[5][30] = "";
		await this.#slep(.5 * hung_speed * (is_big + 1) / this.#data.gameState.dataSaver.actionSpeedMultiplier);
		this.#paint[10][35] = "O";
		this.#paint[8][35] = " ";
		this.#paint[9][35] = "V";
		this.#color[10][35] = this.#fish_color[type];
		this.#color[8][35] = "";
		await this.#slep(.5 * (is_big + 1) / this.#data.gameState.dataSaver.actionSpeedMultiplier);
		this.#paint[11][34] = "\\";
		this.#paint[11][36] = "/";
		for (let i = 11; i <= 12; i++) {
			this.#paint[i][35] = "O";
			this.#paint[i - 2][35] = " ";
			this.#paint[i - 1][35] = "V";
			this.#color[i][35] = this.#fish_color[type];
			this.#color[i - 2][35] = "";
			await this.#slep(.5 * (is_big + 1) / this.#data.gameState.dataSaver.actionSpeedMultiplier)
		}
		this.#paint[11][34] = this.#paint[11][35] = this.#paint[11][36] = "~";
		this.#paint[13][35] = "O";
		this.#paint[12][35] = "V";
		this.#color[13][35] = this.#fish_color[type];
		this.#color[11][35] = "\x1b[1;34m";
		await this.#slep(.5 * (is_big + 1) / this.#data.gameState.dataSaver.actionSpeedMultiplier);
		this.#paint[13][36] = "O";
		this.#paint[12][35] = " ";
		this.#paint[13][35] = ">";
		this.#color[13][36] = this.#fish_color[type];
		this.#color[12][35] = "";
		await this.#slep(.5 * (is_big + 1) / this.#data.gameState.dataSaver.actionSpeedMultiplier);
		for (let i = 37; i <= 38; i++) {
			this.#paint[13][i] = "O";
			this.#paint[13][i - 2] = " ";
			this.#paint[13][i - 1] = ">";
			this.#color[13][i] = this.#fish_color[type];
			this.#color[13][i - 2] = "";
			await this.#slep(.5 * (is_big + 1) / this.#data.gameState.dataSaver.actionSpeedMultiplier)
		}
		this.#paint[13][38] = this.#paint[13][37] = " ";
		this.#color[13][38] = this.#color[13][37] = "";
		await this.#functions.write("\x1b[?25h");
		await this.#get(is_big, type)
	}
	async #fishingslip(is_big, type) {
		const hung_speed = this.#data.gameState.dataSaver.hunger < 5 ? 3 : this.#data.gameState.dataSaver.hunger < 10 ? 2 : this.#data.gameState.dataSaver.hunger < 30 ? 1 : this.#data.gameState.dataSaver.hunger < 35 ? .8 : .5;
		await this.#functions.write("\x1b[?25l");
		this.#color[11][18] = "\x1b[1;34m";
		this.#paint[11][18] = "~";
		this.#color[10][19] = this.#fish_color[type];
		this.#paint[11][19] = "^";
		this.#paint[10][19] = "O";
		await this.#slep(.3 * hung_speed * (is_big + 1) / this.#data.gameState.dataSaver.actionSpeedMultiplier);
		this.#now_status = 4;
		this.#color[11][19] = "\x1b[1;34m";
		this.#paint[11][19] = "~";
		this.#color[10][19] = "";
		this.#paint[10][19] = " ";
		this.#paint[10][20] = "^";
		this.#paint[9][19] = "O";
		this.#color[10][20] = this.#color[9][19] = this.#fish_color[type];
		await this.#slep(.3 * hung_speed * (is_big + 1) / this.#data.gameState.dataSaver.actionSpeedMultiplier);
		this.#paint[10][20] = this.#paint[9][19] = " ";
		this.#color[10][20] = this.#color[9][19] = "";
		this.#paint[9][18] = "^";
		this.#paint[8][19] = "O";
		this.#color[9][18] = this.#color[8][19] = this.#fish_color[type];
		await this.#slep(.3 * hung_speed * (is_big + 1) / this.#data.gameState.dataSaver.actionSpeedMultiplier);
		this.#paint[9][18] = this.#paint[8][19] = " ";
		this.#color[9][18] = this.#color[8][19] = "";
		this.#paint[8][20] = "^";
		this.#paint[7][19] = "O";
		this.#color[8][20] = this.#color[7][19] = this.#fish_color[type];
		await this.#slep(.3 * hung_speed * (is_big + 1) / this.#data.gameState.dataSaver.actionSpeedMultiplier);
		this.#paint[6][19] = "j";
		this.#color[8][20] = "";
		this.#paint[8][20] = " ";
		this.#color[7][20] = this.#fish_color[type];
		this.#paint[7][20] = "<";
		await this.#slep(.3 * hung_speed * (is_big + 1) / this.#data.gameState.dataSaver.actionSpeedMultiplier);
		this.#color[7][20] = "";
		this.#paint[5][19] = "j";
		this.#paint[7][20] = this.#paint[6][19] = " ";
		this.#color[8][19] = this.#fish_color[type];
		this.#paint[7][19] = "V";
		this.#paint[8][19] = "O";
		await this.#slep(.5 * (is_big + 1) / this.#data.gameState.dataSaver.actionSpeedMultiplier);
		this.#color[7][19] = "";
		this.#color[9][19] = this.#fish_color[type];
		this.#paint[7][19] = " ";
		this.#paint[8][19] = "V";
		this.#paint[9][19] = "O";
		await this.#slep(.5 * (is_big + 1) / this.#data.gameState.dataSaver.actionSpeedMultiplier);
		this.#color[8][19] = "";
		this.#color[10][19] = this.#fish_color[type];
		this.#paint[8][19] = " ";
		this.#paint[9][19] = "V";
		this.#paint[10][19] = "O";
		await this.#slep(.5 * (is_big + 1) / this.#data.gameState.dataSaver.actionSpeedMultiplier);
		this.#paint[11][18] = "\\";
		this.#paint[11][20] = "/";
		for (let i = 11; i <= 12; i++) {
			this.#color[i - 2][19] = "";
			this.#color[i][19] = this.#fish_color[type];
			this.#paint[i - 2][19] = " ";
			this.#paint[i - 1][19] = "V";
			this.#paint[i][19] = "O";
			await this.#slep(.5 / (is_big + 1) / this.#data.gameState.dataSaver.actionSpeedMultiplier)
		}
		this.#paint[11][18] = this.#paint[11][20] = this.#paint[11][19] = "~";
		this.#color[11][19] = "\x1b[1;34m";
		this.#color[13][19] = this.#fish_color[type];
		this.#paint[12][19] = "V";
		this.#paint[13][19] = "O";
		await this.#slep(.5 / (is_big + 1) / this.#data.gameState.dataSaver.actionSpeedMultiplier);
		this.#paint[12][19] = " ";
		this.#color[12][19] = "";
		this.#color[14][19] = this.#fish_color[type];
		this.#paint[13][19] = "V";
		this.#paint[14][19] = "O";
		await this.#slep(.5 / (is_big + 1) / this.#data.gameState.dataSaver.actionSpeedMultiplier);
		this.#paint[13][19] = " ";
		this.#color[13][19] = "";
		this.#paint[14][19] = "V";
		await this.#slep(.5 / (is_big + 1) / this.#data.gameState.dataSaver.actionSpeedMultiplier);
		this.#paint[14][19] = " ";
		this.#color[14][19] = "";
		await this.#slep(.5 / (is_big + 1) / this.#data.gameState.dataSaver.actionSpeedMultiplier);
		this.#paint[8][23] = this.#paint[7][22] = this.#paint[6][21] = this.#paint[5][20] = this.#paint[5][19] = " ";
		this.#paint[9][24] = "/";
		await this.#functions.write("\x1b[?25h")
	}
	async #front_fishing(is_big, type) {
		this.#last = "";
		this.#ter_big = [0, 0];
		this.#la = Math.floor(Date.now() / 1e3);
		const hung_speed = this.#data.gameState.dataSaver.hunger < 5 ? 3 : this.#data.gameState.dataSaver.hunger < 10 ? 2 : this.#data.gameState.dataSaver.hunger < 30 ? 1 : this.#data.gameState.dataSaver.hunger < 35 ? .8 : .5;
		this.#now_status = 0;
		await this.#functions.write("\x1b[?25l");
		for (let i = 0; i < 15; i++) {
			for (let j = 0; j < 44; j++) {
				this.#color[i][j] = "";
				this.#paint[i][j] = this.#old[i][j]
			}
		}
		for (let i = 0; i <= 22; i++) {
			this.#color[11][i] = "\x1b[1;34m"
		}
		for (let i = 31; i <= 42; i++) {
			this.#color[11][i] = "\x1b[1;34m"
		}
		if (this.#data.gameState.fishMan) {
			this.#paint[8][25] = " ";
			this.#paint[9][25] = "O";
			this.#color[9][25] = this.#color[10][24] = this.#color[10][26] = this.#fish_color[6];
			this.#data.gameState.fishMan = false
		}
		await this.#slep(.5 * hung_speed / this.#data.gameState.dataSaver.actionSpeedMultiplier);
		for (let i = 27; i <= 34; i++) {
			this.#paint[9][i] = " "
		}
		this.#paint[9][26] = "V";
		this.#paint[8][27] = this.#paint[7][28] = this.#paint[6][29] = this.#paint[5][30] = "/";
		await this.#slep(.5 * hung_speed / this.#data.gameState.dataSaver.actionSpeedMultiplier);
		this.#paint[8][27] = this.#paint[7][28] = this.#paint[6][29] = this.#paint[5][30] = " ";
		this.#paint[9][26] = this.#paint[8][26] = this.#paint[7][26] = this.#paint[6][26] = this.#paint[5][26] = "|";
		await this.#slep(.5 * hung_speed / this.#data.gameState.dataSaver.actionSpeedMultiplier);
		this.#paint[9][26] = "\\";
		this.#paint[8][26] = this.#paint[7][26] = this.#paint[6][26] = this.#paint[5][26] = " ";
		this.#paint[9][24] = this.#paint[8][24] = this.#paint[7][24] = this.#paint[6][24] = this.#paint[5][24] = "|";
		await this.#slep(.5 * hung_speed / this.#data.gameState.dataSaver.actionSpeedMultiplier);
		this.#paint[8][24] = this.#paint[7][24] = this.#paint[6][24] = this.#paint[5][24] = " ";
		this.#paint[9][24] = "V";
		this.#paint[8][23] = this.#paint[7][22] = this.#paint[6][21] = this.#paint[5][20] = "\\";
		await this.#slep(.5 * hung_speed / this.#data.gameState.dataSaver.actionSpeedMultiplier);
		this.#paint[5][19] = "j";
		await this.#slep(.5 * hung_speed / this.#data.gameState.dataSaver.actionSpeedMultiplier);
		for (let i = 6; i <= 10; i++) {
			this.#paint[i - 1][19] = "|";
			this.#paint[i][19] = "j";
			await this.#slep(.5 * hung_speed / this.#data.gameState.dataSaver.actionSpeedMultiplier)
		}
		this.#paint[10][19] = "|";
		this.#paint[11][19] = "j";
		this.#color[11][19] = "";
		let stime = this.#rand_time();
		if (this.#weather[0] === 0) {
			stime = Math.max(0, stime - 5 * this.#weather[1])
		}
		if (this.#weather[0] === 1) {
			stime = Math.max(0, stime + 5 * this.#weather[1])
		}
		this.#now_status = 1;
		await this.#wait(stime);
		this.#now_status = 2;
		this.#color[11][0] = this.#fish_color[type];
		this.#paint[11][0] = "O";
		await this.#slep(.5 * (is_big + 1) / this.#data.gameState.dataSaver.actionSpeedMultiplier);
		this.#color[11][1] = this.#fish_color[type];
		this.#paint[11][0] = ">";
		this.#paint[11][1] = "O";
		await this.#slep(.5 * (is_big + 1) / this.#data.gameState.dataSaver.actionSpeedMultiplier);
		for (let i = 2; i <= 19; i++) {
			if (i === 19) {
				this.#now_status = 3
			}
			this.#color[11][i - 2] = "\x1b[1;34m";
			this.#paint[11][i - 2] = "~";
			this.#color[11][i] = this.#fish_color[type];
			this.#paint[11][i - 1] = ">";
			this.#paint[11][i] = "O";
			await this.#slep(.5 * (is_big + 1) / this.#data.gameState.dataSaver.actionSpeedMultiplier)
		}
		await this.#functions.write("\x1b[?25h");
		let slip = this.#functions.random(1, 100) <= this.#data.gameState.dataSaver.slipOffChance + (this.#weather[0] === 5) * 10;
		if (slip) {
			await this.#fishingslip(is_big, type)
		} else {
			await this.#fishing(is_big, type)
		}
		while (this.#weapoint.length !== 0) {
			this.#weapoint.pop()
		}
	}
	async #fishing_choose() {
		let b = this.#functions.random(1, 100) <= this.#data.gameState.dataSaver.bigFishChance;
		if (this.#data.gameState.bigFish) {
			b = true;
			this.#data.gameState.bigFish--
		}
		let type = this.#gettype();
		if (this.#data.gameState.diamondFish) {
			type = 6;
			this.#data.gameState.diamondFish--
		}
		await this.#front_fishing(b, type)
	}
	#fresh(a) {
		if (a >= 8) {
			return 1.25
		} else if (a <= 2) {
			return .8
		} else {
			return 1
		}
	}
	async makeFishingRod() {
		await this.#functions.clear();
		await this.#functions.print(this.#lang.current.fishing.makeFishingRod);
		await this.#functions.print(this.#lang.current.fishing.currentFishingRod + this.#lang.current.fishing.fishName[this.#data.gameState.dataSaver.rodLevel] + this.#lang.current.fishing.fishingRod);
		let b = Array(8).fill(false);
		let s = "";
		for (let i = 0; i <= 6; i++) {
			b[i] = this.#fish[i].length !== 0;
			if (b[i]) {
				s += i + ". " + this.#lang.current.fishing.fishName[i] + this.#lang.current.fishing.fishingRod + ", "
			}
		}
		b[7] = true;
		if (s.length === 0) {
			await this.#functions.print(this.#lang.current.fishing.none);
			return
		}
		s += this.#lang.current.functions.exit;
		await this.#functions.print(s);
		let d;
		while (true) {
			let c = await this.#functions.getch();
			c -= "0";
			if (c >= 0 && c <= 7 && b[c]) {
				d = c;
				break
			}
		}
		if (d === 7) {
			return
		}
		if (this.#fish[d].length !== 0) {
			this.#fish[d].pop()
		}
		this.#data.gameState.dataSaver.rodLevel = d
	}
	async #makeFood() {
		while (true) {
			await this.#functions.clear();
			await this.#functions.print(this.#lang.current.fishing.rawFish);
			await this.#functions.print(this.#lang.current.fishing.currentAmount);
			let b = Array(8).fill(false);
			let s = "";
			for (let i = 0; i <= 6; i++) {
				b[i] = this.#fish[i].length !== 0;
				if (b[i]) {
					s += i + ". " + this.#lang.current.fishing.fishName[i] + this.#lang.current.fishing.fish + ", "
				}
			}
			b[7] = true;
			if (s.length === 0) {
				await this.#functions.print(this.#lang.current.fishing.none);
				await this.#functions.sleep(.5);
				return
			}
			s += this.#lang.current.functions.exit;
			for (let i = 1; i <= 6; i++) {
				await this.#functions.write(this.#fish_color[i] + this.#lang.current.fishing.fishName[i] + this.#lang.current.fishing.fish + "\x1b[m\n");
				if (this.#fish[i].length) {
					await this.#functions.write("    " + this.#lang.current.fishing.fishpond + ": " + this.#fish[i].length + this.#lang.current.fishing.fishNumber + "\n")
				}
				if (this.#data.gameState.dataSaver.foodFish[i][0]) {
					await this.#functions.write("    " + this.#lang.current.fishing.rawFish + ": " + this.#data.gameState.dataSaver.foodFish[i][0] + this.#lang.current.fishing.fishNumber + "\n")
				}
				if (this.#data.gameState.dataSaver.foodFish[i][1]) {
					await this.#functions.write("    " + this.#lang.current.fishing.roastedFish + ": " + this.#data.gameState.dataSaver.foodFish[i][1] + this.#lang.current.fishing.fishNumber + "\n")
				}
				if (this.#fish[i].length === 0 && !this.#data.gameState.dataSaver.foodFish[i][0] && !this.#data.gameState.dataSaver.foodFish[i][1]) {
					await this.#functions.write("    " + this.#lang.current.fishing.none + "\n")
				}
			}
			await this.#functions.write("\n");
			await this.#functions.print(s);
			let d;
			while (true) {
				let c = await this.#functions.getch();
				c -= "0";
				if (c >= 0 && c <= 7 && b[c]) {
					d = c;
					break
				}
			}
			if (d === 7) {
				break
			}
			if (this.#fish[d].length === 0) {
				continue
			}
			this.#fish[d].pop();
			this.#data.gameState.dataSaver.foodFish[d][0]++
		}
	}
	async #roastedFish() {
		await this.#functions.clear();
		await this.#functions.print(this.#lang.current.fishing.roastedFish);
		await this.#functions.print(this.#lang.current.fishing.currentAmount + ": ");
		let b = Array(8).fill(false);
		let s = "";
		for (let i = 0; i <= 6; i++) {
			b[i] = this.#data.gameState.dataSaver.foodFish[i][0];
			if (b[i]) {
				s += i + ". " + this.#lang.current.fishing.fishName[i] + this.#lang.current.fishing.fish + ", "
			}
		}
		b[7] = true;
		if (s.length === 0) {
			await this.#functions.print(this.#lang.current.fishing.none);
			await this.#functions.sleep(.5);
			return
		}
		s += this.#lang.current.functions.exit;
		for (let i = 1; i <= 6; i++) {
			await this.#functions.write(this.#fish_color[i] + this.#lang.current.fishing.fishName[i] + this.#lang.current.fishing.fish + "\x1b[m\n");
			if (this.#fish[i].length) {
				await this.#functions.write("    " + this.#lang.current.fishing.fishpond + ": " + this.#fish[i].length + this.#lang.current.fishing.fishNumber + "\n")
			}
			if (this.#data.gameState.dataSaver.foodFish[i][0]) {
				await this.#functions.write("    " + this.#lang.current.fishing.rawFish + ": " + this.#data.gameState.dataSaver.foodFish[i][0] + this.#lang.current.fishing.fishNumber + "\n")
			}
			if (this.#data.gameState.dataSaver.foodFish[i][1]) {
				await this.#functions.write("    " + this.#lang.current.fishing.roastedFish + ": " + this.#data.gameState.dataSaver.foodFish[i][1] + this.#lang.current.fishing.fishNumber + "\n")
			}
			if (this.#fish[i].length === 0 && !this.#data.gameState.dataSaver.foodFish[i][0] && !this.#data.gameState.dataSaver.foodFish[i][1]) {
				await this.#functions.write("    " + this.#lang.current.fishing.none + "\n")
			}
		}
		await this.#functions.write("\n");
		await this.#functions.print(s);
		let d;
		while (true) {
			let c = await this.#functions.getch();
			c -= "0";
			if (c >= 0 && c <= 7 && b[c]) {
				d = c;
				break
			}
		}
		if (d === 7) {
			await this.#functions.sleep(.5);
			return
		}
		if (!this.#data.gameState.dataSaver.foodFish[d][0]) {
			return
		}
		const l = 0,
			r = this.#data.gameState.dataSaver.foodFish[d][0];
		let a = 0;
		while (true) {
			await this.#functions.clear();
			await this.#functions.write(this.#lang.current.fishing.makeFoodAction + "\n" + this.#lang.current.fishing.makeRoastedFish + ": " + this.#fish_color[d] + this.#lang.current.fishing.fishName[d] + this.#lang.current.fishing.fish + "\x1b[m\n");
			await this.#functions.write((a === l ? "\x1b[1;31m" : "\x1b[1m") + " < \x1b[m" + a + this.#lang.current.fishing.fishNumber + (a === r ? "\x1b[1;31m" : "\x1b[1m") + " > \x1b[m\n");
			let c = await this.#functions.getch();
			if (c === "a" || c === "A") {
				a--;
				if (a < l) {
					a = l
				}
			} else if (c === "d" || c === "D") {
				a++;
				if (a > r) {
					a = r
				}
			} else if (c === "\r") {
				if (a > this.#data.gameState.dataSaver.foodFish[d][0] || a < 0 || !this.#data.gameState.dataSaver.ovenCount) {
					await this.#functions.clear();
					return
				}
				this.#data.gameState.dataSaver.foodFish[d][0] -= a;
				this.#data.gameState.dataSaver.foodFish[d][1] += a;
				await this.#functions.clear();
				let time = Math.ceil(a / this.#data.gameState.dataSaver.ovenCount);
				for (let i = 0; i < time; i++) {
					for (let j = 0; j < 20; j++) {
						await this.#functions.clear();
						await this.#functions.write(this.#lang.current.fishing.roasting + "\n");
						let ok = i * 20 + j,
							all = time;
						let done = Math.floor(ok / all * 3);
						let d2 = done & 1;
						done >>= 1;
						for (let k = 1; k <= done; k++) {
							await this.#functions.write("\x1b[32;1m=\x1b[m")
						}
						if (done < 30) {
							await this.#functions.write(d2 ? "\x1b[32;1m-\x1b[m" : "\x1b[31;1m=\x1b[m")
						}
						for (let k = done + 1; k < 30; k++) {
							await this.#functions.write("\x1b[31;1m=\x1b[m")
						}
						await this.#functions.write("\n");
						await this.#functions.write(i * this.#data.gameState.dataSaver.ovenCount + "/" + a + this.#lang.current.fishing.done + "\n");
						await this.#functions.sleep(.5)
					}
				}
				await this.#functions.clear();
				await this.#functions.write(this.#lang.current.fishing.done + "\n");
				for (let k = 0; k < 30; k++) {
					await this.#functions.write("\x1b[32;1m=\x1b[m")
				}
				await this.#functions.write("\n");
				await this.#functions.write(a + "/" + a + this.#lang.current.fishing.done + "\n");
				await this.#functions.sleep();
				return
			} else if (c === "") {
				await this.#functions.clear();
				return
			}
		}
	}
	async #eatFish() {
		while (true) {
			await this.#functions.clear();
			await this.#functions.print(this.#lang.current.fishing.eatRawFish);
			await this.#functions.printnl(this.#lang.current.fishing.currentHunger + ": ");
			await this.#functions.write((this.#data.gameState.dataSaver.hunger < 10 ? "\x1b[31;1m" : this.#data.gameState.dataSaver.hunger < 30 ? "" : this.#data.gameState.dataSaver.hunger < 35 ? "\x1b[32m" : "\x1b[32;1m") + this.#data.gameState.dataSaver.hunger + "\x1b[m\n");
			await this.#functions.print(this.#lang.current.fishing.currentAmount + ": ");
			let b = Array(8).fill(false);
			let s = "";
			for (let i = 0; i <= 6; i++) {
				b[i] = this.#data.gameState.dataSaver.foodFish[i][0];
				if (b[i]) {
					s += i + ". " + this.#lang.current.fishing.fishName[i] + this.#lang.current.fishing.rawFish + ", "
				}
			}
			b[7] = true;
			if (s.length === 0) {
				await this.#functions.print(this.#lang.current.fishing.none);
				await this.#functions.sleep(.5);
				return
			}
			s += this.#lang.current.functions.exit;
			for (let i = 1; i <= 6; i++) {
				await this.#functions.write(this.#fish_color[i] + this.#lang.current.fishing.fishName[i] + this.#lang.current.fishing.fish + "\x1b[m\n");
				if (this.#data.gameState.dataSaver.foodFish[i][0]) {
					await this.#functions.write("    " + this.#lang.current.fishing.rawFish + ": " + this.#data.gameState.dataSaver.foodFish[i][0] + this.#lang.current.fishing.fishNumber + " + " + (i + 3) + "\n")
				}
				if (!this.#data.gameState.dataSaver.foodFish[i][0] && !this.#data.gameState.dataSaver.foodFish[i][1]) {
					await this.#functions.write("    " + this.#lang.current.fishing.none + "\n")
				}
			}
			await this.#functions.write("\n");
			await this.#functions.print(s);
			let d;
			while (true) {
				let c = await this.#functions.getch();
				c -= "0";
				if (c >= 0 && c <= 7 && b[c]) {
					d = c;
					break
				}
			}
			if (d === 7) {
				await this.#functions.sleep(.5);
				return
			}
			if (this.#data.gameState.dataSaver.foodFish[d][0] < 1) {
				await this.#functions.sleep(.5);
				return
			}
			this.#data.gameState.dataSaver.foodFish[d][0]--;
			this.#data.gameState.dataSaver.hunger += d + 3;
			this.#data.gameState.dataSaver.hunger = Math.min(this.#data.gameState.dataSaver.hunger, 40);
			await this.#functions.sleep(.5)
		}
	}
	async #eat_food_roast() {
		while (true) {
			await this.#functions.clear();
			await this.#functions.print(this.#lang.current.fishing.eatRoastedFish);
			await this.#functions.printnl(this.#lang.current.fishing.currentHunger + ": ");
			await this.#functions.write((this.#data.gameState.dataSaver.hunger < 10 ? "\x1b[31;1m" : this.#data.gameState.dataSaver.hunger < 30 ? "" : this.#data.gameState.dataSaver.hunger < 35 ? "\x1b[32m" : "\x1b[32;1m") + this.#data.gameState.dataSaver.hunger + "\x1b[m\n");
			await this.#functions.print(this.#lang.current.fishing.currentAmount + ": ");
			let b = Array(8).fill(false);
			let s = "";
			for (let i = 0; i <= 6; i++) {
				b[i] = this.#data.gameState.dataSaver.foodFish[i][1];
				if (b[i]) {
					s += i + ". " + this.#lang.current.fishing.fishName[i] + this.#lang.current.fishing.eatRoastedFish + ", "
				}
			}
			b[7] = true;
			if (s.length === 0) {
				await this.#functions.print(this.#lang.current.fishing.none);
				await this.#functions.sleep(.5);
				return
			}
			s += this.#lang.current.functions.exit;
			for (let i = 1; i <= 6; i++) {
				await this.#functions.write(this.#fish_color[i] + this.#lang.current.fishing.fishName[i] + this.#lang.current.fishing.fish + "\x1b[m\n");
				if (this.#data.gameState.dataSaver.foodFish[i][1]) {
					await this.#functions.write("    " + this.#lang.current.fishing.roastedFish + ": " + this.#data.gameState.dataSaver.foodFish[i][1] + this.#lang.current.fishing.fishNumber + " + " + (i + 7) + "\n")
				}
				if (!this.#data.gameState.dataSaver.foodFish[i][0] && !this.#data.gameState.dataSaver.foodFish[i][1]) {
					await this.#functions.write("    " + this.#lang.current.fishing.none + "\n")
				}
			}
			await this.#functions.write("\n");
			await this.#functions.print(s);
			let d;
			while (true) {
				let c = await this.#functions.getch();
				c -= "0";
				if (c >= 0 && c <= 7 && b[c]) {
					d = c;
					break
				}
			}
			if (d === 7) {
				await this.#functions.sleep(.5);
				return
			}
			if (this.#data.gameState.dataSaver.foodFish[d][1] < 1) {
				return
			}
			this.#data.gameState.dataSaver.foodFish[d][1]--;
			this.#data.gameState.dataSaver.hunger += d + 7;
			this.#data.gameState.dataSaver.hunger = Math.min(this.#data.gameState.dataSaver.hunger, 40);
			await this.#functions.sleep(.5)
		}
	}
	async #no_roast() {
		while (true) {
			await this.#functions.clear();
			await this.#functions.print(this.#functions.listToChoice(this.#lang.current.fishing.noOvenMenu));
			await this.#functions.printnl(this.#lang.current.fishing.currentHunger + ": ");
			await this.#functions.write((this.#data.gameState.dataSaver.hunger < 10 ? "\x1b[31;1m" : this.#data.gameState.dataSaver.hunger < 30 ? "" : this.#data.gameState.dataSaver.hunger < 35 ? "\x1b[32m" : "\x1b[32;1m") + this.#data.gameState.dataSaver.hunger + "\x1b[m\n");
			await this.#functions.print(this.#lang.current.fishing.currentAmount + ": ");
			for (let i = 1; i <= 6; i++) {
				await this.#functions.write(this.#fish_color[i] + this.#lang.current.fishing.fishName[i] + this.#lang.current.fishing.fish + "\x1b[m\n");
				if (this.#fish[i].length) {
					await this.#functions.write("    " + this.#lang.current.fishing.fishpond + ": " + this.#fish[i].length + this.#lang.current.fishing.fishNumber + "\n")
				}
				if (this.#data.gameState.dataSaver.foodFish[i][0]) {
					await this.#functions.write("    " + this.#lang.current.fishing.rawFish + ": " + this.#data.gameState.dataSaver.foodFish[i][0] + this.#lang.current.fishing.fishNumber + "\n")
				}
				if (this.#data.gameState.dataSaver.foodFish[i][1]) {
					await this.#functions.write("    " + this.#lang.current.fishing.roastedFish + ": " + this.#data.gameState.dataSaver.foodFish[i][1] + this.#lang.current.fishing.fishNumber + "\n")
				}
				if (this.#fish[i].length === 0 && !this.#data.gameState.dataSaver.foodFish[i][0] && !this.#data.gameState.dataSaver.foodFish[i][1]) {
					await this.#functions.write("    " + this.#lang.current.fishing.none + "\n")
				}
			}
			while (true) {
				let c = await this.#functions.getch();
				if (c === "1") {
					await this.#makeFood();
					break
				} else if (c === "2") {
					await this.#eatFish();
					break
				} else if (c === "3") {
					return
				}
			}
			await this.#functions.sleep(.5)
		}
	}
	async #roast() {
		if (!this.#data.gameState.dataSaver.ovenCount) {
			await this.#no_roast();
			return
		}
		while (true) {
			await this.#functions.clear();
			await this.#functions.print(this.#functions.listToChoice(this.#lang.current.fishing.ovenMenu));
			await this.#functions.printnl(this.#lang.current.fishing.currentHunger + ": ");
			await this.#functions.write((this.#data.gameState.dataSaver.hunger < 10 ? "\x1b[31;1m" : this.#data.gameState.dataSaver.hunger < 30 ? "" : this.#data.gameState.dataSaver.hunger < 35 ? "\x1b[32m" : "\x1b[32;1m") + this.#data.gameState.dataSaver.hunger + "\x1b[m\n");
			await this.#functions.print(this.#lang.current.fishing.currentAmount + ": ");
			for (let i = 1; i <= 6; i++) {
				await this.#functions.write(this.#fish_color[i] + this.#lang.current.fishing.fishName[i] + this.#lang.current.fishing.fish + "\x1b[m\n");
				if (this.#fish[i].length) {
					await this.#functions.write("    " + this.#lang.current.fishing.fishpond + ": " + this.#fish[i].length + this.#lang.current.fishing.fishNumber + "\n")
				}
				if (this.#data.gameState.dataSaver.foodFish[i][0]) {
					await this.#functions.write("    " + this.#lang.current.fishing.rawFish + ": " + this.#data.gameState.dataSaver.foodFish[i][0] + this.#lang.current.fishing.fishNumber + "\n")
				}
				if (this.#data.gameState.dataSaver.foodFish[i][1]) {
					await this.#functions.write("    " + this.#lang.current.fishing.roastFish + ": " + this.#data.gameState.dataSaver.foodFish[i][1] + this.#lang.current.fishing.fishNumber + "\n")
				}
				if (this.#fish[i].length === 0 && !this.#data.gameState.dataSaver.foodFish[i][0] && !this.#data.gameState.dataSaver.foodFish[i][1]) {
					await this.#functions.write("    " + this.#lang.current.fishing.none + "\n")
				}
			}
			await this.#functions.write("\n");
			while (true) {
				let c = await this.#functions.getch();
				if (c === "1") {
					await this.#makeFood();
					break
				} else if (c === "2") {
					await this.#roastedFish();
					break
				} else if (c === "3") {
					await this.#eatFish();
					break
				} else if (c === "4") {
					await this.#eat_food_roast();
					break
				} else if (c === "5") {
					return
				}
			}
			await this.#functions.sleep(.5)
		}
	}
	async #run() {
		while (true) {
			await this.#functions.clear();
			await this.#functions.print(this.#functions.listToChoice(this.#lang.current.fishing.mainMenu));
			await this.#functions.printnl(this.#lang.current.fishing.currentHunger + ": ");
			await this.#functions.write((this.#data.gameState.dataSaver.hunger < 10 ? "\x1b[31;1m" : this.#data.gameState.dataSaver.hunger < 30 ? "" : this.#data.gameState.dataSaver.hunger < 35 ? "\x1b[32m" : "\x1b[32;1m") + this.#data.gameState.dataSaver.hunger + "\x1b[m\n");
			await this.#functions.print(this.#lang.current.fishing.currentFishingRod + ": " + this.#lang.current.fishing.fishName[this.#data.gameState.dataSaver.rodLevel] + this.#lang.current.fishing.fishingRod);
			for (let i = 0; i <= 6; i++) {
				await this.#functions.write(this.#fish_color[i] + this.#lang.current.fishing.fishName[i] + this.#lang.current.fishing.fish + "\x1b[m\n");
				for (let j = 0; j < this.#fish[i].length; j++) {
					if (this.#fish[i][j] >= 8) {
						await this.#functions.write("\x1b[1;32m")
					} else if (this.#fish[i][j] <= 2) {
						await this.#functions.write("\x1b[1;31m")
					} else {
						await this.#functions.write("\x1b[1m")
					}
					await this.#functions.write("    " + this.#lang.current.fishing.freshness + ": " + this.#fish[i][j] + "\x1b[m\n")
				}
				if (this.#fish[i].length === 0) {
					await this.#functions.write("    " + this.#lang.current.fishing.none + "\x1b[m\n")
				}
			}
			while (true) {
				let c = await this.#functions.getch();
				if (c === "1") {
					for (let i = 0; i <= 6; i++) {
						for (let j = 0; j < this.#fish[i].length; j++) {
							this.#fish[i][j] -= 1;
							if (this.#fish[i][j] <= 0) {
								if (i !== 0) {
									this.#fish[i - 1].push(10)
								}
								for (let k = j + 1; k < this.#fish[i].length; k++) {
									this.#fish[i][k - 1] = this.#fish[i][k]
								}
								this.#fish[i].pop();
								j--
							}
						}
					}
					await this.#fishing_choose();
					this.#data.gameState.dataSaver.hunger--;
					break
				} else if (c === "2") {
					await this.makeFishingRod();
					await this.#functions.sleep(1);
					break
				} else if (c === "3") {
					await this.#roast();
					break
				} else if (c === "4") {
					for (let i = 0; i <= 6; i++) {
						for (let j = 0; j < this.#fish[i].length; j++) {
							this.#data.gameState.dataSaver.money += Math.round(this.#gr() * (1 - .02 * this.#dirty) * this.#fresh(this.#fish[i][j]))
						}
						while (this.#fish[i].length !== 0) {
							this.#fish[i].pop()
						}
					}
					await this.#functions.clear();
					break
				} else if (c === "5") {
					for (let i = 0; i <= 6; i++) {
						for (let j = 0; j < this.#fish[i].length; j++) {
							this.#data.gameState.dataSaver.money += Math.round(this.#gr() * (1 - .02 * this.#dirty) * this.#fresh(this.#fish[i][j]))
						}
						while (this.#fish[i].length !== 0) {
							this.#fish[i].pop()
						}
					}
					return
				}
			}
			await this.#functions.sleep(1)
		}
	}
	constructor(lang, data, functions) {
		this.#lang = lang;
		this.#data = data;
		this.#functions = functions;
		this.#fish_gai = deepFreeze([
			[0, 8100, 1400, 400, 90, 9, 1],
			[100, 8e3, 1400, 400, 90, 9, 1],
			[300, 7500, 1700, 400, 90, 9, 1],
			[500, 7e3, 1700, 700, 90, 9, 1],
			[700, 6500, 1700, 700, 390, 9, 1],
			[900, 6e3, 1700, 700, 390, 309, 1],
			[0, 6600, 1700, 700, 390, 309, 301]
		]);
		this.#old = Object.freeze(["                                            ", "                                            ", "                                            ", "                                            ", "                                            ", "                                            ", "                                            ", "                                            ", "                         o                  ", "                        /|\\--------         ", "                        /_\\___              ", "~~~~~~~~~~~~~~~~~~~~~~~|      |~~~~~~~~~~~~|", "                              |            |", "                              |            |", "                              |____________|"]);
		this.#la = 0;
		this.#la2 = 0;
		this.#weatherpcr = deepFreeze([
			["     \x1b[33;1m_____\x1b[m                                  ", "    \x1b[33;1m|     |\x1b[m                                 ", "    \x1b[33;1m|     |\x1b[m                                 ", "    \x1b[33;1m|_____|\x1b[m                                 "],
			["         _______      ___________           ", "     ___/       \\____/           \\___       ", "    (                                )      ", "     \\______________________________/       "],
			["         \x1b[33;1m_____\x1b[m       ___________            ", "     ___\x1b[33;1m|_____|\x1b[m_____/           \\____       ", "    (                                )      ", "     \\______________________________/       "]
		]);
		this.#macnt = Object.freeze([0, 11, 20, 40]);
		this.#fu = Object.freeze([".", "*", " ", " ", " ", " "]);
		this.#fucolor = Object.freeze(["\x1b[1;34m", "\x1b[1;36m", "", "", "", ""]);
		this.#weather = [2, 0];
		this.#lw = 0;
		this.#weapoint = [];
		this.#paint = Array.from({
			length: 15
		}, () => Array(44).fill(" "));
		this.#color = Array.from({
			length: 15
		}, () => Array(44).fill(""));
		this.#last = "";
		this.#fish = Array.from({
			length: 7
		}, () => []);
		this.#dirty = 0;
		this.#fish_color = Object.freeze(["\x1b[1;31m", "\x1b[1;37m", "\x1b[1;35m", "\x1b[1;34m", "\x1b[1;33m", "\x1b[1;32m", "\x1b[1;36m"]);
		this.#now_status = 0;
		this.#fish_add = Object.freeze([0, 1, 2, 5, 10, 50, 100]);
		this.#ter_big = Array.from({
			length: 7
		}, () => []);
		Object.defineProperty(this, "run", {
			value: this.#run.bind(this),
			writable: false,
			configurable: false,
			enumerable: true
		});
		Object.seal(this)
	}
}
