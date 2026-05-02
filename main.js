// source-code/lang/EN/adventureStoryEN.js
function getCopy() {
  return [{
    title: "Prologue",
    lines: ["The dragon has terrorized the kingdom for years.", "You are the one people speak of - the hero who will face it.", "Help and danger will both find you.", "Your choices write the story."],
    choose: ["Begin"],
    cnext: [""],
    next: [1]
  }, {
    title: "",
    lines: ["Morning light fills your room.", "What will you do first?"],
    choose: ["Eat breakfast", "Go outside", "Sleep a little longer"],
    cnext: ["You eat and feel ready for the day.", "", "You pull the blanket up and drift off again."],
    next: [-1, 2, -2]
  }, {
    title: "",
    lines: ["You step onto the dirt road outside your home.", "Where to?"],
    choose: ["Go back for breakfast", "Go back to bed", "Visit the blacksmith"],
    cnext: ["You eat at home, then return outside.", "You crawl back under the covers.", "You walk toward the forge."],
    next: [-1, -2, 3]
  }, {
    title: "The forge",
    lines: ["Sparks fly as the blacksmith hammers metal.", "Blacksmith: So you're the one hunting the dragon.", "Blacksmith: You'll want more than courage - you'll want steel.", "Blacksmith: Say what you need.", "Blacksmith: I might be able to help."],
    choose: ["Leave", "Ask for a weapon"],
    cnext: ["You walk back to the road.", ""],
    next: [2, 4]
  }, {
    title: "The forge",
    lines: ["Blacksmith: What are we making?"],
    choose: ["A longsword"],
    cnext: ["The blacksmith hands you a longsword and nods."],
    next: [5]
  }, {
    title: "",
    lines: ["The road splits your journey in two."],
    choose: ["Follow the narrow path east", "Take the broad road west"],
    cnext: ["", ""],
    next: [6, 14]
  }, {
    title: "",
    lines: ["The eastern path winds through trees.", "An inn appears ahead."],
    choose: ["Go inside for the night", "Camp outside instead"],
    cnext: ["You pay for a room and sleep.", "You pitch a tent by the road - it's a cold night."],
    next: [10, 9]
  }, {
    title: "",
    lines: ["The eastern path winds through trees.", "Another inn - same sign, different village."],
    choose: ["Go inside for the night", "Keep walking"],
    cnext: ["You rent a room and rest.", ""],
    next: [8, 12]
  }, {
    title: "The End",
    lines: ["Thieves were waiting. You don't wake up.", "(The inn wasn't what it seemed.)"],
    choose: ["Try again"],
    cnext: [""],
    next: [1]
  }, {
    title: "The End",
    lines: ["The cold wins. You never wake.", "(Sleeping outside without gear was a mistake.)"],
    choose: ["Try again"],
    cnext: [""],
    next: [1]
  }, {
    title: "",
    lines: ["The road opens onto a market square.", "A merchant waves you over."],
    choose: ["Buy supplies", "Move on"],
    cnext: ["You fill your pack with bread and dried meat.", ""],
    next: [7, 11]
  }, {
    title: "The End",
    lines: ["You ignored food too long.", "Your strength gives out on the road.", "(Always pack a meal.)"],
    choose: ["Try again"],
    cnext: [""],
    next: [1]
  }, {
    title: "",
    lines: ["A quiet temple sits beside the path."],
    choose: ["Step inside", "Keep walking"],
    cnext: ["", ""],
    next: [13, 11]
  }, {
    title: "The temple",
    lines: ["Incense and chanting fill the hall.", "Days turn into years.", "You find peace - and completely forget about the dragon.", "(Not every hero finishes the quest.)"],
    choose: ["Try again"],
    cnext: [""],
    next: [1]
  }, {
    title: "",
    lines: ["The western road climbs a hill.", "A second inn stands alone at the crossroads."],
    choose: ["Go inside for the night", "Keep walking"],
    cnext: ["You take a room and rest.", ""],
    next: [15, 11]
  }, {
    title: "The inn",
    lines: ["Voices drift up from the common room below."],
    choose: ["Listen at the stairs", "Ignore it and sleep"],
    cnext: ["", ""],
    next: [16, 8]
  }, {
    title: "The inn",
    lines: ["You catch part of a plan: they want to steal your money.", "You have seconds to decide."],
    choose: ["Climb out the window", "Confront the innkeeper"],
    cnext: ["", ""],
    next: [17, 18]
  }, {
    title: "The End",
    lines: ["The ground is farther than you thought.", "You land badly. That was your last mistake.", "(Jumping out the window was not safe.)"],
    choose: ["Try again"],
    cnext: [""],
    next: [1]
  }, {
    title: "The inn",
    lines: ["It's an ugly brawl, but you walk away breathing.", "The road is clear again."],
    choose: ["Leave town"],
    cnext: [""],
    next: [19]
  }, {
    title: "",
    lines: ["The path splits: south toward the coast, north toward the hills."],
    choose: ["Head south", "Head north"],
    cnext: ["", ""],
    next: [20, 23]
  }, {
    title: "",
    lines: ["The southern road reaches a fork.", "To one side, the sea; to the other, more land."],
    choose: ["Keep walking south", "Board the ship at the dock"],
    cnext: ["", "You sign on as crew - wherever it's going."],
    next: [21, 22]
  }, {
    title: "...Rome?",
    lines: ["(This is a silly joke.) In old sayings, 'all roads lead to Rome.'", "Somehow you really are in Rome. No dragon here - only people with cameras.", "(You got lost in the story. Try another path next time.)"],
    choose: ["Try again"],
    cnext: [""],
    next: [1]
  }, {
    title: "...Land ho?",
    lines: ["Sailors shout when they see land: 'Land ho!' The trip takes a long time.", "You reach a new coast. It is not where the dragon lives. (Wrong place. Still no dragon.)", "(Ship jokes are for fun. The real quest is on land.)"],
    choose: ["Try again"],
    cnext: [""],
    next: [1]
  }, {
    title: "",
    lines: ["The northern trail ends at a cliff face.", "A dark cave mouth waits."],
    choose: ["Enter the cave", "Turn back"],
    cnext: ["You light a torch and go in.", ""],
    next: [24, 25]
  }, {
    title: "The cave",
    lines: ["You dig where the soil looks disturbed.", "Old bones come up. They look important - like something for a museum or a science report.", "Scientists would love this find. You only want a bed.", "(Still no dragon here.)"],
    choose: ["Try again"],
    cnext: [""],
    next: [1]
  }, {
    title: "",
    lines: ["Smoke stains the sky ahead.", "The dragon's lair is carved into the mountain."],
    choose: ["Go in", "Return home to eat", "Return home to sleep"],
    cnext: ["You step inside. It is hot and dark.", "", ""],
    next: [26, -3, -4]
  }, {
    title: "Dragon's lair",
    lines: ["Ash crunches under your boots.", "The beast is somewhere in the dark."],
    choose: ["Fight the dragon", "Return home to eat", "Return home to sleep"],
    cnext: ["Steel meets scales - somehow you survive.", "", ""],
    next: [27, -3, -4]
  }, {
    title: "Dragon's lair",
    lines: ["The cavern falls silent.", "The dragon is defeated - but the nest isn't empty."],
    choose: ["Search the nest for loot"],
    cnext: [""],
    next: [28]
  }, {
    title: "Dragon's lair",
    lines: ["Among the bones and coins sits a single heavy egg."],
    choose: ["Smash it", "Try to hatch it", "Return home to eat", "Return home to sleep"],
    cnext: ["", "", "", ""],
    next: [32, 29, -3, -4]
  }, {
    title: "Dragon's lair",
    lines: ["Warmth spreads through the shell.", "A hatchling blinks at you - cute, until it isn't."],
    choose: ["...Eat it? (You're hungry.)", "Let it go"],
    cnext: ["", ""],
    next: [30, 31]
  }, {
    title: "The End",
    lines: ["Even a baby dragon has sharp teeth.", "You had a good run.", "(Do not fight a baby dragon up close.)"],
    choose: ["Try again"],
    cnext: [""],
    next: [1]
  }, {
    title: "Dragon's lair",
    lines: ["The kingdom is safe.", "You leave the mountain with a story no tavern will believe.", "Thanks for playing."],
    choose: ["Leave the adventure"],
    cnext: [""],
    next: [-5]
  }, {
    title: "Dragon's lair",
    lines: ["The kingdom is safe.", "You leave the mountain with a story no tavern will believe.", "Thanks for playing."],
    choose: ["Leave the adventure"],
    cnext: [""],
    next: [-5]
  }];
}

// source-code/lang/EN.js
var exit = "exit";
function getCopy2() {
  return {
    functions: {
      outputSpeed: 2,
      speedName: ["slow mode", "normal mode", "instant mode"],
      chooseSpeed: "Please choose output speed.",
      skills: ["Please choose a starting skill", "1. Delicious Bait, 2. Rare Treasures, 3. Secure Safety Rope, 4. Popeye the Sailor, 5. Long Line for Big Fish, 6. Poor Family", "Delicious Bait:", "    Hooking speed increases to 1.5x", "Rare Treasures:", "    Fish prices increase to 2x", "Secure Safety Rope:", "    Slip-off chance greatly reduced (50% -> 10%)", "Popeye the Sailor:", "    Casting and reeling speed increase to 2x", "Long Line for Big Fish:", "    Big fish chance increases (20% -> 40%)", "Poor Family:", "    No additional bonuses"],
      exit,
      pressEnterToContinue: "press Enter to continue"
    },
    checkpoint: {
      login: "login / register",
      username: "username",
      password: "password",
      apiError: "API error",
      passwordNotMatch: "The two passwords do not match.",
      confirmPassword: "Confirm password",
      passwordError: "Username or password error.",
      invalidUsername: "Invalid username."
    },
    main: {
      story: ["2136. The ice is gone, and the sea has taken the old coastlines with it.", "Cities sleep under the waves; you woke on a speck of rock with no name.", "The radio hisses. No ship answers. Your supplies won't last.", "Rescue is a rumor. Survival is whatever gets you to sunrise.", "So you cast your line - the water is cold, but it still answers."],
      mainMenu: ["Start fishing", "Enter shop", "Edit output speed", "Lucky Draw", "Adventure", exit],
      challengeCompleted: "You have completed all challenges."
    },
    shop: {
      maxLevelReached: "Max level reached",
      shopMainMenu: ["Upgrade hook speed", "Upgrade fishing income", "Reduce hook-off chance", "Buy oven", "Back"],
      upgradeCostPrefix: "Upgrade cost",
      currentGoldPrefix: "Current gold",
      hookSpeedTitle: "Hook Speed",
      hookSpeedCurrentPrefix: "Current average time",
      hookSpeedNextPrefix: "Average time after upgrade",
      fishingIncomeTitle: "Fishing Income",
      fishingIncomeCurrentPrefix: "Current average income",
      fishingIncomeNextPrefix: "Average income after upgrade",
      hookOffTitle: "Hook-off Chance",
      hookOffCurrentPrefix: "Current hook-off chance",
      hookOffNextPrefix: "Hook-off chance after upgrade",
      hookOffPresetCurrent: "Current hook-off chance",
      hookOffPresetNext: "Hook-off chance after upgrade",
      hookOffCostPrefix: "Upgrade cost",
      purchaseCostPrefix: "Purchase cost",
      ovenCountTitle: "Oven Count",
      ovenMaxCount: "Reached maximum count",
      ovenCurrentPrefix: "Current oven count",
      notEnoughMoney: "Not enough money",
      purchaseSuccess: "Purchase successful",
      shopSelectMenu: ["Normal shop", "Super shop", exit],
      superShopMainMenu: ["Cast speed multiplier", "Upgrade big fish chance", "Back"],
      superCastSpeedTitle: "Cast Speed Multiplier",
      superBigFishTitle: "Big Fish Chance",
      superCurrentPrefix: "Current multiplier",
      superNextPrefix: "Multiplier after upgrade",
      superSpeedSuffix: "x",
      superBigFishCurrentPrefix: "Current big fish chance",
      superBigFishNextPrefix: "Big fish chance after upgrade"
    },
    lottery: {
      menu: ["Spin", exit],
      costPrefix: "Spin cost: 100 total fish count + 1000 coins. Current fish count: ",
      currentMoneyPrefix: " Current coins: ",
      oddsHeader: "Prize odds (each spin, 1-100):",
      oddsTable: [" 2% - Diamond Fish x1", "18% - Big Fish Bait x1", " 8% - you fish fish? No! Fish fish fish!", "21% - Bonus coins +$500", "24% - Bonus coins +$200", " 7% - Big Fish Bait x2", "20% - No extra prize (better luck next time)"],
      notEnoughBoth: "Not enough total fish caught and coins. A spin costs 100 fish count and 1000 coins.",
      notEnoughFishCount: "Not enough total fish caught. A spin costs 100 fish count.",
      notEnoughMoney: "Not enough coins. A spin costs 1000 coins.",
      rewardFishFishFish: "Fish fish fish",
      rewardBigFishBait: "Big Fish Bait",
      rewardDiamondFish: "Diamond Fish",
      rewardGoldText: "Bonus coins",
      thanks: "No bonus this time - thanks for playing!"
    },
    parkour: {
      jumpTip: "Use W or Space to jump, press R to respawn, press Backspace to exit.",
      challengeCompleteReward: "Challenge completed. You earned $500.",
      deathMessage: "You died.",
      respawnConfirm: "Do you want to respawn?",
      swimTip: "Use WASD to swim, press R to respawn, press Backspace to exit."
    },
    fishing: {
      weatherNames: ["Rain", "Snow", "Sunny     ", "Overcast  ", "Cloudy    ", "Fog       "],
      rainSize: ["", "   Light ", "Moderate ", "   Heavy "],
      fishName: ["Rotten ", "Common ", "Amethyst ", "L.Lazuli ", "Gold ", "Emerald ", "Diamond "],
      waitingStatus: ["Casting the rod", "Waiting", "Fish approaching", "Reeling in", "Fish got off"],
      youCaughtA: "You caught a(n) ",
      big: "Big ",
      fish: "fish",
      eggFish: "Big Gold fish",
      eaten: "You ate it because you were hungry",
      worth: "worth ",
      notEnoughRows: "Screen height must be at least",
      notEnoughCols: "Screen width must be at least",
      currentSize: "Current size",
      rows: "rows",
      cols: "columns",
      freshness: "Freshness",
      none: "None",
      currentStatus: "Current status",
      totalFishCaught: "Total fish caught",
      currentWeather: "Current weather",
      remainingTime: "Estimated remaining time",
      enterCompactMode: "Press E to enter compact mode",
      exitCompactMode: "Press E to exit compact mode",
      makeFishingRod: "Make fishing rod",
      currentFishingRod: "Current fishing rod",
      fishingRod: "Rod",
      rawFish: "Raw fish",
      currentAmount: "Current amount",
      fishpond: "Fishpond",
      fishNumber: " fish",
      rawFish: "Raw fish",
      roastFish: "Roasted fish",
      eatRawFish: "Eat raw fish",
      eatRoastedFish: "Eat roasted fish",
      currentHunger: "Current hunger",
      noOvenMenu: ["Make food", "Eat raw fish", exit],
      ovenMenu: ["Make food", "Eat raw fish", "Eat roasted fish", exit],
      makeFoodAction: "Press A to decrease, D to increase, Enter to make, Backspace to exit",
      makeRoastedFish: "Making roasted fish",
      roasting: "Roasting...",
      done: "Done",
      mainMenu: ["Start fishing", "Buy a fishing rod", "Prepare food", "Sell all", "Sell all and exit"]
    },
    adventure: {
      story: getCopy(),
      achievementAllRoadsToRome: "Bonus: First time reaching Rome - here's a little gold.",
      achievementWrongWay: "Bonus: You've looped through Rome so many times the road feels cursed.",
      achievementVoyage: "Bonus: First time washing up after that odd sea voyage.",
      achievementSurprise: "Bonus: The cave dig paid off - unexpected find.",
      achievementArchaeologist: "Bonus: Sixth time in that cave - you're basically on the research team.",
      achievementBuddhism: "Bonus: First time you really committed to the temple path.",
      achievementAscend: "Bonus: Sixth temple visit - you went all in on peace and quiet.",
      achievementDragonMeal: "Bonus: You ate enough times to earn the hatchling's respect (or fear).",
      achievementOriginalAspiration: "Bonus: You went home for food often enough - discipline pays.",
      achievementMission: "Bonus: Sixth food run home - you never forgot the quest.",
      achievementSoftBed: "Bonus: First long rest streak at home.",
      achievementSleepComfort: "Bonus: Sixth long rest - you've mastered the nap.",
      achievementNeedFood: "Bonus: Fifth meal at home - fuel for the road.",
      achievementHungryGhost: "Bonus: Tenth meal - you won't starve on this playthrough.",
      achievementVirtuousHui: "Bonus: Thirtieth meal - simple habits, steady hero.",
      achievementReadyAfterSleep: "Bonus: Fifth good night's sleep - you're actually rested.",
      achievementBedComfort: "Bonus: Tenth sleep - you and that bed are friends now.",
      achievementSleepGod: "Bonus: Thirtieth sleep - you could sleep through a dragon raid.",
      missionComplete: "Quest complete. The dragon story is done - here's your reward."
    }
  };
}

