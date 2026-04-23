export default class Checkpoint {
	#lang = undefined;
	#data = undefined;
	#functions = undefined;
	#normalizeDataSaver = undefined;
	login;
	load;
	save;
	async #loadGame() {
		const loadState = await this.#data.gameState.requiredFunctions.loadGame(this.#data.gameState.username, this.#data.gameState.password);
		if (loadState?.code === 1) {
			this.#data.gameState.dataSaver = {
				...this.#data.getData(),
				...loadState.data
			};
			this.#normalizeDataSaver.run()
		}
		return loadState
	}
	async #saveGame() {
		this.#normalizeDataSaver.run();
		return this.#data.gameState.requiredFunctions.saveGame(this.#data.gameState.username, this.#data.gameState.password, this.#data.gameState.dataSaver)
	}
	async #login() {
		while (true) {
			let username, password = "";
			await this.#functions.clear();
			await this.#functions.print(this.#functions.capitalize(this.#lang.current.checkpoint.login));
			await this.#functions.printnl(this.#functions.capitalize(this.#lang.current.checkpoint.username) + ": ");
			if (this.#data.gameState.settings.forceUsername) {
				username = this.#data.gameState.settings.forceUsername;
				await this.#functions.write(username + "\n")
			} else {
				username = await this.#functions.getline(1);
				if (!/^[a-zA-Z0-9_-]+$/.test(username)) {
					await this.#functions.print(this.#lang.current.checkpoint.invalidUsername);
					await this.#functions.sleep(1);
					continue
				}
			}
			const userState = await this.#data.gameState.requiredFunctions.hasSave(username);
			if (!userState?.code) {
				await this.#functions.print(this.#functions.capitalize(this.#lang.current.checkpoint.apiError));
				await this.#functions.sleep(1);
				continue
			}
			const isNew = userState.code === 2;
			await this.#functions.printnl(this.#functions.capitalize(this.#lang.current.checkpoint.password) + ": ");
			if (this.#data.gameState.settings.forceBlancPassword) {
				await this.#functions.write("\n")
			} else {
				password = await this.#functions.getline(2);
				if (isNew) {
					await this.#functions.printnl(this.#functions.capitalize(this.#lang.current.checkpoint.confirmPassword) + ": ");
					let newPassword = await this.#functions.getline(2);
					if (newPassword !== password) {
						await this.#functions.print(this.#lang.current.checkpoint.passwordNotMatch);
						await this.#functions.sleep(1);
						continue
					}
				}
			}
			this.#data.gameState.username = username;
			this.#data.gameState.password = password;
			if (!isNew) {
				const loadState = await this.#loadGame();
				if (loadState?.code !== 1) {
					await this.#functions.print(this.#lang.current.checkpoint.apiError);
					await this.#functions.sleep(1);
					continue
				}
			}
			const saveState = await this.#saveGame();
			if (!saveState?.code) {
				await this.#functions.print(this.#lang.current.checkpoint.apiError);
				await this.#functions.sleep(1);
				continue
			}
			if (saveState.code === 2) {
				await this.#functions.print(this.#lang.current.checkpoint.passwordError);
				await this.#functions.sleep(1);
				continue
			}
			await this.#functions.clear();
			return isNew
		}
	}
	async #load() {
		const loadState = await this.#loadGame();
		if (loadState?.code !== 1) {
			await this.#functions.printa(this.#lang.current.checkpoint.apiError)
		}
	}
	async #save() {
		const saveState = await this.#saveGame();
		if (!saveState?.code) {
			await this.#functions.printa(this.#lang.current.checkpoint.apiError)
		} else if (saveState.code === 2) {
			await this.#functions.printa(this.#lang.current.checkpoint.passwordError)
		}
	}
	constructor(lang, data, functions, normalizeDataSaver) {
		this.#lang = lang;
		this.#data = data;
		this.#functions = functions;
		this.#normalizeDataSaver = normalizeDataSaver;
		this.login = this.#login.bind(this);
		this.load = this.#load.bind(this);
		this.save = this.#save.bind(this);
		Object.freeze(this)
	}
}
