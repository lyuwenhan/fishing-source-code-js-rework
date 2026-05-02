import Lang from "./lang.js";
import createData from "./data.js";
import createFunctions from "./functions.js";
import createNormalizeDataSaver from "./normalizeDataSaver.js";
import createCheckpoint from "./checkpoint.js";
import createShop from "./shop.js";
import createFishing from "./fishing.js";
import createParkour from "./parkour.js";
import createLottery from "./lottery.js";
import createAdventure from "./adventure.js";
import createSettings from "./settings.js";
export function createGameInstance(write, loadGame, saveGame, hasSave, languageCode) {
	const data = createData();
	const lang = new Lang(languageCode);
	const functions = createFunctions(data, lang);
	const normalizeDataSaver = createNormalizeDataSaver(data, functions);
	const checkpoint = createCheckpoint(lang, data, functions, normalizeDataSaver);
	const shop = createShop(lang, data, functions);
	const fishing = createFishing(lang, data, functions);
	const parkour = createParkour(lang, data, functions);
	const lottery = createLottery(lang, data, functions);
	const adventure = createAdventure(lang, data, functions);
	const settings = createSettings(lang, data, functions);
	data.gameState.setRequiredFunctions(write, loadGame, saveGame, hasSave);
	let launchCount = 0;
	async function launch() {
		launchCount++;
		if (launchCount > 1) {
			return
		}
		await functions.clear();
		if (!data.gameState.settings.skipStory) {
			for (let text of lang.current.main.story) {
				await functions.printa(text)
			}
		}
		if (await checkpoint.login()) {
			if (!data.gameState.settings.forceUsername || !data.gameState.settings.forceBlancPassword || !data.gameState.settings.forceInstantOutput) {
				await functions.sleep(.5)
			}
			await settings.choose()
		}
		if (!data.gameState.settings.forceUsername || !data.gameState.settings.forceBlancPassword || !data.gameState.settings.forceInstantOutput) {
			await functions.sleep(.5)
		}
		while (true) {
			await functions.clear();
			await functions.print(functions.listToChoice(lang.current.main.mainMenu));
			while (true) {
				let type = await functions.getch();
				if (type === "1") {
					await fishing();
					break
				} else if (type === "2") {
					await shop();
					break
				} else if (type === "3") {
					await settings.setTextSpeed();
					break
				} else if (type === "4") {
					await lottery();
					break
				} else if (type === "5") {
					if (data.gameState.dataSaver.challengeLevel === 0) {
						await parkour()
					} else if (data.gameState.dataSaver.challengeLevel === 1) {
						await adventure()
					} else {
						await functions.clear();
						await functions.printa(lang.current.main.challengeCompleted)
					}
					break
				} else if (type === "6") {
					await functions.clear();
					return
				}
			}
			await checkpoint.save();
			await functions.sleep(.5)
		}
	}
	return Object.freeze({
		setConsoleSize: size => {
			data.gameState.setConsoleSize(size)
		},
		onInput: str => {
			functions.onInput(str)
		},
		languages: {
			langs: functions.deepCopy(lang.langs),
			setLanguage: code => {
				lang.setLanguage(code)
			}
		},
		settings: data.gameState.settings,
		launch
	})
}