// source-code/lang/CN/adventureStoryCN.js
function getCopy3() {
  return [{
    title: "\u7B80\u4ECB",
    lines: ["\u4F60\u662F\u8FD9\u4E2A\u4E16\u754C\u7684\u52C7\u8005", "\u4F60\u9700\u8981\u7ECF\u8FC7\u4F60\u7684\u52AA\u529B\u6253\u8D25\u6076\u9F99", "\u8FC7\u7A0B\u4E2D\u4F60\u4F1A\u9047\u5230\u5F88\u591A\u7684\u5E2E\u52A9", "\u4EE5\u53CA\u5F88\u591A\u7684\u9677\u9631"],
    choose: ["\u5F00\u59CB"],
    cnext: [""],
    next: [1]
  }, {
    title: "",
    lines: ["\u4F60\u4ECE\u4F60\u7684\u5E8A\u4E0A\u9192\u6765", "\u4F60\u8981\u5E72\u4EC0\u4E48"],
    choose: ["\u5403\u65E9\u996D", "\u51FA\u53BB\u8D70\u8D70", "\u518D\u7761\u4E00\u4F1A"],
    cnext: ["\u4F60\u5403\u4E86\u65E9\u996D", "", "\u4F60\u8EBA\u5728\u4E86\u5E8A\u4E0A"],
    next: [-1, 2, -2]
  }, {
    title: "",
    lines: ["\u4F60\u6765\u5230\u4E86\u5C4B\u5916\u7684\u8DEF\u4E0A", "\u4F60\u8981\u5E72\u4EC0\u4E48"],
    choose: ["\u56DE\u5BB6\u5403\u65E9\u996D", "\u56DE\u5BB6\u518D\u7761\u4E00\u4F1A", "\u53BB\u94C1\u5320\u94FA"],
    cnext: ["\u4F60\u56DE\u5BB6\u5403\u4E86\u65E9\u996D", "\u4F60\u56DE\u5BB6\u8EBA\u5728\u4E86\u5E8A\u4E0A", "\u4F60\u8D70\u5411\u4E86\u94C1\u5320\u94FA"],
    next: [-1, -2, 3]
  }, {
    title: "\u94C1\u5320\u94FA",
    lines: ["\u4F60\u6765\u5230\u4E86\u94C1\u5320\u94FA", "\u94C1\u5320: \u542C\u8BF4\u4F60\u8981\u53BB\u8FCE\u6218\u6076\u9F99", "\u94C1\u5320: \u4F60\u9700\u8981\u51C6\u5907\u4E00\u628A\u79F0\u624B\u7684\u6B66\u5668", "\u94C1\u5320: \u544A\u8BC9\u6211\u4F60\u9700\u8981\u4EC0\u4E48", "\u94C1\u5320: \u6CA1\u51C6\u6211\u80FD\u5E2E\u4E0A\u5FD9"],
    choose: ["\u79BB\u5F00", "\u5236\u4F5C\u6B66\u5668"],
    cnext: ["\u4F60\u79BB\u5F00\u4E86\u94C1\u5320\u94FA", ""],
    next: [2, 4]
  }, {
    title: "\u94C1\u5320\u94FA",
    lines: ["\u94C1\u5320: \u4F60\u60F3\u8981\u4EC0\u4E48\u6837\u7684\u6B66\u5668"],
    choose: ["\u4E00\u628A\u957F\u5251"],
    cnext: ["\u4F60\u83B7\u5F97\u4E86\u4E00\u628A\u957F\u5251"],
    next: [5]
  }, {
    title: "",
    lines: ["\u662F\u65F6\u5019\u8BE5\u51FA\u53D1\u4E86"],
    choose: ["\u6CBF\u7740\u4E1C\u8FB9\u7684\u5C0F\u8DEF\u8D70", "\u6CBF\u7740\u897F\u8FB9\u7684\u5927\u8DEF\u8D70"],
    cnext: ["", ""],
    next: [6, 14]
  }, {
    title: "",
    lines: ["\u4F60\u671D\u7740\u4E1C\u8FB9\u8D70\u53BB", "\u9047\u5230\u4E86\u4E00\u4E2A\u65C5\u9986"],
    choose: ["\u8FDB\u5165\u4F11\u606F", "\u79BB\u5F00"],
    cnext: ["\u4F60\u8FDB\u5165\u4E86\u65C5\u9986\u4F11\u606F", "\u4F60\u5728\u8857\u5934\u642D\u5E10\u7BF7\u8FC7\u591C"],
    next: [10, 9]
  }, {
    title: "",
    lines: ["\u4F60\u671D\u7740\u4E1C\u8FB9\u8D70\u53BB", "\u9047\u5230\u4E86\u4E00\u4E2A\u65C5\u9986"],
    choose: ["\u8FDB\u5165\u4F11\u606F", "\u79BB\u5F00"],
    cnext: ["\u4F60\u8FDB\u5165\u4E86\u65C5\u9986\u4F11\u606F", ""],
    next: [8, 12]
  }, {
    title: "\u5931\u8D25",
    lines: ["\u4F60\u5728\u65C5\u9986\u88AB\u523A\u6740\u4E86"],
    choose: ["\u91CD\u751F"],
    cnext: [""],
    next: [1]
  }, {
    title: "\u5931\u8D25",
    lines: ["\u4F60\u5728\u5916\u7559\u5BBF\u540E\u51BB\u6B7B\u5728\u4E86\u8DEF\u8FB9"],
    choose: ["\u91CD\u751F"],
    cnext: [""],
    next: [1]
  }, {
    title: "",
    lines: ["\u4F60\u671D\u7740\u4E1C\u8FB9\u8D70\u53BB", "\u9047\u5230\u4E86\u4E00\u4E2A\u5546\u4EBA"],
    choose: ["\u8D2D\u4E70\u98DF\u7269", "\u79BB\u5F00"],
    cnext: ["\u4F60\u8865\u5145\u4E86\u5145\u8DB3\u7684\u98DF\u7269", ""],
    next: [7, 11]
  }, {
    title: "\u5931\u8D25",
    lines: ["\u4F60\u5728\u7531\u4E8E\u957F\u65F6\u95F4\u7684\u9965\u997F\u6B7B\u5728\u4E86\u8DEF\u8FB9"],
    choose: ["\u91CD\u751F"],
    cnext: [""],
    next: [1]
  }, {
    title: "",
    lines: ["\u4F60\u9047\u5230\u4E86\u5BFA\u5E99"],
    choose: ["\u8FDB\u5165", "\u79BB\u5F00"],
    cnext: ["", ""],
    next: [13, 11]
  }, {
    title: "\u5BFA\u5E99",
    lines: ["\u4F60\u8FDB\u5165\u4E86\u5BFA\u5E99", "\u4E00\u5FC3\u5B66\u4E60\u4F5B\u6CD5", "\u9010\u6E10\u4FEE\u70BC\u6210\u4F5B", "\u5FD8\u8BB0\u4E86\u4F60\u7684\u76EE\u7684"],
    choose: ["\u91CD\u751F"],
    cnext: [""],
    next: [1]
  }, {
    title: "",
    lines: ["\u4F60\u671D\u7740\u897F\u8FB9\u8D70\u53BB", "\u9047\u5230\u4E86\u4E00\u4E2A\u65C5\u9986"],
    choose: ["\u8FDB\u5165\u4F11\u606F", "\u79BB\u5F00"],
    cnext: ["\u4F60\u8FDB\u5165\u4E86\u65C5\u9986\u4F11\u606F", ""],
    next: [15, 11]
  }, {
    title: "\u65C5\u9986",
    lines: ["\u4F60\u542C\u89C1\u697C\u4E0B\u6709\u8BF4\u8BDD\u7684\u58F0\u97F3"],
    choose: ["\u5077\u542C", "\u7761\u89C9"],
    cnext: ["", ""],
    next: [16, 8]
  }, {
    title: "\u65C5\u9986",
    lines: ["\u4F60\u542C\u89C1\u65C5\u9986\u8001\u677F\u60F3\u62A2\u4F60\u7684\u94B1\u5305"],
    choose: ["\u8DF3\u7A97\u9003\u8D70", "\u4E0E\u8001\u677F\u6218\u6597"],
    cnext: ["", ""],
    next: [17, 18]
  }, {
    title: "\u5931\u8D25",
    lines: ["\u4F60\u6454\u6B7B\u4E86"],
    choose: ["\u91CD\u751F"],
    cnext: [""],
    next: [1]
  }, {
    title: "\u65C5\u9986",
    lines: ["\u4F60\u6253\u8D62\u4E86\u8001\u677F"],
    choose: ["\u79BB\u5F00"],
    cnext: [""],
    next: [19]
  }, {
    title: "",
    lines: ["\u95E8\u5916\u6709\u4E24\u6761\u8DEF"],
    choose: ["\u5357\u8FB9\u7684\u5927\u8DEF", "\u5317\u8FB9\u7684\u5C0F\u8DEF"],
    cnext: ["", ""],
    next: [20, 23]
  }, {
    title: "",
    lines: ["\u4F60\u671D\u7740\u5357\u8FB9\u7684\u5927\u8DEF\u8D70\u53BB", "\u9047\u5230\u4E86\u5C94\u8DEF"],
    choose: ["\u5357\u8FB9\u7684\u5927\u8DEF", "\u897F\u8FB9\u7684\u8F6E\u8239"],
    cnext: ["", "\u4F60\u8D70\u4E0A\u4E86\u8F6E\u8239"],
    next: [21, 22]
  }, {
    title: "\u7F57\u9A6C",
    lines: ["\u6761\u6761\u5927\u8DEF\u901A\u7F57\u9A6C", "\u4F60\u5230\u8FBE\u4E86\u7F57\u9A6C"],
    choose: ["\u91CD\u751F"],
    cnext: [""],
    next: [1]
  }, {
    title: "\u7F8E\u6D32\u5927\u9646",
    lines: ["\u4F60\u5F00\u59CB\u4E86\u4F60\u7684\u5927\u822A\u6D77", "\u53D1\u73B0\u4E86\u7F8E\u6D32\u5927\u9646"],
    choose: ["\u91CD\u751F"],
    cnext: [""],
    next: [1]
  }, {
    title: "",
    lines: ["\u4F60\u671D\u7740\u5317\u8FB9\u7684\u5C0F\u8DEF\u8D70\u53BB", "\u53D1\u73B0\u4E86\u5C71\u6D1E"],
    choose: ["\u8FDB\u5165\u5C71\u6D1E", "\u76F4\u63A5\u79BB\u5F00"],
    cnext: ["\u4F60\u8FDB\u5165\u4E86\u5C71\u6D1E", ""],
    next: [24, 25]
  }, {
    title: "\u5C71\u6D1E",
    lines: ["\u4F60\u5728\u5C71\u6D1E\u91CC\u53D1\u73B0\u4E86\u4E00\u4E2A\u571F\u5806", "\u7136\u540E\u5F00\u59CB\u5228\u571F", "\u4E8E\u662F\u4F60\u53D1\u73B0\u4E86\u4E16\u754C\u4E0A\u7B2C\u4E00\u5757\u5C71\u9876\u6D1E\u4EBA\u7684\u5B8C\u6574\u5934\u76D6\u9AA8"],
    choose: ["\u91CD\u751F"],
    cnext: [""],
    next: [1]
  }, {
    title: "",
    lines: ["\u4F60\u627E\u5230\u4E86\u9F99\u7684\u5DE2\u7A74"],
    choose: ["\u8FDB\u5165", "\u56DE\u5BB6\u5403\u996D", "\u56DE\u5BB6\u7761\u89C9"],
    cnext: ["\u4F60\u8FDB\u5165\u4E86\u9F99\u7684\u5DE2\u7A74", "", ""],
    next: [26, -3, -4]
  }, {
    title: "\u9F99\u5DE2",
    lines: ["\u4F60\u5230\u4E86\u9F99\u7684\u5DE2\u7A74"],
    choose: ["\u4E0E\u9F99\u6218\u6597", "\u56DE\u5BB6\u5403\u996D", "\u56DE\u5BB6\u7761\u89C9"],
    cnext: ["\u4F60\u8FDB\u5165\u4E86\u9F99\u7684\u5DE2\u7A74", "", ""],
    next: [27, -3, -4]
  }, {
    title: "\u9F99\u5DE2",
    lines: ["\u4F60\u6253\u8D25\u4E86\u6076\u9F99"],
    choose: ["\u5BFB\u627E\u9F99\u86CB"],
    cnext: [""],
    next: [28]
  }, {
    title: "\u9F99\u5DE2",
    lines: ["\u4F60\u627E\u5230\u4E86\u9F99\u86CB"],
    choose: ["\u7834\u574F\u9F99\u86CB", "\u5B75\u5316\u9F99\u86CB", "\u56DE\u5BB6\u5403\u996D", "\u56DE\u5BB6\u7761\u89C9"],
    cnext: ["", "", "", ""],
    next: [32, 29, -3, -4]
  }, {
    title: "\u9F99\u5DE2",
    lines: ["\u4F60\u5F00\u59CB\u5B75\u5316\u9F99\u86CB", "\u5B75\u5316\u51FA\u4E86\u5C0F\u9F99"],
    choose: ["\u6740\u4E86\u5403\u8089", "\u653E\u751F"],
    cnext: ["", ""],
    next: [30, 31]
  }, {
    title: "\u9F99\u5DE2",
    lines: ["\u4F60\u88AB\u5C0F\u9F99\u6740\u6B7B\u4E86"],
    choose: ["\u91CD\u751F"],
    cnext: [""],
    next: [1]
  }, {
    title: "\u9F99\u5DE2",
    lines: ["\u4F60\u5B8C\u6210\u4E86\u4F60\u7684\u4EFB\u52A1"],
    choose: ["\u9000\u51FA"],
    cnext: [""],
    next: [-5]
  }, {
    title: "\u9F99\u5DE2",
    lines: ["\u4F60\u5B8C\u6210\u4E86\u4F60\u7684\u4EFB\u52A1"],
    choose: ["\u9000\u51FA"],
    cnext: [""],
    next: [-5]
  }];
}

