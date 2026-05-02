export default function createCheckpoint(lang, data, functions, normalizeDataSaver) {
	async function loadGame() {
		const loadState = await data.gameState.requiredFunctions.loadGame(data.gameState.username, data.gameState.password);
		if (loadState?.code === 1) {
			data.gameState.dataSaver = {
				...data.createDataSaver(),
				...loadState.data
			};
			normalizeDataSaver()
		}
		return loadState
	}
	async function saveGame() {
		normalizeDataSaver();
		return data.gameState.requiredFunctions.saveGame(data.gameState.username, data.gameState.password, data.gameState.dataSaver)
	}
	async function login() {
		while (true) {
			let username = "";
			let password = "";
			await functions.clear();
			await functions.print(functions.capitalize(lang.current.checkpoint.login));
			await functions.printnl(functions.capitalize(lang.current.checkpoint.username) + ": ");
			if (data.gameState.settings.forceUsername) {
				username = data.gameState.settings.forceUsername;
				await functions.write(username + "\n")
			} else {
				username = await functions.getline(1);
				if (!/^[a-zA-Z0-9_-]+$/.test(username)) {
					await functions.print(lang.current.checkpoint.invalidUsername);
					await functions.sleep(1);
					continue
				}
			}
			const userState = await data.gameState.requiredFunctions.hasSave(username);
			if (!userState?.code) {
				await functions.print(functions.capitalize(lang.current.checkpoint.apiError));
				await functions.sleep(1);
				continue
			}
			const isNew = userState.code === 2;
			await functions.printnl(functions.capitalize(lang.current.checkpoint.password) + ": ");
			if (data.gameState.settings.forceBlancPassword) {
				await functions.write("\n")
			} else {
				password = await functions.getline(2);
				if (isNew) {
					await functions.printnl(functions.capitalize(lang.current.checkpoint.confirmPassword) + ": ");
					let newPassword = await functions.getline(2);
					if (newPassword !== password) {
						await functions.print(lang.current.checkpoint.passwordNotMatch);
						await functions.sleep(1);
						continue
					}
				}
			}
			data.gameState.username = username;
			data.gameState.password = password;
			if (!isNew) {
				const loadState = await loadGame();
				if (loadState?.code !== 1) {
					await functions.print(lang.current.checkpoint.apiError);
					await functions.sleep(1);
					continue
				}
			}
			const saveState = await saveGame();
			if (!saveState?.code) {
				await functions.print(lang.current.checkpoint.apiError);
				await functions.sleep(1);
				continue
			}
			if (saveState.code === 2) {
				await functions.print(lang.current.checkpoint.passwordError);
				await functions.sleep(1);
				continue
			}
			await functions.clear();
			return isNew
		}
	}
	async function load() {
		const loadState = await loadGame();
		if (loadState?.code !== 1) {
			await functions.printa(lang.current.checkpoint.apiError)
		}
	}
	async function save() {
		const saveState = await saveGame();
		if (!saveState?.code) {
			await functions.printa(lang.current.checkpoint.apiError)
		} else if (saveState.code === 2) {
			await functions.printa(lang.current.checkpoint.passwordError)
		}
	}
	return Object.freeze({
		login,
		load,
		save
	})
}