// source-code/lang/CN.js
var exit2 = "\u9000\u51FA";
function getCopy4() {
  return {
    functions: {
      outputSpeed: 1,
      speedName: ["\u6162\u901F", "\u666E\u901A", "\u53CA\u65F6"],
      this_is: "\u8FD9\u662F",
      chooseSpeed: "\u8BF7\u9009\u62E9\u8F93\u51FA\u901F\u5EA6",
      skills: ["\u8BF7\u9009\u62E9\u5F00\u5C40\u6280\u80FD", "1. \u7F8E\u5473\u8BF1\u9975, 2. \u7A00\u4E16\u73CD\u5B9D, 3. \u7262\u9760\u5B89\u5168\u7EF3, 4. \u5927\u529B\u6C34\u624B, 5. \u653E\u957F\u7EBF\u9493\u5927\u9C7C, 6. \u5B64\u82E6\u4EBA\u5BB6", "\u7F8E\u5473\u8BF1\u9975:", "    \u4E0A\u94A9\u901F\u5EA6\u53D8\u4E3A\u539F\u5148\u76841.5\u500D", "\u7A00\u4E16\u73CD\u5B9D:", "    \u9C7C\u7684\u4EF7\u683C\u53D8\u4E3A\u539F\u5148\u76842\u500D", "\u7262\u9760\u5B89\u5168\u7EF3:", "    \u8131\u94A9\u6982\u7387\u5927\u5E45\u964D\u4F4E (50% -> 10%)", "\u5927\u529B\u6C34\u624B:", "    \u629B\u7AFF\u4E0E\u6536\u7EBF\u901F\u5EA6\u53D8\u4E3A2\u500D", "\u653E\u957F\u7EBF\u9493\u5927\u9C7C:", "    \u5927\u9C7C\u6982\u7387\u753120%\u53D8\u4E3A40%", "\u5B64\u82E6\u4EBA\u5BB6:", "    \u65E0\u989D\u5916\u52A0\u6210"],
      exit: exit2,
      pressEnterToContinue: "\u6309 Enter \u7EE7\u7EED"
    },
    checkpoint: {
      login: "\u767B\u5F55 / \u6CE8\u518C",
      username: "\u7528\u6237\u540D",
      password: "\u5BC6\u7801",
      apiError: "API \u9519\u8BEF",
      passwordNotMatch: "\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u81F4",
      confirmPassword: "\u8BF7\u786E\u8BA4\u5BC6\u7801",
      passwordError: "\u7528\u6237\u540D\u6216\u5BC6\u7801\u9519\u8BEF",
      invalidUsername: "\u65E0\u6548\u7684\u7528\u6237\u540D"
    },
    main: {
      story: ["2136 \u5E74, \u6700\u540E\u7684\u51B0\u5DDD\u878D\u5316\u8FDB\u5165\u5927\u6D77\u3002", "\u6F6E\u6C34\u4E0A\u6DA8, \u65E7\u65E5\u7684\u57CE\u5E02\u6C89\u5728\u6C34\u4E0B, \u53EA\u5269\u6D6A\u4E0E\u76D0\u3002", "\u4F60\u56F0\u5728\u8FD9\u5EA7\u65E0\u540D\u5C0F\u5C9B\u4E0A, \u6536\u97F3\u673A\u91CC\u53EA\u6709\u65AD\u65AD\u7EED\u7EED\u7684\u6C99\u54CD\u3002", "\u8865\u7ED9\u89C1\u5E95, \u6551\u63F4\u8FDF\u8FDF\u672A\u81F3\u3002", "\u80FD\u6307\u671B\u7684, \u53EA\u6709\u628A\u9493\u7AFF\u4E00\u6B21\u6B21\u7529\u8FDB\u540C\u4E00\u7247\u6D77\u3002"],
      mainMenu: ["\u5F00\u59CB\u9493\u9C7C", "\u8FDB\u5165\u5546\u5E97", "\u66F4\u6539\u8F93\u51FA\u901F\u5EA6", "\u62BD\u5956", "\u6311\u6218", exit2],
      challengeCompleted: "\u60A8\u5DF2\u7ECF\u5B8C\u6210\u6240\u6709\u6311\u6218"
    },
    shop: {
      maxLevelReached: "\u7B49\u7EA7\u5DF2\u6EE1",
      shopMainMenu: ["\u5347\u7EA7\u4E0A\u94A9\u901F\u5EA6", "\u5347\u7EA7\u9493\u9C7C\u6536\u76CA", "\u8131\u94A9\u6982\u7387", "\u8D2D\u4E70\u70E4\u7BB1", "\u8FD4\u56DE"],
      upgradeCostPrefix: "\u5347\u7EA7\u82B1\u8D39",
      currentGoldPrefix: "\u5F53\u524D\u91D1\u5E01\u6570\u91CF",
      hookSpeedTitle: "\u4E0A\u94A9\u901F\u5EA6",
      hookSpeedCurrentPrefix: "\u5F53\u524D\u5E73\u5747\u65F6\u95F4",
      hookSpeedNextPrefix: "\u5347\u7EA7\u540E\u5E73\u5747\u65F6\u95F4",
      fishingIncomeTitle: "\u9493\u9C7C\u6536\u76CA",
      fishingIncomeCurrentPrefix: "\u5F53\u524D\u5E73\u5747\u6536\u76CA",
      fishingIncomeNextPrefix: "\u5347\u7EA7\u540E\u5E73\u5747\u6536\u76CA",
      hookOffTitle: "\u8131\u94A9\u6982\u7387",
      hookOffCurrentPrefix: "\u5F53\u524D\u8131\u94A9\u6982\u7387",
      hookOffNextPrefix: "\u5347\u7EA7\u540E\u8131\u94A9\u6982\u7387",
      hookOffPresetCurrent: "\u5F53\u524D\u8131\u94A9\u6982\u7387",
      hookOffPresetNext: "\u5347\u7EA7\u540E\u8131\u94A9\u6982\u7387",
      hookOffCostPrefix: "\u5347\u7EA7\u82B1\u8D39",
      purchaseCostPrefix: "\u8D2D\u4E70\u82B1\u8D39",
      ovenCountTitle: "\u70E4\u7BB1\u6570\u91CF",
      ovenMaxCount: "\u6570\u91CF\u5DF2\u6EE1",
      ovenCurrentPrefix: "\u5F53\u524D\u70E4\u7BB1\u6570\u91CF",
      notEnoughMoney: "\u91D1\u5E01\u4E0D\u8DB3",
      purchaseSuccess: "\u8D2D\u4E70\u6210\u529F",
      shopSelectMenu: ["\u666E\u901A\u5546\u5E97", "\u8D85\u7EA7\u5546\u5E97", exit2],
      superShopMainMenu: ["\u7529\u6746\u500D\u901F", "\u5347\u7EA7\u5927\u9C7C\u6982\u7387", "\u8FD4\u56DE"],
      superCastSpeedTitle: "\u7529\u6746\u500D\u901F",
      superBigFishTitle: "\u5927\u9C7C\u6982\u7387",
      superCurrentPrefix: "\u5F53\u524D\u500D\u901F",
      superNextPrefix: "\u5347\u7EA7\u540E\u6E38\u620F\u500D\u901F",
      superSpeedSuffix: "\u500D",
      superBigFishCurrentPrefix: "\u5F53\u524D\u5927\u9C7C\u6982\u7387",
      superBigFishNextPrefix: "\u5347\u7EA7\u540E\u5927\u9C7C\u6982\u7387"
    },
    lottery: {
      menu: ["\u8F6C\u76D8", exit2],
      costPrefix: "\u8F6C\u76D8\u6D88\u8017: 100 \u7D2F\u79EF\u9493\u9C7C\u6570\u91CF + 1000 \u91D1\u5E01 \u5F53\u524D\u9493\u9C7C\u6570\u91CF: ",
      currentMoneyPrefix: " \u5F53\u524D\u91D1\u5E01\u6570\u91CF: ",
      oddsHeader: "\u5956\u54C1\u6982\u7387 (\u6BCF\u6B21\u62BD\u5956\u5728 1-100 \u4E2D\u968F\u673A):",
      oddsTable: [" 2% - \u94BB\u77F3\u9C7C x1", "18% - \u5927\u9C7C\u8BF1\u9975 x1", " 8% - \u9C7C\u4EBA\u8282\u5FEB\u4E50", "21% - \u989D\u5916\u91D1\u5E01 +$500", "24% - \u989D\u5916\u91D1\u5E01 +$200", " 7% - \u5927\u9C7C\u8BF1\u9975 x2", "20% - \u8C22\u8C22\u60E0\u987E"],
      notEnoughBoth: "\u7D2F\u8BA1\u9493\u9C7C\u6570\u91CF\u4E0E\u91D1\u5E01\u5747\u4E0D\u8DB3\u3002\u62BD\u5956\u9700\u8981\u7D2F\u8BA1100\u6761\u9C7C\u4E0E1000\u91D1\u5E01\u3002",
      notEnoughFishCount: "\u7D2F\u8BA1\u9493\u9C7C\u6570\u91CF\u4E0D\u8DB3\u3002\u62BD\u5956\u9700\u8981\u7D2F\u8BA1100\u6761\u9C7C\u3002",
      notEnoughMoney: "\u91D1\u5E01\u4E0D\u8DB3\u3002\u62BD\u5956\u9700\u89811000\u91D1\u5E01\u3002",
      rewardFishFishFish: "\u9C7C\u4EBA\u8282\u5FEB\u4E50",
      rewardBigFishBait: "\u5927\u9C7C\u8BF1\u9975",
      rewardDiamondFish: "\u94BB\u77F3\u9C7C",
      rewardGoldText: "\u989D\u5916\u91D1\u5E01",
      thanks: "\u672C\u6B21\u672A\u83B7\u5F97\u989D\u5916\u5956\u52B1, \u8C22\u8C22\u53C2\u4E0E\uFF01"
    },
    parkour: {
      jumpTip: "\u4F7F\u7528 W \u6216\u7A7A\u683C\u8FDB\u884C\u8DF3\u8DC3, \u6309 R \u91CD\u751F, \u6309 Backspace \u9000\u51FA",
      challengeCompleteReward: "\u5B8C\u6210\u6311\u6218, \u83B7\u5F97 $500",
      deathMessage: "\u4F60\u9635\u4EA1\u4E86",
      respawnConfirm: "\u662F\u5426\u91CD\u751F",
      swimTip: "\u4F7F\u7528 WASD \u8FDB\u884C\u6E38\u6CF3, \u6309 R \u91CD\u751F, \u6309 Backspace \u9000\u51FA"
    },
    fishing: {
      weatherNames: ["\u96E8  ", "\u96EA  ", "\u6674    ", "\u9634    ", "\u591A\u4E91  ", "\u96FE    "],
      rainSize: ["", "\u5C0F", "\u4E2D", "\u5927"],
      fishName: ["\u8150\u70C2\u7684", "\u666E\u901A\u7684", "\u7D2B\u6C34\u6676", "\u9752\u91D1\u77F3", "\u91D1", "\u7EFF\u5B9D\u77F3", "\u94BB\u77F3"],
      waitingStatus: ["\u629B\u7AFF\u4E2D", "\u7B49\u5F85\u4E2D", "\u9C7C\u6B63\u5728\u9760\u8FD1", "\u6B63\u5728\u6536\u6746", "\u5DF2\u8131\u94A9"],
      youCaughtA: "\u4F60\u9493\u5230\u4E86\u4E00\u6761",
      big: "\u5927",
      fish: "\u9C7C",
      eggFish: "\u9E21\u86CB\u9C7C",
      eaten: "\u56E0\u9965\u997F\u5DF2\u98DF\u7528",
      worth: "\u4EF7\u503C",
      notEnoughRows: "\u5C4F\u5E55\u9AD8\u5EA6\u9700\u81F3\u5C11\u4E3A",
      notEnoughCols: "\u5C4F\u5E55\u5BBD\u5EA6\u9700\u81F3\u5C11\u4E3A",
      currentSize: "\u5F53\u524D\u4E3A",
      rows: "\u884C",
      cols: "\u5217",
      freshness: "\u65B0\u9C9C\u5EA6",
      none: "\u6682\u65E0",
      currentStatus: "\u5F53\u524D\u72B6\u6001",
      totalFishCaught: "\u7D2F\u8BA1\u9493\u9C7C\u6570\u91CF",
      currentWeather: "\u5F53\u524D\u5929\u6C14",
      remainingTime: "\u9884\u8BA1\u5269\u4F59\u65F6\u95F4",
      enterCompactMode: "\u6309 e \u952E\u8FDB\u5165\u7B80\u6D01\u6A21\u5F0F",
      exitCompactMode: "\u6309 e \u952E\u9000\u51FA\u7B80\u6D01\u6A21\u5F0F",
      makeFishingRod: "\u5236\u4F5C\u9C7C\u7AFF",
      currentFishingRod: "\u5F53\u524D\u9C7C\u7AFF",
      fishingRod: "\u7684\u9C7C\u7AFF",
      rawFish: "\u751F\u9C7C",
      currentAmount: "\u5F53\u524D\u6570\u91CF",
      fishpond: "\u9C7C\u6C60",
      fishNumber: "\u53EA",
      rawFish: "\u751F\u9C7C",
      roastFish: "\u70E4\u9C7C",
      eatRawFish: "\u98DF\u7528\u751F\u9C7C",
      eatRoastedFish: "\u98DF\u7528\u70E4\u9C7C",
      currentHunger: "\u5F53\u524D\u9965\u997F\u5EA6",
      noOvenMenu: ["\u5236\u4F5C\u98DF\u7269", "\u98DF\u7528\u751F\u9C7C", exit2],
      ovenMenu: ["\u5236\u4F5C\u98DF\u7269", "\u70E4\u5236\u98DF\u7269", "\u98DF\u7528\u751F\u9C7C", "\u98DF\u7528\u70E4\u9C7C", exit2],
      makeFoodAction: "\u6309 A \u51CF\u5C11, D \u589E\u52A0, \u6309 Enter \u5236\u4F5C, \u6309 Backspace \u9000\u51FA",
      makeRoastedFish: "\u5236\u4F5C\u70E4\u9C7C",
      roasting: "\u70E4\u5236\u4E2D",
      done: "\u5B8C\u6210",
      mainMenu: ["\u5F00\u59CB\u9493\u9C7C", "\u8D2D\u4E70\u9493\u7AFF", "\u5236\u4F5C\u98DF\u7269", "\u5168\u90E8\u5356\u51FA", "\u5168\u90E8\u5356\u51FA\u5E76\u9000\u51FA"]
    },
    adventure: {
      story: getCopy3(),
      achievementAllRoadsToRome: "\u83B7\u5F97\u5F69\u86CB: \u6761\u6761\u5927\u8DEF\u901A\u7F57\u9A6C",
      achievementWrongWay: "\u83B7\u5F97\u5F69\u86CB: \u8BEF\u5165\u6B67\u9014",
      achievementVoyage: "\u83B7\u5F97\u5F69\u86CB: \u54E5\u4F26\u5E03\u5927\u822A\u6D77",
      achievementSurprise: "\u83B7\u5F97\u5F69\u86CB: \u610F\u5916\u4E4B\u559C",
      achievementArchaeologist: "\u83B7\u5F97\u5F69\u86CB: \u8003\u53E4\u4E13\u5BB6",
      achievementBuddhism: "\u83B7\u5F97\u5F69\u86CB: \u5B66\u4E60\u4F5B\u6CD5, \u4E00\u5FC3\u5411\u5584",
      achievementAscend: "\u83B7\u5F97\u5F69\u86CB: \u4FEE\u70BC\u6210\u4ED9",
      achievementDragonMeal: "\u83B7\u5F97\u5F69\u86CB: \u771F\u9999",
      achievementOriginalAspiration: "\u83B7\u5F97\u5F69\u86CB: \u4E0D\u5FD8\u521D\u5FC3",
      achievementMission: "\u83B7\u5F97\u5F69\u86CB: \u7262\u8BB0\u4F7F\u547D",
      achievementSoftBed: "\u83B7\u5F97\u5F69\u86CB: \u5E8A\u771F\u8F6F",
      achievementSleepComfort: "\u83B7\u5F97\u5F69\u86CB: \u8FD8\u662F\u7761\u89C9\u8212\u670D",
      achievementNeedFood: "\u83B7\u5F97\u5F69\u86CB: \u4EBA\u662F\u94C1, \u996D\u662F\u94A2, \u4E00\u987F\u4E0D\u5403\u997F\u5F97\u614C",
      achievementHungryGhost: "\u83B7\u5F97\u5F69\u86CB: \u997F\u6B7B\u9B3C\u8131\u8EAB",
      achievementVirtuousHui: "\u83B7\u5F97\u5F69\u86CB: \u8D24\u54C9, \u56DE\u4E5F! \u4E00\u5428\u98DF, \u4E00\u74E2\u996E, \u5728\u964B\u5DF7, \u4EBA\u4E0D\u582A\u5176\u5FE7, \u56DE\u4E5F\u4E0D\u6539\u5176\u4E50. \u8D24\u54C9, \u56DE\u4E5F! ",
      achievementReadyAfterSleep: "\u83B7\u5F97\u5F69\u86CB: \u7761\u9192\u4E86\u624D\u80FD\u51FA\u53D1",
      achievementBedComfort: "\u83B7\u5F97\u5F69\u86CB: \u5E8A\u771F\u8212\u670D",
      achievementSleepGod: "\u83B7\u5F97\u5F69\u86CB: \u7761\u795E\u8D4B\u4F53",
      missionComplete: "\u4EFB\u52A1\u5B8C\u6210"
    }
  };
}

// source-code/lang.js
var Lang = class {
  setLanguage;
  #setLanguage(lang) {
    if (this.langs[lang]) {
      this.langCode = lang;
      this.current = {
        ...this.langs["EN"],
        ...this.langs[lang]
      };
    }
  }
  constructor(code) {
    this.langs = {
      EN: getCopy2(),
      CN: getCopy4()
    };
    this.langCodes = Object.keys(this.langs);
    this.langCode = "EN";
    this.current = this.langs.EN;
    if (code) {
      this.#setLanguage(code);
    }
    this.setLanguage = this.#setLanguage.bind(this);
    Object.seal(this);
  }
};

// source-code/deepFreeze.js
function deepFreeze(value, seen = /* @__PURE__ */ new WeakSet()) {
  if (value === null || typeof value !== "object" && typeof value !== "function") {
    return value;
  }
  if (!Object.isExtensible(value) || seen.has(value)) {
    return value;
  }
  seen.add(value);
  for (const key of Reflect.ownKeys(value)) {
    const descriptor = Object.getOwnPropertyDescriptor(value, key);
    if (!descriptor) {
      continue;
    }
    if ("value" in descriptor) {
      deepFreeze(descriptor.value, seen);
    }
  }
  return Object.freeze(value);
}

// source-code/data.js
function createData() {
  const constant = deepFreeze({
    maxCatchSpeedLevel: 25,
    minCatchSpeed: [50, 40, 40, 40, 30, 30, 30, 30, 20, 20, 10, 9, 7, 5, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 1, 1],
    maxCatchSpeed: [100, 100, 90, 80, 80, 70, 60, 50, 50, 40, 40, 40, 40, 40, 40, 35, 30, 25, 20, 10, 5, 4, 4, 3, 3, 2],
    catchSpeedUpgradeCost: [0, 5, 5, 5, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 150, 200, 200, 200, 300, 350, 400, 500, 600, 700, 700],
    maxIncomeLevel: 29,
    maxIncome: [20, 20, 20, 30, 30, 40, 40, 40, 50, 50, 55, 60, 60, 60, 70, 70, 80, 80, 90, 100, 105, 110, 120, 130, 135, 140, 145, 150, 170, 200],
    minIncome: [10, 12, 15, 15, 20, 20, 25, 30, 35, 40, 40, 40, 45, 50, 60, 60, 60, 70, 80, 85, 85, 90, 95, 100, 100, 100, 100, 100, 100, 100],
    incomeLevelUpgradeCost: [0, 20, 20, 20, 30, 40, 50, 60, 70, 80, 80, 80, 80, 90, 100, 150, 200, 200, 200, 300, 350, 400, 500, 600, 700, 700, 700, 700, 700, 700],
    fishOddsByRodLevel: [
      [0, 8100, 1400, 400, 90, 9, 1],
      [100, 8e3, 1400, 400, 90, 9, 1],
      [300, 7500, 1700, 400, 90, 9, 1],
      [500, 7e3, 1700, 700, 90, 9, 1],
      [700, 6500, 1700, 700, 390, 9, 1],
      [900, 6e3, 1700, 700, 390, 309, 1],
      [0, 6600, 1700, 700, 390, 309, 301]
    ],
    fishValueMultipliers: [0, 1, 2, 5, 10, 50, 100],
    precipitationDensityByIntensity: [0, 11, 20, 40]
  });
  function createDataSaver() {
    return {
      money: 20,
      catchSpeedLevel: 0,
      incomeLevel: 0,
      totalFishCaught: 0,
      bigFishChance: 20,
      actionSpeedMultiplier: 1,
      slipOffChance: 50,
      rodLevel: 1,
      textSpeed: 1,
      challengeLevel: 0,
      ovenCount: 0,
      hunger: 20,
      foodFish: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ],
      compactMode: false
    };
  }
  function createGameState() {
    const gameState = {
      username: "",
      fishMan: false,
      bigFish: 0,
      diamondFish: 0,
      password: "",
      dataSaver: createDataSaver(),
      consoleSize: {
        rows: 100,
        cols: 100
      },
      settings: {
        developerMode: false,
        skipStory: false,
        forceUsername: "",
        forceBlancPassword: false,
        forceInstantOutput: false
      },
      requiredFunctions: {
        write: async (text) => console.log(text),
        loadGame: async () => ({
          code: 0
        }),
        saveGame: async () => ({
          code: 0
        }),
        hasSave: async () => ({
          code: 0
        })
      },
      setConsoleSize: (data) => {
        gameState.consoleSize.rows = data.rows || 100;
        gameState.consoleSize.cols = data.cols || 100;
      },
      setRequiredFunctions(write, loadGame, saveGame, hasSave) {
        gameState.requiredFunctions.write = write;
        gameState.requiredFunctions.loadGame = loadGame;
        gameState.requiredFunctions.saveGame = saveGame;
        gameState.requiredFunctions.hasSave = hasSave;
      }
    };
    return gameState;
  }
  return Object.freeze({
    constant,
    gameState: createGameState(),
    createDataSaver,
    createGameState
  });
}

// source-code/functions.js
function createFunctions(data, lang) {
  const inputBuffer = [];
  const waitingResolvers = [];
  function listToChoice(...lists) {
    return [lists].flat(2).map((name, index) => `${index + 1}. ${capitalize(name)}`).join(", ");
  }
  function write(text) {
    return data.gameState.requiredFunctions.write(String(text || "").replace(/\n/g, "\r\n"));
  }
  async function clear() {
    await write("\x1Bc");
  }
  function onInput(str) {
    if (typeof str !== "string") {
      str = String(str);
    }
    for (const ch of str.replace(/\r\n/g, "\r").replace(/\n/g, "\r").replace(/\x08/g, "\x7F")) {
      if (waitingResolvers.length > 0) {
        const resolve = waitingResolvers.shift();
        resolve(ch);
      } else {
        inputBuffer.push(ch);
      }
    }
  }
  async function getch() {
    if (inputBuffer.length > 0) {
      return inputBuffer.shift();
    }
    return new Promise((resolve) => {
      waitingResolvers.push(resolve);
    });
  }
  function getch2() {
    if (inputBuffer.length > 0) {
      return inputBuffer.shift();
    }
    return "";
  }
  function getch2s() {
    if (inputBuffer.length === 0) {
      return "";
    }
    return inputBuffer.splice(0).join("");
  }
  function isNumberBetween(num, l, r) {
    return num >= l && num <= r;
  }
  async function getline(type = 0) {
    let ans = "";
    while (true) {
      const a = await getch();
      if (a === "\r") {
        if (ans) {
          break;
        } else {
          continue;
        }
      }
      if (a === "\x7F") {
        if (ans.length > 0) {
          ans = ans.slice(0, -1);
          if (type === 1 || type === 2) {
            await write("\b \b");
          }
        }
        continue;
      }
      if (!/[!-~]/.test(a)) {
        continue;
      }
      ans += a;
      if (type === 1) {
        await write(a);
      } else if (type === 2) {
        await write("*");
      }
    }
    await write("\n");
    return ans;
  }
  async function getlineYe(type = 0) {
    let ans = "";
    while (true) {
      const a = await getch();
      if (a === "\r") {
        break;
      }
      if (a === "\x7F") {
        if (ans.length > 0) {
          ans = ans.slice(0, -1);
          if (type === 1 || type === 2) {
            await write("\b \b");
          }
        }
        continue;
      }
      if (!/[!-~]/.test(a)) {
        continue;
      }
      ans += a;
      if (type === 1) {
        await write(a);
      } else if (type === 2) {
        await write("*");
      }
    }
    await write("\n");
    return ans;
  }
  async function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, (Number.isFinite(time) && time > 0 ? time : 0) * 1e3));
  }
  function capitalize(text) {
    if (!text) {
      return "";
    }
    return text[0].toUpperCase() + text.slice(1);
  }
  async function printnl(text, time = 0.02) {
    await write("\x1B[?25l");
    try {
      if (!isNumberBetween(data.gameState.dataSaver.textSpeed, 0, 1) || time <= 0 || data.gameState.settings.forceInstantOutput) {
        await write(text);
      } else {
        for (const char of String(text || "")) {
          await write(char);
          await sleep(time / (data.gameState.dataSaver.textSpeed + 1) / lang.current.functions.outputSpeed);
        }
      }
    } finally {
      await write("\x1B[m\x1B[?25h");
    }
  }
  async function print(text, time = 0.02) {
    await printnl(text, time);
    await write("\n");
  }
  async function printa(text = "", time = 0.02) {
    await print(text + (text ? "    " : "") + "(" + capitalize(lang.current.functions.pressEnterToContinue) + ")", time);
    while (await getch() !== "\r") ;
  }
  async function printYn(text = "", time = 0.02) {
    const toYN = {
      Y: "y",
      N: "n",
      y: "y",
      n: "n",
      "\r": "y"
    };
    await print(text + (text ? " " : "") + "(Y/n)", time);
    let input;
    do {
      input = await getch();
    } while (!toYN[input]);
    return toYN[input] === "y";
  }
  function random(l, r) {
    return Math.floor(Math.random() * (r - l + 1)) + l;
  }
  function isPlainObject(value) {
    if (value === null || typeof value !== "object") {
      return false;
    }
    const proto = Object.getPrototypeOf(value);
    return proto === Object.prototype || proto === null;
  }
  function clamp(value, min, max, fallback = min) {
    const numberValue = Number(value);
    if (Number.isNaN(numberValue)) {
      return fallback;
    }
    return Math.min(max, Math.max(min, numberValue));
  }
  function clampInt(value, min, max, fallback = min) {
    const numberValue = Number(value);
    if (Number.isNaN(numberValue)) {
      return fallback;
    }
    return Math.min(max, Math.max(min, Math.trunc(numberValue)));
  }
  function deepCopy(obj) {
    if (obj === null || typeof obj !== "object") {
      return obj;
    }
    if (Array.isArray(obj)) {
      return obj.map((item) => deepCopy(item));
    }
    const result = {};
    for (const key of Object.keys(obj)) {
      result[key] = deepCopy(obj[key]);
    }
    return result;
  }
  return Object.freeze({
    listToChoice,
    write,
    clear,
    onInput,
    getch,
    getch2,
    getch2s,
    isNumberBetween,
    getline,
    getlineYe,
    sleep,
    capitalize,
    printnl,
    print,
    printa,
    printYn,
    random,
    isPlainObject,
    clamp,
    clampInt,
    deepCopy
  });
}

// source-code/normalizeDataSaver.js
function createNormalizeDataSaver(data, functions) {
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
      foodFish = fallback.foodFish.map((pair) => [...pair]);
    } else {
      if (source.foodFish.length >= fallback.foodFish.length) {
        foodFish = source.foodFish.slice(0, fallback.foodFish.length);
      } else {
        foodFish = [...source.foodFish, ...Array.from({
          length: fallback.foodFish.length - source.foodFish.length
        }, () => [0, 0])];
      }
    }
    normalized.foodFish = foodFish.map((pair) => [functions.clampInt(pair?.[0], 0, Number.MAX_SAFE_INTEGER, 0), functions.clampInt(pair?.[1], 0, Number.MAX_SAFE_INTEGER, 0)]);
    normalized.compactMode = typeof source.compactMode === "boolean" ? source.compactMode : fallback.compactMode;
    data.gameState.dataSaver = normalized;
  }
  return run;
}

// source-code/checkpoint.js
function createCheckpoint(lang, data, functions, normalizeDataSaver) {
  async function loadGame() {
    const loadState = await data.gameState.requiredFunctions.loadGame(data.gameState.username, data.gameState.password);
    if (loadState?.code === 1) {
      data.gameState.dataSaver = {
        ...data.createDataSaver(),
        ...loadState.data
      };
      normalizeDataSaver();
    }
    return loadState;
  }
  async function saveGame() {
    normalizeDataSaver();
    return data.gameState.requiredFunctions.saveGame(data.gameState.username, data.gameState.password, data.gameState.dataSaver);
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
        await functions.write(username + "\n");
      } else {
        username = await functions.getline(1);
        if (!/^[a-zA-Z0-9_-]+$/.test(username)) {
          await functions.print(lang.current.checkpoint.invalidUsername);
          await functions.sleep(1);
          continue;
        }
      }
      const userState = await data.gameState.requiredFunctions.hasSave(username);
      if (!userState?.code) {
        await functions.print(functions.capitalize(lang.current.checkpoint.apiError));
        await functions.sleep(1);
        continue;
      }
      const isNew = userState.code === 2;
      await functions.printnl(functions.capitalize(lang.current.checkpoint.password) + ": ");
      if (data.gameState.settings.forceBlancPassword) {
        await functions.write("\n");
      } else {
        password = await functions.getline(2);
        if (isNew) {
          await functions.printnl(functions.capitalize(lang.current.checkpoint.confirmPassword) + ": ");
          let newPassword = await functions.getline(2);
          if (newPassword !== password) {
            await functions.print(lang.current.checkpoint.passwordNotMatch);
            await functions.sleep(1);
            continue;
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
          continue;
        }
      }
      const saveState = await saveGame();
      if (!saveState?.code) {
        await functions.print(lang.current.checkpoint.apiError);
        await functions.sleep(1);
        continue;
      }
      if (saveState.code === 2) {
        await functions.print(lang.current.checkpoint.passwordError);
        await functions.sleep(1);
        continue;
      }
      await functions.clear();
      return isNew;
    }
  }
  async function load() {
    const loadState = await loadGame();
    if (loadState?.code !== 1) {
      await functions.printa(lang.current.checkpoint.apiError);
    }
  }
  async function save() {
    const saveState = await saveGame();
    if (!saveState?.code) {
      await functions.printa(lang.current.checkpoint.apiError);
    } else if (saveState.code === 2) {
      await functions.printa(lang.current.checkpoint.passwordError);
    }
  }
  return Object.freeze({
    login,
    load,
    save
  });
}

// source-code/shop.js
function createShop(lang, data, functions) {
  function avgText(minValue, maxValue) {
    const sum = minValue + maxValue;
    return sum % 2 === 0 ? String(sum / 2) : `${Math.floor(sum / 2)}.5`;
  }
  async function showResult(text) {
    await functions.print(text);
    await functions.sleep(0.5);
  }
  async function shop0() {
    while (true) {
      await functions.clear();
      await functions.print(functions.listToChoice(lang.current.shop.shopMainMenu));
      await functions.print(lang.current.shop.hookSpeedTitle + ": ");
      if (data.gameState.dataSaver.catchSpeedLevel === data.constant.maxCatchSpeedLevel) {
        await functions.print("    " + lang.current.shop.maxLevelReached);
      } else {
        await functions.print("    " + lang.current.shop.hookSpeedCurrentPrefix + ": " + avgText(data.constant.minCatchSpeed[data.gameState.dataSaver.catchSpeedLevel], data.constant.maxCatchSpeed[data.gameState.dataSaver.catchSpeedLevel]) + ", " + lang.current.shop.hookSpeedNextPrefix + ": " + avgText(data.constant.minCatchSpeed[data.gameState.dataSaver.catchSpeedLevel + 1], data.constant.maxCatchSpeed[data.gameState.dataSaver.catchSpeedLevel + 1]));
        await functions.print("    " + lang.current.shop.upgradeCostPrefix + ": $" + data.constant.catchSpeedUpgradeCost[data.gameState.dataSaver.catchSpeedLevel + 1] + ", " + lang.current.shop.currentGoldPrefix + ": $" + data.gameState.dataSaver.money);
      }
      await functions.print(lang.current.shop.fishingIncomeTitle + ": ");
      if (data.gameState.dataSaver.incomeLevel === data.constant.maxIncomeLevel) {
        await functions.print("    " + lang.current.shop.maxLevelReached);
      } else {
        await functions.print("    " + lang.current.shop.fishingIncomeCurrentPrefix + ": " + avgText(data.constant.minIncome[data.gameState.dataSaver.incomeLevel], data.constant.maxIncome[data.gameState.dataSaver.incomeLevel]) + ", " + lang.current.shop.fishingIncomeNextPrefix + ": " + avgText(data.constant.minIncome[data.gameState.dataSaver.incomeLevel + 1], data.constant.maxIncome[data.gameState.dataSaver.incomeLevel + 1]));
        await functions.print("    " + lang.current.shop.upgradeCostPrefix + ": $" + data.constant.incomeLevelUpgradeCost[data.gameState.dataSaver.incomeLevel + 1] + ", " + lang.current.shop.currentGoldPrefix + ": $" + data.gameState.dataSaver.money);
      }
      await functions.print(lang.current.shop.hookOffTitle + ": ");
      if (data.gameState.dataSaver.slipOffChance === 0) {
        await functions.print("    " + lang.current.shop.maxLevelReached);
      } else if (data.gameState.dataSaver.slipOffChance > 10) {
        await functions.print("    " + lang.current.shop.hookOffCurrentPrefix + ": " + data.gameState.dataSaver.slipOffChance + "%, " + lang.current.shop.hookOffNextPrefix + ": " + (data.gameState.dataSaver.slipOffChance - 10) + "%");
        await functions.print("    " + lang.current.shop.hookOffCostPrefix + " $100, " + lang.current.shop.currentGoldPrefix + ": $" + data.gameState.dataSaver.money);
      } else if (data.gameState.dataSaver.slipOffChance > 5) {
        await functions.print("    " + lang.current.shop.hookOffPresetCurrent + " 10% " + lang.current.shop.hookOffPresetNext + " 5%");
        await functions.print("    " + lang.current.shop.hookOffCostPrefix + " $100, " + lang.current.shop.currentGoldPrefix + ": $" + data.gameState.dataSaver.money);
      } else if (data.gameState.dataSaver.slipOffChance > 1) {
        await functions.print("    " + lang.current.shop.hookOffCurrentPrefix + ": " + data.gameState.dataSaver.slipOffChance + "%, " + lang.current.shop.hookOffNextPrefix + ": " + (data.gameState.dataSaver.slipOffChance - 1) + "%");
        await functions.print("    " + lang.current.shop.hookOffCostPrefix + " $100, " + lang.current.shop.currentGoldPrefix + ": $" + data.gameState.dataSaver.money);
      } else {
        await functions.print("    " + lang.current.shop.hookOffPresetCurrent + " 1% " + lang.current.shop.hookOffPresetNext + " 0%");
        await functions.print("    " + lang.current.shop.hookOffCostPrefix + " $500, " + lang.current.shop.currentGoldPrefix + ": $" + data.gameState.dataSaver.money);
      }
      await functions.print("    " + lang.current.shop.purchaseCostPrefix + " $10, " + lang.current.shop.currentGoldPrefix + ": $" + data.gameState.dataSaver.money);
      await functions.print(lang.current.shop.ovenCountTitle + ": ");
      if (data.gameState.dataSaver.ovenCount >= 3) {
        await functions.print("    " + lang.current.shop.ovenMaxCount);
      } else {
        await functions.print("    " + lang.current.shop.ovenCurrentPrefix + ": " + data.gameState.dataSaver.ovenCount);
        if (data.gameState.dataSaver.ovenCount < 1) {
          await functions.print("    " + lang.current.shop.purchaseCostPrefix + " $50, " + lang.current.shop.currentGoldPrefix + ": $" + data.gameState.dataSaver.money);
        } else if (data.gameState.dataSaver.ovenCount === 1) {
          await functions.print("    " + lang.current.shop.purchaseCostPrefix + " $1000, " + lang.current.shop.currentGoldPrefix + ": $" + data.gameState.dataSaver.money);
        } else {
          await functions.print("    " + lang.current.shop.purchaseCostPrefix + " $2000, " + lang.current.shop.currentGoldPrefix + ": $" + data.gameState.dataSaver.money);
        }
      }
      while (true) {
        const type = await functions.getch();
        if (type === "1") {
          if (data.gameState.dataSaver.catchSpeedLevel === data.constant.maxCatchSpeedLevel) {
            await showResult("    " + lang.current.shop.maxLevelReached);
            break;
          } else if (data.gameState.dataSaver.money < data.constant.catchSpeedUpgradeCost[data.gameState.dataSaver.catchSpeedLevel + 1]) {
            await showResult("    " + lang.current.shop.notEnoughMoney);
            break;
          } else {
            data.gameState.dataSaver.money -= data.constant.catchSpeedUpgradeCost[++data.gameState.dataSaver.catchSpeedLevel];
            await showResult("    " + lang.current.shop.purchaseSuccess);
            break;
          }
        } else if (type === "2") {
          if (data.gameState.dataSaver.incomeLevel === data.constant.maxIncomeLevel) {
            await showResult("    " + lang.current.shop.maxLevelReached);
            break;
          } else if (data.gameState.dataSaver.money < data.constant.incomeLevelUpgradeCost[data.gameState.dataSaver.incomeLevel + 1]) {
            await showResult("    " + lang.current.shop.notEnoughMoney);
            break;
          } else {
            data.gameState.dataSaver.money -= data.constant.incomeLevelUpgradeCost[++data.gameState.dataSaver.incomeLevel];
            await showResult("    " + lang.current.shop.purchaseSuccess);
            break;
          }
        } else if (type === "3") {
          if (data.gameState.dataSaver.slipOffChance === 0) {
            await showResult("    " + lang.current.shop.maxLevelReached);
            break;
          } else if (data.gameState.dataSaver.slipOffChance === 1) {
            if (data.gameState.dataSaver.money < 500) {
              await showResult("    " + lang.current.shop.notEnoughMoney);
              break;
            } else {
              data.gameState.dataSaver.money -= 500;
              data.gameState.dataSaver.slipOffChance = 0;
              await showResult("    " + lang.current.shop.purchaseSuccess);
              break;
            }
          } else {
            if (data.gameState.dataSaver.money < 100) {
              await showResult("    " + lang.current.shop.notEnoughMoney);
              break;
            } else {
              data.gameState.dataSaver.money -= 100;
              if (data.gameState.dataSaver.slipOffChance > 10) {
                data.gameState.dataSaver.slipOffChance -= 10;
              } else if (data.gameState.dataSaver.slipOffChance > 5) {
                data.gameState.dataSaver.slipOffChance = 5;
              } else if (data.gameState.dataSaver.slipOffChance > 0) {
                data.gameState.dataSaver.slipOffChance -= 1;
              }
              await showResult("    " + lang.current.shop.purchaseSuccess);
              break;
            }
          }
        } else if (type === "4") {
          if (data.gameState.dataSaver.ovenCount >= 3) {
            await showResult("    " + lang.current.shop.ovenMaxCount);
            break;
          } else {
            if (data.gameState.dataSaver.ovenCount < 1) {
              if (data.gameState.dataSaver.money < 50) {
                await showResult("    " + lang.current.shop.notEnoughMoney);
                break;
              } else {
                data.gameState.dataSaver.money -= 50;
                data.gameState.dataSaver.ovenCount = 1;
                await showResult("    " + lang.current.shop.purchaseSuccess);
                break;
              }
            } else if (data.gameState.dataSaver.ovenCount === 1) {
              if (data.gameState.dataSaver.money < 1e3) {
                await showResult("    " + lang.current.shop.notEnoughMoney);
                break;
              } else {
                data.gameState.dataSaver.money -= 1e3;
                data.gameState.dataSaver.ovenCount = 2;
                await showResult("    " + lang.current.shop.purchaseSuccess);
                break;
              }
            } else {
              if (data.gameState.dataSaver.money < 2e3) {
                await showResult("    " + lang.current.shop.notEnoughMoney);
                break;
              } else {
                data.gameState.dataSaver.money -= 2e3;
                data.gameState.dataSaver.ovenCount = 3;
                await showResult("    " + lang.current.shop.purchaseSuccess);
                break;
              }
            }
          }
        } else if (type === "5") {
          return;
        }
      }
    }
  }
  async function shop1() {
    while (true) {
      await functions.clear();
      await functions.print(functions.listToChoice(lang.current.shop.superShopMainMenu));
      await functions.print(lang.current.shop.superCastSpeedTitle + ": ");
      if (data.gameState.dataSaver.actionSpeedMultiplier >= 10) {
        await functions.print("    " + lang.current.shop.maxLevelReached);
      } else {
        await functions.print("    " + lang.current.shop.superCurrentPrefix + ": " + data.gameState.dataSaver.actionSpeedMultiplier + " " + lang.current.shop.superNextPrefix + ": " + (data.gameState.dataSaver.actionSpeedMultiplier + 1) + " " + lang.current.shop.superSpeedSuffix);
        await functions.print("    " + lang.current.shop.purchaseCostPrefix + " $1000, " + lang.current.shop.currentGoldPrefix + ": $" + data.gameState.dataSaver.money);
      }
      await functions.print(lang.current.shop.superBigFishTitle + ": ");
      if (data.gameState.dataSaver.bigFishChance >= 60) {
        await functions.print("    " + lang.current.shop.maxLevelReached);
      } else {
        await functions.print("    " + lang.current.shop.superBigFishCurrentPrefix + ": " + data.gameState.dataSaver.bigFishChance + " %, " + lang.current.shop.superBigFishNextPrefix + ": " + (data.gameState.dataSaver.bigFishChance + 5) + "%");
        await functions.print("    " + lang.current.shop.purchaseCostPrefix + " $1000, " + lang.current.shop.currentGoldPrefix + ": $" + data.gameState.dataSaver.money);
      }
      while (true) {
        const type = await functions.getch();
        if (type === "1") {
          if (data.gameState.dataSaver.actionSpeedMultiplier >= 10) {
            await showResult("    " + lang.current.shop.maxLevelReached);
            break;
          } else if (data.gameState.dataSaver.money < 1e3) {
            await showResult("    " + lang.current.shop.notEnoughMoney);
            break;
          } else {
            data.gameState.dataSaver.money -= 1e3;
            data.gameState.dataSaver.actionSpeedMultiplier++;
            await showResult("    " + lang.current.shop.purchaseSuccess);
            break;
          }
        } else if (type === "2") {
          if (data.gameState.dataSaver.bigFishChance >= 60) {
            await showResult("    " + lang.current.shop.maxLevelReached);
            break;
          } else if (data.gameState.dataSaver.money < 1e3) {
            await showResult("    " + lang.current.shop.notEnoughMoney);
            break;
          } else {
            data.gameState.dataSaver.money -= 1e3;
            data.gameState.dataSaver.bigFishChance += 5;
            await showResult("    " + lang.current.shop.purchaseSuccess);
            break;
          }
        } else if (type === "3") {
          return;
        }
      }
    }
  }
  async function run() {
    await functions.clear();
    await functions.print(functions.listToChoice(lang.current.shop.shopSelectMenu));
    let type;
    while (true) {
      type = await functions.getch();
      if (type === "1") {
        await shop0();
        break;
      } else if (type === "2") {
        await shop1();
        break;
      } else if (type === "3") {
        return;
      }
    }
  }
  return run;
}

// source-code/fishing.js
function createFishing(lang, data, functions) {
  const paintTemplate = Object.freeze(["                                            ", "                                            ", "                                            ", "                                            ", "                                            ", "                                            ", "                                            ", "                                            ", "                         o                  ", "                        /|\\--------         ", "                        /_\\___              ", "~~~~~~~~~~~~~~~~~~~~~~~|      |~~~~~~~~~~~~|", "                              |            |", "                              |            |", "                              |____________|"]);
  const precipitationSymbol = Object.freeze([".", "*", " ", " ", " ", " "]);
  const precipitationColor = Object.freeze(["\x1B[1;34m", "\x1B[1;36m", "", "", "", ""]);
  const weatherPaintTemplate = deepFreeze([
    ["     \x1B[33;1m_____\x1B[m                                  ", "    \x1B[33;1m|     |\x1B[m                                 ", "    \x1B[33;1m|     |\x1B[m                                 ", "    \x1B[33;1m|_____|\x1B[m                                 "],
    ["         _______      ___________           ", "     ___/       \\____/           \\___       ", "    (                                )      ", "     \\______________________________/       "],
    ["         \x1B[33;1m_____\x1B[m       ___________            ", "     ___\x1B[33;1m|_____|\x1B[m_____/           \\____       ", "    (                                )      ", "     \\______________________________/       "]
  ]);
  let lastDrawTime = 0;
  let timeUsedInGame = 0;
  let currentWeather = [2, 0];
  let lastPrecipitation = 0;
  let precipitationPoints = [];
  let paint = Array.from({
    length: 15
  }, () => Array(44).fill(" "));
  let color = Array.from({
    length: 15
  }, () => Array(44).fill(""));
  let paintLastTick = "";
  let fishInPond = Array.from({
    length: 7
  }, () => []);
  let fishColor = Object.freeze(["\x1B[1;31m", "\x1B[1;37m", "\x1B[1;35m", "\x1B[1;34m", "\x1B[1;33m", "\x1B[1;32m", "\x1B[1;36m"]);
  let currentWaitingStatus = 0;
  let consoleSizeLastTick = "";
  function changeWeather(weather) {
    if (weather[0] < 0 || weather[0] > 5) {
      return [3, 0];
    }
    if (weather[1] < 0 || weather[1] > (weather[0] < 2 ? 3 : 0)) {
      return [weather[0], 0];
    }
    if (weather[0] === 0 || weather[0] === 1) {
      if (weather[1] < 2) {
        const weatherRoll = functions.random(1, 20);
        if (weatherRoll <= 9) {
          return [weather[0], weather[1]];
        } else if (weatherRoll <= 15) {
          return [weather[0], functions.random(1, 3)];
        } else if (weatherRoll <= 18) {
          return [functions.random(0, 1), weather[1]];
        } else {
          return [functions.random(2, 4), 0];
        }
      } else {
        const weatherRoll = functions.random(1, 2);
        if (weatherRoll <= 1) {
          return [weather[0], functions.random(1, 3)];
        } else {
          return [weather[0], weather[1]];
        }
      }
    } else if (weather[0] >= 2 && weather[0] <= 4) {
      const weatherRoll = functions.random(1, 10);
      if (weatherRoll <= 1) {
        return [5, weather[1]];
      } else if (weatherRoll <= 3) {
        return [functions.random(0, 1), functions.random(1, 2)];
      } else if (weatherRoll <= 6) {
        return [functions.random(2, 4), weather[1]];
      } else {
        return [weather[0], weather[1]];
      }
    } else {
      const weatherRoll = functions.random(1, 10);
      if (weatherRoll <= 3) {
        return [functions.random(2, 4), weather[1]];
      } else {
        return [weather[0], weather[1]];
      }
    }
  }
  function getRandomCatchTime() {
    return functions.random(data.constant.minCatchSpeed[data.gameState.dataSaver.catchSpeedLevel], data.constant.maxCatchSpeed[data.gameState.dataSaver.catchSpeedLevel]);
  }
  function getRandomIncome(multiplier = 1) {
    return functions.random(multiplier * data.constant.minIncome[data.gameState.dataSaver.incomeLevel], multiplier * data.constant.maxIncome[data.gameState.dataSaver.incomeLevel]);
  }
  function getFishType() {
    let fishTypeRoll = functions.random(1, 1e4);
    for (let i = 0; i <= 6; i++) {
      fishTypeRoll -= data.constant.fishOddsByRodLevel[data.gameState.dataSaver.rodLevel][i];
      if (fishTypeRoll <= 0) {
        return i;
      }
    }
    return 0;
  }
  async function getFish(isBigFish, fishType) {
    await functions.clear();
    if (data.gameState.dataSaver.hunger <= 2) {
      await functions.printa(lang.current.fishing.youCaughtA + fishColor[fishType] + lang.current.fishing.fishName[fishType] + (isBigFish ? lang.current.fishing.big : "") + lang.current.fishing.fish + "\x1B[m, " + lang.current.fishing.eaten);
      data.gameState.dataSaver.hunger += fishType + 3;
      return;
    }
    const price = getRandomIncome((isBigFish ? 2 : 1) * data.constant.fishValueMultipliers[fishType]);
    if (fishType === 4 && isBigFish) {
      await functions.printa(lang.current.fishing.youCaughtA + fishColor[fishType] + lang.current.fishing.egg + ", " + lang.current.fishing.worth + "$" + price);
    } else {
      await functions.printa(lang.current.fishing.youCaughtA + fishColor[fishType] + lang.current.fishing.fish + (isBigFish ? lang.current.fishing.bf : "") + lang.current.fishing.fishName[fishType] + ", " + lang.current.fishing.worth + "$" + price);
    }
    fishInPond[fishType].push(10);
    data.gameState.dataSaver.totalFishCaught++;
  }
  let lastWaitingMinTime = 0;
  let lastWaitingMaxTime = 0;
  let lastWaitingStatus = 0;
  async function draw(minWaitingTime = 0, maxWaitingTime = 0) {
    const changeCompactMode = (await functions.getch2s()).includes("e");
    if (changeCompactMode) {
      data.gameState.dataSaver.compactMode = !data.gameState.dataSaver.compactMode;
    }
    let weatherChanged = false, precipitationPointsChanged = false;
    const now = Math.floor(Date.now() / 1e3);
    while (now - lastDrawTime > 10) {
      const newWeather = changeWeather(currentWeather);
      if (newWeather[0] !== currentWeather[0] || newWeather[1] !== currentWeather[1]) {
        weatherChanged = true;
      }
      currentWeather = newWeather;
      if (currentWeather[0] <= 1) {
        lastPrecipitation = currentWeather[0];
      }
      if (now - lastDrawTime > 100) {
        lastDrawTime = now - 100;
      }
      lastDrawTime += 10;
    }
    let needClear = changeCompactMode;
    if (lastWaitingMinTime !== minWaitingTime || lastWaitingMaxTime !== maxWaitingTime) {
      lastWaitingMinTime = minWaitingTime;
      lastWaitingMaxTime = maxWaitingTime;
      weatherChanged = true;
      needClear = true;
    }
    if (lastWaitingStatus !== currentWaitingStatus) {
      lastWaitingStatus = currentWaitingStatus;
      weatherChanged = true;
      needClear = true;
    }
    const stringConsoleSize = data.gameState.consoleSize.rows + " " + data.gameState.consoleSize.cols;
    if (consoleSizeLastTick !== stringConsoleSize) {
      consoleSizeLastTick = stringConsoleSize;
      needClear = true;
    }
    while (timeUsedInGame >= 0.2) {
      timeUsedInGame -= 0.2;
      for (let i = precipitationPoints.length - 1; i >= 0; i--) {
        precipitationPoints[i][0] += 1;
        precipitationPointsChanged = true;
        if (precipitationPoints[i][0] > 10) {
          [precipitationPoints[i], precipitationPoints[precipitationPoints.length - 1]] = [precipitationPoints[precipitationPoints.length - 1], precipitationPoints[i]];
          precipitationPoints.pop();
        }
      }
      if (data.constant.precipitationDensityByIntensity[currentWeather[1]]) {
        precipitationPointsChanged = true;
        precipitationPoints.push([0, functions.random(0, 43)]);
      }
      for (let i = 1; i <= data.constant.precipitationDensityByIntensity[currentWeather[1]] / 6 - 1 && precipitationPoints.length < data.constant.precipitationDensityByIntensity[currentWeather[1]]; i++) {
        if (precipitationPoints.length < data.constant.precipitationDensityByIntensity[currentWeather[1]] && functions.random(1, 2) <= 1) {
          precipitationPointsChanged = true;
          precipitationPoints.push([0, functions.random(0, 43)]);
        }
      }
    }
    let start = 0;
    const requiredRows = 21, requiredCols = 44;
    const notEnoughRows = data.gameState.consoleSize.rows < requiredRows, notEnoughCols = data.gameState.consoleSize.cols < requiredCols;
    const stringPaint = paint.map((row) => row.join("")).join("\n");
    if (paintLastTick !== stringPaint) {
      precipitationPointsChanged = true;
      paintLastTick = stringPaint;
    }
    if (data.gameState.dataSaver.compactMode || notEnoughRows || notEnoughCols) {
      if (needClear) {
        await functions.write("\x1Bc\x1B[?25l");
      } else if (data.gameState.dataSaver.compactMode || weatherChanged) {
        await functions.write("\x1B[H");
      } else {
        return;
      }
      if (!data.gameState.dataSaver.compactMode) {
        if (notEnoughRows) {
          await functions.write(lang.current.fishing.notEnoughRows + " " + requiredRows + " " + lang.current.fishing.rows + "\n");
          await functions.write(lang.current.fishing.currentSize + ": " + data.gameState.consoleSize.rows + " " + lang.current.fishing.rows + "\n");
        }
        if (notEnoughCols) {
          await functions.write(lang.current.fishing.notEnoughCols + " " + requiredCols + " " + lang.current.fishing.cols + "\n");
          await functions.write(lang.current.fishing.currentSize + ": " + data.gameState.consoleSize.cols + " " + lang.current.fishing.cols + "\n");
        }
      }
    } else {
      if (needClear) {
        await functions.write("\x1Bc\x1B[?25l");
      } else if (weatherChanged || precipitationPointsChanged) {
        await functions.write("\x1B[H");
      } else {
        return;
      }
      if (currentWeather[0] >= 2 && currentWeather[0] <= 4) {
        start = 4;
        for (let i = 0; i < 4; i++) {
          await functions.write(weatherPaintTemplate[currentWeather[0] - 2][i] + "\n");
        }
      }
      for (let i = start; i < 15; i++) {
        for (let j = 0; j < 44; j++) {
          let b = false;
          for (const p of precipitationPoints) {
            if (p[0] === i && p[1] === j) {
              b = true;
              break;
            }
          }
          if (paint[i][j] === " " && b) {
            await functions.write("\x1B[m" + precipitationColor[lastPrecipitation] + precipitationSymbol[lastPrecipitation]);
          } else {
            await functions.write("\x1B[m" + color[i][j] + paint[i][j]);
          }
        }
        await functions.write("\n");
      }
    }
    await functions.write(lang.current.fishing.currentStatus + ": " + lang.current.fishing.waitingStatus[currentWaitingStatus] + "\n");
    await functions.write(lang.current.fishing.totalFishCaught + ": " + data.gameState.dataSaver.totalFishCaught + "\n");
    await functions.write(lang.current.fishing.currentWeather + ": " + lang.current.fishing.rainSize[currentWeather[1]] + lang.current.fishing.weatherNames[currentWeather[0]] + "\n");
    if (maxWaitingTime) {
      if (minWaitingTime) {
        await functions.write(lang.current.fishing.remainingTime + ": " + minWaitingTime / 2 + " min ~ " + maxWaitingTime / 2 + " min\n");
      } else {
        await functions.write(lang.current.fishing.remainingTime + ": < " + maxWaitingTime / 2 + " min\n");
      }
    }
    await functions.write((data.gameState.dataSaver.compactMode ? lang.current.fishing.exitCompactMode : lang.current.fishing.enterCompactMode) + "\n");
  }
  async function slep(time) {
    time = Math.round(time * 100) / 100;
    if (time < 0.01) {
      time = 0.01;
    }
    while (time > 0.1) {
      await functions.sleep(0.1);
      await draw();
      time -= 0.1;
      timeUsedInGame += 0.1;
    }
    await functions.sleep(time);
    await draw();
    timeUsedInGame += time;
  }
  async function wait(time) {
    time = Math.round(time * 100) / 100;
    let minWaitingTime = data.constant.minCatchSpeed[data.gameState.dataSaver.catchSpeedLevel] * 10, maxWaitingTime = data.constant.maxCatchSpeed[data.gameState.dataSaver.catchSpeedLevel] * 10;
    if (time && time < 0.01) {
      time = 0.01;
    }
    while (time > 0.1) {
      await functions.sleep(0.1);
      if (minWaitingTime > 0) {
        minWaitingTime -= 1;
      }
      if (maxWaitingTime > 10) {
        maxWaitingTime -= 1;
      }
      time -= 0.1;
      timeUsedInGame += 0.1;
      await draw(Math.floor((minWaitingTime - 10) / 300), Math.ceil(Math.max((maxWaitingTime + 290) / 300, 1)));
    }
    if (time) {
      await functions.sleep(time);
      await draw(Math.floor((minWaitingTime - 10) / 300), Math.ceil(Math.max((maxWaitingTime + 290) / 300, 1)));
    }
    timeUsedInGame += time;
  }
  async function fishingStep2(isBigFish, fishType) {
    const speedMultiplierByHunger = data.gameState.dataSaver.hunger < 5 ? 3 : data.gameState.dataSaver.hunger < 10 ? 2 : data.gameState.dataSaver.hunger < 30 ? 1 : data.gameState.dataSaver.hunger < 35 ? 0.8 : 0.5;
    const bigFishMultiplier = isBigFish ? 2 : 1;
    await functions.write("\x1B[?25l");
    color[11][18] = "\x1B[1;34m";
    paint[11][18] = "~";
    color[10][19] = fishColor[fishType];
    paint[11][19] = "^";
    paint[10][19] = "O";
    await slep(0.5 * speedMultiplierByHunger * bigFishMultiplier / data.gameState.dataSaver.actionSpeedMultiplier);
    color[11][19] = "\x1B[1;34m";
    paint[11][19] = "~";
    color[9][19] = fishColor[fishType];
    paint[10][19] = "^";
    paint[9][19] = "O";
    await slep(0.5 * speedMultiplierByHunger * bigFishMultiplier / data.gameState.dataSaver.actionSpeedMultiplier);
    for (let i = 8; i >= 5; i--) {
      color[i + 2][19] = "";
      paint[i + 2][19] = " ";
      color[i][19] = fishColor[fishType];
      paint[i + 1][19] = "^";
      paint[i][19] = "O";
      await slep(0.5 * speedMultiplierByHunger * bigFishMultiplier / data.gameState.dataSaver.actionSpeedMultiplier);
    }
    paint[9][24] = paint[8][24] = paint[7][24] = paint[6][24] = "|";
    paint[8][23] = paint[7][22] = paint[6][21] = paint[5][20] = paint[5][19] = paint[6][19] = " ";
    color[5][19] = color[6][19] = "";
    paint[5][23] = ">";
    paint[5][24] = "O";
    color[5][23] = color[5][24] = fishColor[fishType];
    await slep(0.5 * speedMultiplierByHunger * bigFishMultiplier / data.gameState.dataSaver.actionSpeedMultiplier);
    paint[9][26] = "V";
    paint[8][24] = paint[7][24] = paint[6][24] = paint[5][23] = paint[5][24] = " ";
    color[5][23] = color[5][24] = "";
    paint[9][26] = paint[8][26] = paint[7][26] = paint[6][26] = "|";
    paint[9][24] = "/";
    paint[5][25] = ">";
    paint[5][26] = "O";
    color[5][25] = color[5][26] = fishColor[fishType];
    await slep(0.5 * speedMultiplierByHunger * bigFishMultiplier / data.gameState.dataSaver.actionSpeedMultiplier);
    paint[9][26] = paint[8][27] = paint[7][28] = paint[6][29] = "/";
    color[5][25] = color[5][26] = "";
    paint[8][26] = paint[7][26] = paint[6][26] = paint[5][25] = paint[5][26] = " ";
    paint[5][29] = ">";
    paint[5][30] = "O";
    color[5][29] = color[5][30] = fishColor[fishType];
    await slep(0.5 * speedMultiplierByHunger * bigFishMultiplier / data.gameState.dataSaver.actionSpeedMultiplier);
    paint[8][27] = paint[7][28] = paint[6][29] = paint[5][29] = paint[5][30] = " ";
    paint[9][26] = "\\";
    paint[9][27] = paint[9][28] = paint[9][29] = paint[9][30] = paint[9][31] = paint[9][32] = paint[9][33] = paint[9][34] = "-";
    paint[8][35] = "V";
    paint[9][35] = "O";
    color[9][35] = color[8][35] = fishColor[fishType];
    color[5][29] = color[5][30] = "";
    await slep(0.5 * speedMultiplierByHunger * bigFishMultiplier / data.gameState.dataSaver.actionSpeedMultiplier);
    paint[10][35] = "O";
    paint[8][35] = " ";
    paint[9][35] = "V";
    color[10][35] = fishColor[fishType];
    color[8][35] = "";
    await slep(0.5 * bigFishMultiplier / data.gameState.dataSaver.actionSpeedMultiplier);
    paint[11][34] = "\\";
    paint[11][36] = "/";
    for (let i = 11; i <= 12; i++) {
      paint[i][35] = "O";
      paint[i - 2][35] = " ";
      paint[i - 1][35] = "V";
      color[i][35] = fishColor[fishType];
      color[i - 2][35] = "";
      await slep(0.5 * bigFishMultiplier / data.gameState.dataSaver.actionSpeedMultiplier);
    }
    paint[11][34] = paint[11][35] = paint[11][36] = "~";
    paint[13][35] = "O";
    paint[12][35] = "V";
    color[13][35] = fishColor[fishType];
    color[11][35] = "\x1B[1;34m";
    await slep(0.5 * bigFishMultiplier / data.gameState.dataSaver.actionSpeedMultiplier);
    paint[13][36] = "O";
    paint[12][35] = " ";
    paint[13][35] = ">";
    color[13][36] = fishColor[fishType];
    color[12][35] = "";
    await slep(0.5 * bigFishMultiplier / data.gameState.dataSaver.actionSpeedMultiplier);
    for (let i = 37; i <= 38; i++) {
      paint[13][i] = "O";
      paint[13][i - 2] = " ";
      paint[13][i - 1] = ">";
      color[13][i] = fishColor[fishType];
      color[13][i - 2] = "";
      await slep(0.5 * bigFishMultiplier / data.gameState.dataSaver.actionSpeedMultiplier);
    }
    paint[13][38] = paint[13][37] = " ";
    color[13][38] = color[13][37] = "";
    await functions.write("\x1B[?25h");
    await getFish(isBigFish, fishType);
  }
  async function fishingStep2Slip(isBigFish, fishType) {
    const speedMultiplierByHunger = data.gameState.dataSaver.hunger < 5 ? 3 : data.gameState.dataSaver.hunger < 10 ? 2 : data.gameState.dataSaver.hunger < 30 ? 1 : data.gameState.dataSaver.hunger < 35 ? 0.8 : 0.5;
    const bigFishMultiplier = isBigFish ? 2 : 1;
    await functions.write("\x1B[?25l");
    color[11][18] = "\x1B[1;34m";
    paint[11][18] = "~";
    color[10][19] = fishColor[fishType];
    paint[11][19] = "^";
    paint[10][19] = "O";
    await slep(0.3 * speedMultiplierByHunger * bigFishMultiplier / data.gameState.dataSaver.actionSpeedMultiplier);
    currentWaitingStatus = 4;
    color[11][19] = "\x1B[1;34m";
    paint[11][19] = "~";
    color[10][19] = "";
    paint[10][19] = " ";
    paint[10][20] = "^";
    paint[9][19] = "O";
    color[10][20] = color[9][19] = fishColor[fishType];
    await slep(0.3 * speedMultiplierByHunger * bigFishMultiplier / data.gameState.dataSaver.actionSpeedMultiplier);
    paint[10][20] = paint[9][19] = " ";
    color[10][20] = color[9][19] = "";
    paint[9][18] = "^";
    paint[8][19] = "O";
    color[9][18] = color[8][19] = fishColor[fishType];
    await slep(0.3 * speedMultiplierByHunger * bigFishMultiplier / data.gameState.dataSaver.actionSpeedMultiplier);
    paint[9][18] = paint[8][19] = " ";
    color[9][18] = color[8][19] = "";
    paint[8][20] = "^";
    paint[7][19] = "O";
    color[8][20] = color[7][19] = fishColor[fishType];
    await slep(0.3 * speedMultiplierByHunger * bigFishMultiplier / data.gameState.dataSaver.actionSpeedMultiplier);
    paint[6][19] = "j";
    color[8][20] = "";
    paint[8][20] = " ";
    color[7][20] = fishColor[fishType];
    paint[7][20] = "<";
    await slep(0.3 * speedMultiplierByHunger * bigFishMultiplier / data.gameState.dataSaver.actionSpeedMultiplier);
    color[7][20] = "";
    paint[5][19] = "j";
    paint[7][20] = paint[6][19] = " ";
    color[8][19] = fishColor[fishType];
    paint[7][19] = "V";
    paint[8][19] = "O";
    await slep(0.5 * bigFishMultiplier / data.gameState.dataSaver.actionSpeedMultiplier);
    color[7][19] = "";
    color[9][19] = fishColor[fishType];
    paint[7][19] = " ";
    paint[8][19] = "V";
    paint[9][19] = "O";
    await slep(0.5 * bigFishMultiplier / data.gameState.dataSaver.actionSpeedMultiplier);
    color[8][19] = "";
    color[10][19] = fishColor[fishType];
    paint[8][19] = " ";
    paint[9][19] = "V";
    paint[10][19] = "O";
    await slep(0.5 * bigFishMultiplier / data.gameState.dataSaver.actionSpeedMultiplier);
    paint[11][18] = "\\";
    paint[11][20] = "/";
    for (let i = 11; i <= 12; i++) {
      color[i - 2][19] = "";
      color[i][19] = fishColor[fishType];
      paint[i - 2][19] = " ";
      paint[i - 1][19] = "V";
      paint[i][19] = "O";
      await slep(0.5 / bigFishMultiplier / data.gameState.dataSaver.actionSpeedMultiplier);
    }
    paint[11][18] = paint[11][20] = paint[11][19] = "~";
    color[11][19] = "\x1B[1;34m";
    color[13][19] = fishColor[fishType];
    paint[12][19] = "V";
    paint[13][19] = "O";
    await slep(0.5 / bigFishMultiplier / data.gameState.dataSaver.actionSpeedMultiplier);
    paint[12][19] = " ";
    color[12][19] = "";
    color[14][19] = fishColor[fishType];
    paint[13][19] = "V";
    paint[14][19] = "O";
    await slep(0.5 / bigFishMultiplier / data.gameState.dataSaver.actionSpeedMultiplier);
    paint[13][19] = " ";
    color[13][19] = "";
    paint[14][19] = "V";
    await slep(0.5 / bigFishMultiplier / data.gameState.dataSaver.actionSpeedMultiplier);
    paint[14][19] = " ";
    color[14][19] = "";
    await slep(0.5 / bigFishMultiplier / data.gameState.dataSaver.actionSpeedMultiplier);
    paint[8][23] = paint[7][22] = paint[6][21] = paint[5][20] = paint[5][19] = " ";
    paint[9][24] = "/";
    await functions.write("\x1B[?25h");
  }
  async function fishingStep1(isBigFish, fishType) {
    const speedMultiplierByHunger = data.gameState.dataSaver.hunger < 5 ? 3 : data.gameState.dataSaver.hunger < 10 ? 2 : data.gameState.dataSaver.hunger < 30 ? 1 : data.gameState.dataSaver.hunger < 35 ? 0.8 : 0.5;
    const bigFishMultiplier = isBigFish ? 2 : 1;
    paintLastTick = "";
    consoleSizeLastTick = "";
    lastDrawTime = Math.floor(Date.now() / 1e3);
    currentWaitingStatus = 0;
    await functions.write("\x1B[?25l");
    for (let i = 0; i < 15; i++) {
      for (let j = 0; j < 44; j++) {
        color[i][j] = "";
        paint[i][j] = paintTemplate[i][j];
      }
    }
    for (let i = 0; i <= 22; i++) {
      color[11][i] = "\x1B[1;34m";
    }
    for (let i = 31; i <= 42; i++) {
      color[11][i] = "\x1B[1;34m";
    }
    if (data.gameState.fishMan) {
      paint[8][25] = " ";
      paint[9][25] = "O";
      color[9][25] = color[10][24] = color[10][26] = fishColor[6];
      data.gameState.fishMan = false;
    }
    await slep(0.5 * speedMultiplierByHunger / data.gameState.dataSaver.actionSpeedMultiplier);
    for (let i = 27; i <= 34; i++) {
      paint[9][i] = " ";
    }
    paint[9][26] = "V";
    paint[8][27] = paint[7][28] = paint[6][29] = paint[5][30] = "/";
    await slep(0.5 * speedMultiplierByHunger / data.gameState.dataSaver.actionSpeedMultiplier);
    paint[8][27] = paint[7][28] = paint[6][29] = paint[5][30] = " ";
    paint[9][26] = paint[8][26] = paint[7][26] = paint[6][26] = paint[5][26] = "|";
    await slep(0.5 * speedMultiplierByHunger / data.gameState.dataSaver.actionSpeedMultiplier);
    paint[9][26] = "\\";
    paint[8][26] = paint[7][26] = paint[6][26] = paint[5][26] = " ";
    paint[9][24] = paint[8][24] = paint[7][24] = paint[6][24] = paint[5][24] = "|";
    await slep(0.5 * speedMultiplierByHunger / data.gameState.dataSaver.actionSpeedMultiplier);
    paint[8][24] = paint[7][24] = paint[6][24] = paint[5][24] = " ";
    paint[9][24] = "V";
    paint[8][23] = paint[7][22] = paint[6][21] = paint[5][20] = "\\";
    await slep(0.5 * speedMultiplierByHunger / data.gameState.dataSaver.actionSpeedMultiplier);
    paint[5][19] = "j";
    await slep(0.5 * speedMultiplierByHunger / data.gameState.dataSaver.actionSpeedMultiplier);
    for (let i = 6; i <= 10; i++) {
      paint[i - 1][19] = "|";
      paint[i][19] = "j";
      await slep(0.5 * speedMultiplierByHunger / data.gameState.dataSaver.actionSpeedMultiplier);
    }
    paint[10][19] = "|";
    paint[11][19] = "j";
    color[11][19] = "";
    let catchTime = getRandomCatchTime();
    if (currentWeather[0] === 0) {
      catchTime = Math.max(0, catchTime - 5 * currentWeather[1]);
    } else if (currentWeather[0] === 1) {
      catchTime = catchTime + 5 * currentWeather[1];
    }
    currentWaitingStatus = 1;
    await wait(catchTime);
    currentWaitingStatus = 2;
    color[11][0] = fishColor[fishType];
    paint[11][0] = "O";
    await slep(0.5 * bigFishMultiplier / data.gameState.dataSaver.actionSpeedMultiplier);
    color[11][1] = fishColor[fishType];
    paint[11][0] = ">";
    paint[11][1] = "O";
    await slep(0.5 * bigFishMultiplier / data.gameState.dataSaver.actionSpeedMultiplier);
    for (let i = 2; i <= 19; i++) {
      if (i === 19) {
        currentWaitingStatus = 3;
      }
      color[11][i - 2] = "\x1B[1;34m";
      paint[11][i - 2] = "~";
      color[11][i] = fishColor[fishType];
      paint[11][i - 1] = ">";
      paint[11][i] = "O";
      await slep(0.5 * bigFishMultiplier / data.gameState.dataSaver.actionSpeedMultiplier);
    }
    await functions.write("\x1B[?25h");
    const slipOff = functions.random(1, 100) <= data.gameState.dataSaver.slipOffChance + (currentWeather[0] === 5) * 10;
    if (slipOff) {
      await fishingStep2Slip(isBigFish, fishType);
    } else {
      await fishingStep2(isBigFish, fishType);
    }
    precipitationPoints.length = 0;
  }
  async function runFishing() {
    let bigFishRoll = functions.random(1, 100) <= data.gameState.dataSaver.bigFishChance;
    if (data.gameState.bigFish) {
      bigFishRoll = true;
      data.gameState.bigFish--;
    }
    let fishType = getFishType();
    if (data.gameState.diamondFish) {
      fishType = 6;
      data.gameState.diamondFish--;
    }
    await fishingStep1(bigFishRoll, fishType);
  }
  function getFreshnessMultiplier(freshness) {
    if (freshness >= 8) {
      return 1.25;
    } else if (freshness <= 2) {
      return 0.8;
    } else {
      return 1;
    }
  }
  async function makeFishingRod() {
    await functions.clear();
    await functions.print(lang.current.fishing.makeFishingRod);
    await functions.print(lang.current.fishing.currentFishingRod + lang.current.fishing.fishName[data.gameState.dataSaver.rodLevel] + lang.current.fishing.fishingRod);
    let hasFishInPond = Array(8).fill(false);
    let fishInPondChoices = "";
    for (let i = 0; i <= 6; i++) {
      hasFishInPond[i] = fishInPond[i].length !== 0;
      if (hasFishInPond[i]) {
        fishInPondChoices += i + ". " + lang.current.fishing.fishName[i] + lang.current.fishing.fishingRod + ", ";
      }
    }
    hasFishInPond[7] = true;
    if (fishInPondChoices.length === 0) {
      await functions.print(lang.current.fishing.none);
      return;
    }
    fishInPondChoices += lang.current.functions.exit;
    await functions.print(fishInPondChoices);
    let selectedFishInPondIndex;
    do {
      selectedFishInPondIndex = Number(await functions.getch());
    } while (!Number.isInteger(selectedFishInPondIndex) || selectedFishInPondIndex < 0 || selectedFishInPondIndex > 7 || !hasFishInPond[selectedFishInPondIndex]);
    if (selectedFishInPondIndex === 7) {
      return;
    }
    fishInPond[selectedFishInPondIndex].length = 0;
    data.gameState.dataSaver.rodLevel = selectedFishInPondIndex;
  }
  async function makeFood() {
    while (true) {
      await functions.clear();
      await functions.print(lang.current.fishing.rawFish);
      await functions.print(lang.current.fishing.currentAmount);
      let hasFishInPond = Array(8).fill(false);
      let fishInPondChoices = "";
      for (let i = 0; i <= 6; i++) {
        hasFishInPond[i] = fishInPond[i].length !== 0;
        if (hasFishInPond[i]) {
          fishInPondChoices += i + ". " + lang.current.fishing.fishName[i] + lang.current.fishing.fish + ", ";
        }
      }
      hasFishInPond[7] = true;
      if (fishInPondChoices.length === 0) {
        await functions.print(lang.current.fishing.none);
        await functions.sleep(0.5);
        return;
      }
      fishInPondChoices += lang.current.functions.exit;
      for (let i = 1; i <= 6; i++) {
        await functions.write(fishColor[i] + lang.current.fishing.fishName[i] + lang.current.fishing.fish + "\x1B[m\n");
        if (fishInPond[i].length) {
          await functions.write("    " + lang.current.fishing.fishpond + ": " + fishInPond[i].length + lang.current.fishing.fishNumber + "\n");
        }
        if (data.gameState.dataSaver.foodFish[i][0]) {
          await functions.write("    " + lang.current.fishing.rawFish + ": " + data.gameState.dataSaver.foodFish[i][0] + lang.current.fishing.fishNumber + "\n");
        }
        if (data.gameState.dataSaver.foodFish[i][1]) {
          await functions.write("    " + lang.current.fishing.roastedFish + ": " + data.gameState.dataSaver.foodFish[i][1] + lang.current.fishing.fishNumber + "\n");
        }
        if (fishInPond[i].length === 0 && !data.gameState.dataSaver.foodFish[i][0] && !data.gameState.dataSaver.foodFish[i][1]) {
          await functions.write("    " + lang.current.fishing.none + "\n");
        }
      }
      await functions.write("\n");
      await functions.print(fishInPondChoices);
      let selectedFishInPondIndex;
      do {
        selectedFishInPondIndex = Number(await functions.getch());
      } while (!Number.isInteger(selectedFishInPondIndex) || selectedFishInPondIndex < 0 || selectedFishInPondIndex > 7 || !hasFishInPond[selectedFishInPondIndex]);
      if (selectedFishInPondIndex === 7) {
        return;
      }
      if (fishInPond[selectedFishInPondIndex].length === 0) {
        continue;
      }
      fishInPond[selectedFishInPondIndex].pop();
      data.gameState.dataSaver.foodFish[selectedFishInPondIndex][0]++;
    }
  }
  async function roastFish() {
    await functions.clear();
    await functions.print(lang.current.fishing.roastedFish);
    await functions.print(lang.current.fishing.currentAmount + ": ");
    let hasFishInPond = Array(8).fill(false);
    let fishInPondChoices = "";
    for (let i = 0; i <= 6; i++) {
      hasFishInPond[i] = Boolean(data.gameState.dataSaver.foodFish[i][0]);
      if (hasFishInPond[i]) {
        fishInPondChoices += i + ". " + lang.current.fishing.fishName[i] + lang.current.fishing.fish + ", ";
      }
    }
    hasFishInPond[7] = true;
    if (fishInPondChoices.length === 0) {
      await functions.print(lang.current.fishing.none);
      await functions.sleep(0.5);
      return;
    }
    fishInPondChoices += lang.current.functions.exit;
    for (let i = 1; i <= 6; i++) {
      await functions.write(fishColor[i] + lang.current.fishing.fishName[i] + lang.current.fishing.fish + "\x1B[m\n");
      if (fishInPond[i].length) {
        await functions.write("    " + lang.current.fishing.fishpond + ": " + fishInPond[i].length + lang.current.fishing.fishNumber + "\n");
      }
      if (data.gameState.dataSaver.foodFish[i][0]) {
        await functions.write("    " + lang.current.fishing.rawFish + ": " + data.gameState.dataSaver.foodFish[i][0] + lang.current.fishing.fishNumber + "\n");
      }
      if (data.gameState.dataSaver.foodFish[i][1]) {
        await functions.write("    " + lang.current.fishing.roastedFish + ": " + data.gameState.dataSaver.foodFish[i][1] + lang.current.fishing.fishNumber + "\n");
      }
      if (fishInPond[i].length === 0 && !data.gameState.dataSaver.foodFish[i][0] && !data.gameState.dataSaver.foodFish[i][1]) {
        await functions.write("    " + lang.current.fishing.none + "\n");
      }
    }
    await functions.write("\n");
    await functions.print(fishInPondChoices);
    let selectedFishInPondIndex;
    do {
      selectedFishInPondIndex = Number(await functions.getch());
    } while (!Number.isInteger(selectedFishInPondIndex) || selectedFishInPondIndex < 0 || selectedFishInPondIndex > 7 || !hasFishInPond[selectedFishInPondIndex]);
    if (selectedFishInPondIndex === 7 || !data.gameState.dataSaver.foodFish[selectedFishInPondIndex][0]) {
      return;
    }
    const minCount = 0, maxCount = data.gameState.dataSaver.foodFish[selectedFishInPondIndex][0];
    let count = 0;
    while (true) {
      await functions.clear();
      await functions.write(lang.current.fishing.makeFoodAction + "\n" + lang.current.fishing.makeRoastedFish + ": " + fishColor[selectedFishInPondIndex] + lang.current.fishing.fishName[selectedFishInPondIndex] + lang.current.fishing.fish + "\x1B[m\n");
      await functions.write((count === minCount ? "\x1B[1;31m" : "\x1B[1m") + " < \x1B[m" + count + lang.current.fishing.fishNumber + (count === maxCount ? "\x1B[1;31m" : "\x1B[1m") + " > \x1B[m\n");
      const input = await functions.getch();
      if (input === "a" || input === "A") {
        count--;
        if (count < minCount) {
          count = minCount;
        }
      } else if (input === "d" || input === "D") {
        count++;
        if (count > maxCount) {
          count = maxCount;
        }
      } else if (input === "\r") {
        if (count > data.gameState.dataSaver.foodFish[selectedFishInPondIndex][0] || count < 0 || !data.gameState.dataSaver.ovenCount) {
          await functions.clear();
          return;
        }
        data.gameState.dataSaver.foodFish[selectedFishInPondIndex][0] -= count;
        data.gameState.dataSaver.foodFish[selectedFishInPondIndex][1] += count;
        await functions.clear();
        const roastingTime = Math.ceil(count / data.gameState.dataSaver.ovenCount);
        for (let i = 0; i < roastingTime; i++) {
          for (let j = 0; j < 20; j++) {
            await functions.clear();
            await functions.write(lang.current.fishing.roasting + "\n");
            const currentRoastingTime = i * 20 + j;
            let done = Math.floor(currentRoastingTime / roastingTime * 3);
            let d2 = done % 2;
            done = Math.floor(done / 2);
            for (let k = 1; k <= done; k++) {
              await functions.write("\x1B[32;1m=\x1B[m");
            }
            if (done < 30) {
              await functions.write(d2 ? "\x1B[32;1m-\x1B[m" : "\x1B[31;1m=\x1B[m");
            }
            for (let k = done + 1; k < 30; k++) {
              await functions.write("\x1B[31;1m=\x1B[m");
            }
            await functions.write("\n");
            await functions.write(i * data.gameState.dataSaver.ovenCount + "/" + count + lang.current.fishing.done + "\n");
            await functions.sleep(0.5);
          }
        }
        await functions.clear();
        await functions.write(lang.current.fishing.done + "\n");
        for (let k = 0; k < 30; k++) {
          await functions.write("\x1B[32;1m=\x1B[m");
        }
        await functions.write("\n");
        await functions.write(count + "/" + count + lang.current.fishing.done + "\n");
        await functions.sleep();
        return;
      } else if (input === "\x7F") {
        await functions.clear();
        return;
      }
    }
  }
  async function eatFish() {
    while (true) {
      await functions.clear();
      await functions.print(lang.current.fishing.eatRawFish);
      await functions.printnl(lang.current.fishing.currentHunger + ": ");
      await functions.write((data.gameState.dataSaver.hunger < 10 ? "\x1B[31;1m" : data.gameState.dataSaver.hunger < 30 ? "" : data.gameState.dataSaver.hunger < 35 ? "\x1B[32m" : "\x1B[32;1m") + data.gameState.dataSaver.hunger + "\x1B[m\n");
      await functions.print(lang.current.fishing.currentAmount + ": ");
      let hasFishInPond = Array(8).fill(false);
      let fishInPondChoices = "";
      for (let i = 0; i <= 6; i++) {
        hasFishInPond[i] = Boolean(data.gameState.dataSaver.foodFish[i][0]);
        if (hasFishInPond[i]) {
          fishInPondChoices += i + ". " + lang.current.fishing.fishName[i] + lang.current.fishing.rawFish + ", ";
        }
      }
      hasFishInPond[7] = true;
      if (fishInPondChoices.length === 0) {
        await functions.print(lang.current.fishing.none);
        await functions.sleep(0.5);
        return;
      }
      fishInPondChoices += lang.current.functions.exit;
      for (let i = 1; i <= 6; i++) {
        await functions.write(fishColor[i] + lang.current.fishing.fishName[i] + lang.current.fishing.fish + "\x1B[m\n");
        if (data.gameState.dataSaver.foodFish[i][0]) {
          await functions.write("    " + lang.current.fishing.rawFish + ": " + data.gameState.dataSaver.foodFish[i][0] + lang.current.fishing.fishNumber + " + " + (i + 3) + "\n");
        }
        if (!data.gameState.dataSaver.foodFish[i][0] && !data.gameState.dataSaver.foodFish[i][1]) {
          await functions.write("    " + lang.current.fishing.none + "\n");
        }
      }
      await functions.write("\n");
      await functions.print(fishInPondChoices);
      let selectedFishInPondIndex;
      do {
        selectedFishInPondIndex = Number(await functions.getch());
      } while (!Number.isInteger(selectedFishInPondIndex) || selectedFishInPondIndex < 0 || selectedFishInPondIndex > 7 || !hasFishInPond[selectedFishInPondIndex]);
      if (selectedFishInPondIndex === 7) {
        await functions.sleep(0.5);
        return;
      }
      if (data.gameState.dataSaver.foodFish[selectedFishInPondIndex][0] < 1) {
        await functions.sleep(0.5);
        return;
      }
      data.gameState.dataSaver.foodFish[selectedFishInPondIndex][0]--;
      data.gameState.dataSaver.hunger += selectedFishInPondIndex + 3;
      data.gameState.dataSaver.hunger = Math.min(data.gameState.dataSaver.hunger, 40);
      await functions.sleep(0.5);
    }
  }
  async function eatRoastedFish() {
    while (true) {
      await functions.clear();
      await functions.print(lang.current.fishing.eatRoastedFish);
      await functions.printnl(lang.current.fishing.currentHunger + ": ");
      await functions.write((data.gameState.dataSaver.hunger < 10 ? "\x1B[31;1m" : data.gameState.dataSaver.hunger < 30 ? "" : data.gameState.dataSaver.hunger < 35 ? "\x1B[32m" : "\x1B[32;1m") + data.gameState.dataSaver.hunger + "\x1B[m\n");
      await functions.print(lang.current.fishing.currentAmount + ": ");
      let hasFishInPond = Array(8).fill(false);
      let fishInPondChoices = "";
      for (let i = 0; i <= 6; i++) {
        hasFishInPond[i] = Boolean(data.gameState.dataSaver.foodFish[i][1]);
        if (hasFishInPond[i]) {
          fishInPondChoices += i + ". " + lang.current.fishing.fishName[i] + lang.current.fishing.eatRoastedFish + ", ";
        }
      }
      hasFishInPond[7] = true;
      if (fishInPondChoices.length === 0) {
        await functions.print(lang.current.fishing.none);
        await functions.sleep(0.5);
        return;
      }
      fishInPondChoices += lang.current.functions.exit;
      for (let i = 1; i <= 6; i++) {
        await functions.write(fishColor[i] + lang.current.fishing.fishName[i] + lang.current.fishing.fish + "\x1B[m\n");
        if (data.gameState.dataSaver.foodFish[i][1]) {
          await functions.write("    " + lang.current.fishing.roastedFish + ": " + data.gameState.dataSaver.foodFish[i][1] + lang.current.fishing.fishNumber + " + " + (i + 7) + "\n");
        }
        if (!data.gameState.dataSaver.foodFish[i][0] && !data.gameState.dataSaver.foodFish[i][1]) {
          await functions.write("    " + lang.current.fishing.none + "\n");
        }
      }
      await functions.write("\n");
      await functions.print(fishInPondChoices);
      let selectedFishInPondIndex;
      do {
        selectedFishInPondIndex = Number(await functions.getch());
      } while (!Number.isInteger(selectedFishInPondIndex) || selectedFishInPondIndex < 0 || selectedFishInPondIndex > 7 || !hasFishInPond[selectedFishInPondIndex]);
      if (selectedFishInPondIndex === 7) {
        await functions.sleep(0.5);
        return;
      }
      if (data.gameState.dataSaver.foodFish[selectedFishInPondIndex][1] < 1) {
        return;
      }
      data.gameState.dataSaver.foodFish[selectedFishInPondIndex][1]--;
      data.gameState.dataSaver.hunger += selectedFishInPondIndex + 7;
      data.gameState.dataSaver.hunger = Math.min(data.gameState.dataSaver.hunger, 40);
      await functions.sleep(0.5);
    }
  }
  async function eatMenuNoOven() {
    while (true) {
      await functions.clear();
      await functions.print(functions.listToChoice(lang.current.fishing.noOvenMenu));
      await functions.printnl(lang.current.fishing.currentHunger + ": ");
      await functions.write((data.gameState.dataSaver.hunger < 10 ? "\x1B[31;1m" : data.gameState.dataSaver.hunger < 30 ? "" : data.gameState.dataSaver.hunger < 35 ? "\x1B[32m" : "\x1B[32;1m") + data.gameState.dataSaver.hunger + "\x1B[m\n");
      await functions.print(lang.current.fishing.currentAmount + ": ");
      for (let i = 1; i <= 6; i++) {
        await functions.write(fishColor[i] + lang.current.fishing.fishName[i] + lang.current.fishing.fish + "\x1B[m\n");
        if (fishInPond[i].length) {
          await functions.write("    " + lang.current.fishing.fishpond + ": " + fishInPond[i].length + lang.current.fishing.fishNumber + "\n");
        }
        if (data.gameState.dataSaver.foodFish[i][0]) {
          await functions.write("    " + lang.current.fishing.rawFish + ": " + data.gameState.dataSaver.foodFish[i][0] + lang.current.fishing.fishNumber + "\n");
        }
        if (data.gameState.dataSaver.foodFish[i][1]) {
          await functions.write("    " + lang.current.fishing.roastedFish + ": " + data.gameState.dataSaver.foodFish[i][1] + lang.current.fishing.fishNumber + "\n");
        }
        if (fishInPond[i].length === 0 && !data.gameState.dataSaver.foodFish[i][0] && !data.gameState.dataSaver.foodFish[i][1]) {
          await functions.write("    " + lang.current.fishing.none + "\n");
        }
      }
      while (true) {
        const input = await functions.getch();
        if (input === "1") {
          await makeFood();
          break;
        } else if (input === "2") {
          await eatFish();
          break;
        } else if (input === "3") {
          return;
        }
      }
      await functions.sleep(0.5);
    }
  }
  async function eatMenu() {
    if (!data.gameState.dataSaver.ovenCount) {
      await eatMenuNoOven();
      return;
    }
    while (true) {
      await functions.clear();
      await functions.print(functions.listToChoice(lang.current.fishing.ovenMenu));
      await functions.printnl(lang.current.fishing.currentHunger + ": ");
      await functions.write((data.gameState.dataSaver.hunger < 10 ? "\x1B[31;1m" : data.gameState.dataSaver.hunger < 30 ? "" : data.gameState.dataSaver.hunger < 35 ? "\x1B[32m" : "\x1B[32;1m") + data.gameState.dataSaver.hunger + "\x1B[m\n");
      await functions.print(lang.current.fishing.currentAmount + ": ");
      for (let i = 1; i <= 6; i++) {
        await functions.write(fishColor[i] + lang.current.fishing.fishName[i] + lang.current.fishing.fish + "\x1B[m\n");
        if (fishInPond[i].length) {
          await functions.write("    " + lang.current.fishing.fishpond + ": " + fishInPond[i].length + lang.current.fishing.fishNumber + "\n");
        }
        if (data.gameState.dataSaver.foodFish[i][0]) {
          await functions.write("    " + lang.current.fishing.rawFish + ": " + data.gameState.dataSaver.foodFish[i][0] + lang.current.fishing.fishNumber + "\n");
        }
        if (data.gameState.dataSaver.foodFish[i][1]) {
          await functions.write("    " + lang.current.fishing.roastFish + ": " + data.gameState.dataSaver.foodFish[i][1] + lang.current.fishing.fishNumber + "\n");
        }
        if (fishInPond[i].length === 0 && !data.gameState.dataSaver.foodFish[i][0] && !data.gameState.dataSaver.foodFish[i][1]) {
          await functions.write("    " + lang.current.fishing.none + "\n");
        }
      }
      await functions.write("\n");
      while (true) {
        const input = await functions.getch();
        if (input === "1") {
          await makeFood();
          break;
        } else if (input === "2") {
          await roastFish();
          break;
        } else if (input === "3") {
          await eatFish();
          break;
        } else if (input === "4") {
          await eatRoastedFish();
          break;
        } else if (input === "5") {
          return;
        }
      }
      await functions.sleep(0.5);
    }
  }
  async function run() {
    while (true) {
      await functions.clear();
      await functions.print(functions.listToChoice(lang.current.fishing.mainMenu));
      await functions.printnl(lang.current.fishing.currentHunger + ": ");
      await functions.write((data.gameState.dataSaver.hunger < 10 ? "\x1B[31;1m" : data.gameState.dataSaver.hunger < 30 ? "" : data.gameState.dataSaver.hunger < 35 ? "\x1B[32m" : "\x1B[32;1m") + data.gameState.dataSaver.hunger + "\x1B[m\n");
      await functions.print(lang.current.fishing.currentFishingRod + ": " + lang.current.fishing.fishName[data.gameState.dataSaver.rodLevel] + lang.current.fishing.fishingRod);
      for (let i = 0; i <= 6; i++) {
        await functions.write(fishColor[i] + lang.current.fishing.fishName[i] + lang.current.fishing.fish + "\x1B[m\n");
        for (let j = 0; j < fishInPond[i].length; j++) {
          if (fishInPond[i][j] >= 8) {
            await functions.write("\x1B[1;32m");
          } else if (fishInPond[i][j] <= 2) {
            await functions.write("\x1B[1;31m");
          } else {
            await functions.write("\x1B[1m");
          }
          await functions.write("    " + lang.current.fishing.freshness + ": " + fishInPond[i][j] + "\x1B[m\n");
        }
        if (fishInPond[i].length === 0) {
          await functions.write("    " + lang.current.fishing.none + "\x1B[m\n");
        }
      }
      while (true) {
        const input = await functions.getch();
        if (input === "1") {
          for (let i = 0; i <= 6; i++) {
            for (let j = 0; j < fishInPond[i].length; j++) {
              fishInPond[i][j] -= 1;
              if (fishInPond[i][j] <= 0) {
                if (i !== 0) {
                  fishInPond[i - 1].push(10);
                }
                for (let k = j + 1; k < fishInPond[i].length; k++) {
                  fishInPond[i][k - 1] = fishInPond[i][k];
                }
                fishInPond[i].pop();
                j--;
              }
            }
          }
          await runFishing();
          data.gameState.dataSaver.hunger--;
          break;
        } else if (input === "2") {
          await makeFishingRod();
          await functions.sleep(1);
          break;
        } else if (input === "3") {
          await eatMenu();
          break;
        } else if (input === "4") {
          for (let i = 0; i <= 6; i++) {
            for (let j = 0; j < fishInPond[i].length; j++) {
              data.gameState.dataSaver.money += Math.round(getRandomIncome() * getFreshnessMultiplier(fishInPond[i][j]));
            }
            while (fishInPond[i].length !== 0) {
              fishInPond[i].pop();
            }
          }
          await functions.clear();
          break;
        } else if (input === "5") {
          for (let i = 0; i <= 6; i++) {
            for (let j = 0; j < fishInPond[i].length; j++) {
              data.gameState.dataSaver.money += Math.round(getRandomIncome() * getFreshnessMultiplier(fishInPond[i][j]));
            }
            while (fishInPond[i].length !== 0) {
              fishInPond[i].pop();
            }
          }
          return;
        }
      }
      await functions.sleep(1);
    }
  }
  return run;
}

// source-code/parkour.js
function createParkour(lang, data, functions) {
  let level = 0;
  let x = 0;
  let y = 0;
  let sx = 1;
  let sy = 0;
  const born = deepFreeze([
    [1, 30],
    [33, 30],
    [66, 30],
    [98, 11],
    [42, 14]
  ]);
  const map = Object.freeze(["|     | |   |                                                                                       |", "+---+ +>+   |                                                                                +---   |", "|   | | | +-+          +---+                     --                          -      -      --+   \\  |", "|   | | | |            |   |                    /                                                 | |", "|   | | | |            |   +-------------------+*****Z****Z****Z****Z****Z******Z******Z**********| |", "+^^^+ +^+ +---------+  |   |  finish           +--------------------------------------------------+ |", "|   | | | |         |  |   |     \\             |                                                  | |", "|   | | | |   +---+ |  +---+      \\            |  -   -   -   -   -   -   -   -   -   -   -   -   | |", "|   |   |     |   |        |       \\           |</ \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\    |", "+^^^+--^+-----+---+--------+--------+-----------+-+-+---+---+---+---+---+---+---+---+---+---+---+---+", "|   |   |     |                                                                                 |...|", "|   |   |     |                                                                                 | |.|", "|   |   |     |                                                      |                          | |.|", "+^^^+ +-+  +--+ +-----     ------             |                   +--+      ---                 | |.|", "|   | | |  |  | |                \\        +---+                   |        |***\\                | |.|", "|   | | |  |  | |                 \\       |             ZZ        |        |****+--   -------     |.|", "|     |    |    |                  \\      |                       |        |*****************\\    |.|", "+^^^--+^---+^^--+^^^^^---+          \\     |******ZZ***********Z***|*****ZZ*|******************\\   |.|", "+-----+----+----+--------+-------+---+----+-----------------+-----+--------+-------------------+--+.|", "|                                |                          |     |                               |.|", "|                                |              ---+--+---- |     |                    +---       |.|", "|                                |                 |  |           |                   /           |.|", "|                                |       -------   |  |           |                  /            |.|", "|                         +----+ |                 |           /| |            -----+     |.......|.|", "|                    -----+    | |                 |  +-------+ | |                       |.......|.|", "|                              | +--------                      | |      +----+           |.......|.|", "|             |                | |                              | |     /      \\          |.......|.|", "|        -----+------          | |                              | |    /        \\         |.......|.|", "|             |                | |        -----+                | |   /          \\        |.......|.|", "|             |                |               |                |    /            \\       |.........|", "+-------------+----------------+---------------+----------------+---+--------------+------+---------|"]);
  function cellAt(rowNumber, colNumber) {
    if (rowNumber < 0 || rowNumber >= map.length) {
      return "";
    }
    const row = map[rowNumber];
    if (!row || colNumber < 0 || colNumber >= row.length) {
      return "";
    }
    return row[colNumber];
  }
  function isAirAbove() {
    return cellAt(y - 1, x) === " ";
  }
  function isLavaCell() {
    return cellAt(y, x) === "*";
  }
  function isFinishCell(x2, y2) {
    const c = cellAt(y2 - 1, x2);
    return c === "f" || c === "i" || c === "n" || c === "s" || c === "h";
  }
  function canMoveTo(x2, y2) {
    const c = cellAt(y2 - 1, x2);
    return c === " " || c === ".";
  }
  function getSlideDirection(x2, y2) {
    const c = cellAt(y2 - 1, x2);
    return c === "/" ? 1 : c === "\\" ? -1 : 0;
  }
  async function show() {
    let a = Math.max(x - 30, 0);
    let b = Math.max(y - 5, 0);
    if (a + 59 > 100) {
      a = 100 - 59;
    }
    if (b > 21) {
      b = 21;
    }
    for (let i = b; i < b + 10; i++) {
      for (let j = a; j < a + 60; j++) {
        if (i === y - 1 && j === x) {
          await functions.write("O");
        } else {
          const mapIJ = cellAt(i, j);
          if (mapIJ === ".") {
            await functions.write("\x1B[34;1m\x1B[m");
          } else if (mapIJ === "*") {
            await functions.write("\x1B[31;1m*\x1B[m");
          } else if (mapIJ === "Z") {
            await functions.write("\x1B[32;1mZ\x1B[m");
          } else if (mapIJ === "^") {
            await functions.write("\x1B[33;1m^\x1B[m");
          } else if (mapIJ === ">") {
            await functions.write("\x1B[33;1m>\x1B[m");
          } else if (mapIJ === "<") {
            await functions.write("\x1B[33;1m<\x1B[m");
          } else if (isFinishCell(j, i + 1)) {
            await functions.write("\x1B[33;1m" + mapIJ + "\x1B[m");
          } else {
            await functions.write(mapIJ);
          }
        }
      }
      await functions.write("\n");
    }
  }
  function tryMove(x2, y2) {
    if (x2 <= 0) {
      return;
    }
    if (y2 <= 0) {
      return;
    }
    if (y2 > 31) {
      return;
    }
    if (x2 >= 100) {
      return;
    }
    if (canMoveTo(x2, y2)) {
      x = x2;
      y = y2;
    }
  }
  async function run() {
    if (data.gameState.dataSaver.challengeLevel !== 0) {
      return;
    }
    x = born[level][0];
    y = born[level][1];
    await functions.clear();
    let sinkTimer = 0;
    let jumpCarry = false;
    while (true) {
      if (x <= 0) {
        x = 1;
      }
      if (y <= 0) {
        y = 1;
      }
      await functions.clear();
      if (level + 1 < born.length && x === born[level + 1][0] && y === born[level + 1][1]) {
        level++;
      }
      if (isAirAbove()) {
        sinkTimer = 0;
        await functions.write(lang.current.parkour.jumpTip + "\n");
        await show();
        let shouldJump = false;
        let shouldRespawn = false;
        for (const c of functions.getch2s()) {
          if (c === "\x7F") {
            return;
          }
          if (c === "w" || c === " ") {
            shouldJump = true;
            jumpCarry = true;
          }
          if (c === "r") {
            shouldRespawn = true;
          }
        }
        if (isFinishCell(x, y - 1)) {
          await functions.clear();
          await functions.printa(lang.current.parkour.challengeCompleteReward);
          data.gameState.dataSaver.money += 500;
          data.gameState.dataSaver.challengeLevel = 1;
          return;
        }
        if (isLavaCell()) {
          await functions.print(lang.current.parkour.deathMessage);
          if (!await functions.printYn(lang.current.parkour.respawnConfirm)) {
            return;
          }
          x = born[level][0];
          y = born[level][1];
          continue;
        }
        if (shouldRespawn) {
          x = born[level][0];
          y = born[level][1];
          continue;
        }
        const mapXY = cellAt(y, x);
        if (mapXY === "^") {
          sy = 0;
          tryMove(x, y - 4);
          await functions.sleep(0.1);
          continue;
        }
        if (mapXY === ">") {
          sy = 0;
          tryMove(x + 4, y);
          await functions.sleep(0.1);
          continue;
        }
        if (mapXY === "<") {
          sy = 0;
          tryMove(x - 4, y);
          await functions.sleep(0.1);
          continue;
        }
        if (mapXY === "Z") {
          sy = 3;
        }
        for (let i = 1; i <= sy; i++) {
          tryMove(x, y - 1);
          if (!isAirAbove()) {
            sy = 0;
            continue;
          }
        }
        if (canMoveTo(x, y + 1)) {
          sy--;
        } else {
          sy = 0;
        }
        if (sy) {
          for (let i = 1; i <= sy; i++) {
            tryMove(x, y - 1);
            if (!isAirAbove()) {
              sy = 0;
              continue;
            }
          }
          for (let i = 1; i <= -sy; i++) {
            tryMove(x, y + 1);
            if (!isAirAbove()) {
              sy = 0;
              continue;
            }
          }
        }
        if (!canMoveTo(x + sx, y)) {
          if (sx === getSlideDirection(x + sx, y) && canMoveTo(x + sx, y - 1) || getSlideDirection(x, y + 1) !== 0) {
            tryMove(x, y - 1);
            if (!isAirAbove()) {
              sy = 0;
              continue;
            }
          } else {
            sx *= -1;
          }
        }
        tryMove(x + sx, y);
        if ((shouldJump || jumpCarry) && !sy && !canMoveTo(x, y + 1)) {
          jumpCarry = false;
          sy = 2;
          for (let i = 1; i <= sy; i++) {
            tryMove(x, y - 1);
            if (!isAirAbove()) {
              sy = 0;
              continue;
            }
          }
        }
        if (!canMoveTo(x, y + 1)) {
          sy = 0;
        }
        await functions.sleep(0.1);
      } else {
        jumpCarry = false;
        await functions.write(lang.current.parkour.swimTip + "\n");
        await show();
        sinkTimer++;
        sinkTimer %= 5;
        let moveUp = false;
        let moveDown = false;
        let moveLeft = false;
        let moveRight = false;
        let shouldRespawn = false;
        for (const c of functions.getch2s()) {
          if (c === "\x7F") {
            return;
          }
          if (c === "r") {
            shouldRespawn = true;
          }
          if (c === "w") {
            moveUp = true;
          }
          if (c === "a") {
            moveLeft = true;
          }
          if (c === "s") {
            moveDown = true;
          }
          if (c === "d") {
            moveRight = true;
          }
        }
        if (isLavaCell()) {
          await functions.print(lang.current.parkour.deathMessage);
          if (!await functions.printYn(lang.current.parkour.respawnConfirm)) {
            return;
          }
          x = born[level][0];
          y = born[level][1];
          continue;
        }
        if (shouldRespawn) {
          x = born[level][0];
          y = born[level][1];
          continue;
        }
        if (moveUp && !moveDown) {
          tryMove(x, y - 1);
        }
        if (moveDown && !moveUp) {
          tryMove(x, y + 1);
        }
        if (!moveUp && !moveDown && !sinkTimer) {
          tryMove(x, y + 1);
        }
        if (moveLeft && !moveRight) {
          tryMove(x - 1, y);
        }
        if (!moveLeft && moveRight) {
          tryMove(x + 1, y);
        }
        await functions.sleep(0.1);
      }
    }
  }
  return run;
}

// source-code/lottery.js
function createLottery(lang, data, functions) {
  async function run() {
    while (true) {
      await functions.clear();
      await functions.print(functions.listToChoice(lang.current.lottery.menu));
      await functions.print(lang.current.lottery.costPrefix + data.gameState.dataSaver.totalFishCaught + lang.current.lottery.currentMoneyPrefix + data.gameState.dataSaver.money);
      await functions.print(lang.current.lottery.oddsHeader);
      for (const line of lang.current.lottery.oddsTable) {
        await functions.print(line);
      }
      while (true) {
        const c = await functions.getch();
        if (c === "1") {
          if (data.gameState.dataSaver.totalFishCaught < 100 && data.gameState.dataSaver.money < 1e3) {
            await functions.print(lang.current.lottery.notEnoughBoth);
            await functions.sleep(1);
            break;
          }
          if (data.gameState.dataSaver.totalFishCaught < 100) {
            await functions.print(lang.current.lottery.notEnoughFishCount);
            await functions.sleep(1);
            break;
          }
          if (data.gameState.dataSaver.money < 1e3) {
            await functions.print(lang.current.lottery.notEnoughMoney);
            await functions.sleep(1);
            break;
          }
          data.gameState.dataSaver.totalFishCaught -= 100;
          data.gameState.dataSaver.money -= 1e3;
          const ran = functions.random(1, 100);
          if (ran <= 2) {
            await functions.print(lang.current.lottery.rewardDiamondFish + " x1");
            data.gameState.diamondFish++;
          } else if (ran <= 20) {
            await functions.print(lang.current.lottery.rewardBigFishBait + " x1");
            data.gameState.bigFish++;
          } else if (ran <= 28) {
            await functions.print(lang.current.lottery.rewardFishFishFish + " x1");
            data.gameState.fishMan = true;
          } else if (ran <= 49) {
            data.gameState.dataSaver.money += 500;
            await functions.print(lang.current.lottery.rewardGoldText + " $500");
          } else if (ran <= 73) {
            data.gameState.dataSaver.money += 200;
            await functions.print(lang.current.lottery.rewardGoldText + " $200");
          } else if (ran <= 80) {
            data.gameState.bigFish += 2;
            await functions.print(lang.current.lottery.rewardBigFishBait + " x2");
          } else {
            await functions.print(lang.current.lottery.thanks);
          }
          await functions.sleep(1);
          break;
        } else if (c === "2") {
          return;
        }
      }
    }
  }
  return run;
}

// source-code/adventure.js
function createAdventure(lang, data, functions) {
  let now = 0;
  let america = 0;
  let sleepcnt = 0;
  let eatcnt = 0;
  let e2 = 0;
  let s2 = 0;
  let temple = 0;
  let romar = 0;
  let headbone = 0;
  let drafood = 0;
  function reset() {
    america = sleepcnt = eatcnt = e2 = s2 = temple = romar = headbone = drafood = 0;
    now = 0;
  }
  async function runTurn(things) {
    const scene = things[now];
    const {
      title,
      lines,
      choose,
      cnext,
      next: nextIds
    } = scene;
    if (title) {
      await functions.print(title);
    }
    for (const line of lines) {
      await functions.print(line);
      await functions.sleep(0.1);
    }
    await functions.write("\n");
    if (now === 21) {
      if (!romar) {
        await functions.printa(lang.current.adventure.achievementAllRoadsToRome);
        data.gameState.dataSaver.money += 100;
      }
      if (romar === 5) {
        await functions.printa(lang.current.adventure.achievementWrongWay);
        data.gameState.dataSaver.money += 100;
      }
      romar++;
    }
    if (now === 22) {
      if (!america) {
        await functions.printa(lang.current.adventure.achievementVoyage);
        data.gameState.dataSaver.money += 100;
      }
      if (america === 5) {
        await functions.printa(lang.current.adventure.achievementWrongWay);
        data.gameState.dataSaver.money += 100;
      }
      america++;
    }
    if (now === 24) {
      if (!headbone) {
        await functions.printa(lang.current.adventure.achievementSurprise);
        data.gameState.dataSaver.money += 100;
      }
      if (headbone === 5) {
        await functions.printa(lang.current.adventure.achievementArchaeologist);
        data.gameState.dataSaver.money += 100;
      }
      headbone++;
    }
    let menu = "";
    for (let i = 0; i < choose.length; i++) {
      menu += i + 1 + "." + choose[i];
      if (i < choose.length - 1) {
        menu += ", ";
      }
    }
    await functions.print(menu);
    let idx;
    do {
      idx = Number(await functions.getch()) - 1;
    } while (idx < 0 || idx >= choose.length);
    if (cnext[idx]) {
      await functions.clear();
      await functions.printa(cnext[idx]);
    }
    now = nextIds[idx];
    if (now === 13) {
      if (!temple) {
        await functions.printa(lang.current.adventure.achievementBuddhism);
        data.gameState.dataSaver.money += 100;
      } else if (temple === 5) {
        await functions.printa(lang.current.adventure.achievementAscend);
        data.gameState.dataSaver.money += 100;
      }
      temple++;
    }
    if (now === 30) {
      if (eatcnt >= 30 && !drafood) {
        await functions.printa(lang.current.adventure.achievementDragonMeal);
        data.gameState.dataSaver.money += 100;
      }
      drafood++;
    }
    if (now === -3) {
      if (eatcnt >= 30 && e2 === 0) {
        await functions.printa(lang.current.adventure.achievementOriginalAspiration);
        data.gameState.dataSaver.money += 100;
      } else if (eatcnt >= 30 && e2 === 5) {
        await functions.printa(lang.current.adventure.achievementMission);
        data.gameState.dataSaver.money += 200;
      }
      e2++;
      now = 1;
    }
    if (now === -4) {
      if (sleepcnt >= 30 && s2 === 0) {
        await functions.printa(lang.current.adventure.achievementSoftBed);
        data.gameState.dataSaver.money += 100;
      } else if (sleepcnt >= 30 && s2 === 5) {
        await functions.printa(lang.current.adventure.achievementSleepComfort);
        data.gameState.dataSaver.money += 200;
      }
      s2++;
      now = 1;
    }
    if (now === -1) {
      eatcnt++;
      if (eatcnt === 5) {
        await functions.printa(lang.current.adventure.achievementNeedFood);
        data.gameState.dataSaver.money += 100;
      } else if (eatcnt === 10) {
        await functions.printa(lang.current.adventure.achievementHungryGhost);
        data.gameState.dataSaver.money += 100;
      } else if (eatcnt === 30) {
        await functions.printa(lang.current.adventure.achievementVirtuousHui);
        data.gameState.dataSaver.money += 100;
      }
      now = 1;
    }
    if (now === -2) {
      sleepcnt++;
      if (sleepcnt === 5) {
        await functions.printa(lang.current.adventure.achievementReadyAfterSleep);
        data.gameState.dataSaver.money += 100;
      } else if (sleepcnt === 10) {
        await functions.printa(lang.current.adventure.achievementBedComfort);
        data.gameState.dataSaver.money += 100;
      } else if (sleepcnt === 30) {
        await functions.printa(lang.current.adventure.achievementSleepGod);
        data.gameState.dataSaver.money += 100;
      }
      now = 1;
    }
    await functions.sleep(0.5);
  }
  async function run() {
    if (data.gameState.dataSaver.challengeLevel !== 1) {
      return;
    }
    reset();
    const things = lang.current.adventure.story;
    while (true) {
      if (now === -5) {
        await functions.printa(lang.current.adventure.missionComplete);
        data.gameState.dataSaver.money += 100;
        data.gameState.dataSaver.challengeLevel = 2;
        return;
      }
      await functions.clear();
      await runTurn(things);
    }
  }
  return run;
}

// source-code/settings.js
function createSettings(lang, data, functions) {
  async function choose() {
    await functions.clear();
    if (!data.gameState.settings.forceInstantOutput) {
      await functions.print(lang.current.functions.chooseSpeed);
      await functions.print(functions.listToChoice(lang.current.functions.speedName));
      let c;
      do {
        c = await functions.getch();
      } while (!/[1-3]/.test(c));
      data.gameState.dataSaver.textSpeed = Number(c) - 1;
    }
    await functions.clear();
    for (const text of lang.current.functions.skills) {
      await functions.print(text);
    }
    while (true) {
      const c = await functions.getch();
      if (c === "1") {
        data.gameState.dataSaver.catchSpeedLevel = 5;
        break;
      } else if (c === "2") {
        data.gameState.dataSaver.incomeLevel = 5;
        break;
      } else if (c === "3") {
        data.gameState.dataSaver.slipOffChance = 10;
        break;
      } else if (c === "4") {
        data.gameState.dataSaver.actionSpeedMultiplier = 2;
        break;
      } else if (c === "5") {
        data.gameState.dataSaver.bigFishChance = 40;
        break;
      } else if (c === "6") {
        break;
      }
    }
  }
  async function setTextSpeed() {
    await functions.clear();
    await functions.print(lang.current.functions.chooseSpeed);
    await functions.print(functions.listToChoice(lang.current.functions.speedName, lang.current.functions.exit));
    let c;
    do {
      c = Number(await functions.getch());
    } while (!functions.isNumberBetween(c, 1, 4));
    if (c <= 3) {
      data.gameState.dataSaver.textSpeed = c - 1;
    }
  }
  return Object.freeze({
    choose,
    setTextSpeed
  });
}

// source-code/main.js
function createGameInstance(write, loadGame, saveGame, hasSave, languageCode) {
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
      return;
    }
    await functions.clear();
    if (!data.gameState.settings.skipStory) {
      for (let text of lang.current.main.story) {
        await functions.printa(text);
      }
    }
    if (await checkpoint.login()) {
      if (!data.gameState.settings.forceUsername || !data.gameState.settings.forceBlancPassword || !data.gameState.settings.forceInstantOutput) {
        await functions.sleep(0.5);
      }
      await settings.choose();
    }
    if (!data.gameState.settings.forceUsername || !data.gameState.settings.forceBlancPassword || !data.gameState.settings.forceInstantOutput) {
      await functions.sleep(0.5);
    }
    while (true) {
      await functions.clear();
      await functions.print(functions.listToChoice(lang.current.main.mainMenu));
      while (true) {
        let type = await functions.getch();
        if (type === "1") {
          await fishing();
          break;
        } else if (type === "2") {
          await shop();
          break;
        } else if (type === "3") {
          await settings.setTextSpeed();
          break;
        } else if (type === "4") {
          await lottery();
          break;
        } else if (type === "5") {
          if (data.gameState.dataSaver.challengeLevel === 0) {
            await parkour();
          } else if (data.gameState.dataSaver.challengeLevel === 1) {
            await adventure();
          } else {
            await functions.clear();
            await functions.printa(lang.current.main.challengeCompleted);
          }
          break;
        } else if (type === "6") {
          await functions.clear();
          return;
        }
      }
      await checkpoint.save();
      await functions.sleep(0.5);
    }
  }
  return Object.freeze({
    setConsoleSize: (size) => {
      data.gameState.setConsoleSize(size);
    },
    onInput: (str) => {
      functions.onInput(str);
    },
    languages: {
      langs: functions.deepCopy(lang.langs),
      setLanguage: (code) => {
        lang.setLanguage(code);
      }
    },
    settings: data.gameState.settings,
    launch
  });
}
export {
  createGameInstance
};
