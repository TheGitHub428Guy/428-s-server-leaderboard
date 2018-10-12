// im doing javascript again
/* Format: 
Username is obviously a string
Items are like this:
[40, 5, 0, 1, 0] means:
40 items of ID 0 (sunflower) (currency)
 5 items of ID 1 (hibiscus)  (currency)
 0 items of ID 2 (bouquet)   (currency)
 1 item  of ID 3 (bragging point)*/ // [Currencies]
var emojiImgs = true
const iList = ["\ud83c\udf3b",   // sunflower   [ID 0]
			   "\ud83c\udf3a",   // hibiscus    [ID 1]
			   "\ud83d\udc90",   // bouquet     [ID 2]
								    // [Items]
			   "bragging points", // brag point [ID 3]
			   "\ud83c\udf39",     // rose       [ID 4]
			   "\ud83d\udeb0",      // water      [ID 5]
			   "&emoji",       // good emoji [ID 6]
									    // [Badges]
			   "Joined before shop badges", // JBS badge [ID 7]
			            // [Pentominoes]
			   "&I",    // I [ID 8]
			   "&J",    // J [9]
			   "&!Y",   // Y'[10]
			   "&Y",    // Y [11]
			   "&!J",   // J'[12]
			   "&N",    // N [13]
			   "&V",    // V [14]
			   "&P",    // P [15]
			   "&C",    // C [16]
			   "&!Z",   // Z'[17]
			   "&F",    // F [18]
			   "&T",    // T [19]
			   "&!P",   // P'[20]
			   "&X",    // X [21]
			   "&!F",   // F'[22]
			   "&!N",   // N'[23]
			   "&Z",    // Z [24]
			   "&W"     // W [25]
			   ]
function FromKeywords(s) {
	let temp = s.replace("1 bragging points", "1 bragging point")
				.replace("1 Joined before shop badges", "Joined before shop")
	return ((document.getElementById("emojiHandling").value == "Images") ? temp.replace("&I", "<img class=\"emoji\" src=https://cdn.discordapp.com/emojis/499331811969859595.png?v=1>") // AAAAA
							  .replace("&J", "<img class=\"emoji\" src=https://cdn.discordapp.com/emojis/499331820563988521.png?v=1>")
							  .replace("&!Y","<img class=\"emoji\" src=https://cdn.discordapp.com/emojis/499332067918610437.png?v=1>")
							  .replace("&Y", "<img class=\"emoji\" src=https://cdn.discordapp.com/emojis/499332054190784522.png?v=1>")
							  .replace("&!J","<img class=\"emoji\" src=https://cdn.discordapp.com/emojis/499331827593642015.png?v=1>")
							  .replace("&N", "<img class=\"emoji\" src=https://cdn.discordapp.com/emojis/499331876280991745.png?v=1>")
							  .replace("&V", "<img class=\"emoji\" src=https://cdn.discordapp.com/emojis/499331975602241569.png?v=1>")
							  .replace("&P", "<img class=\"emoji\" src=https://cdn.discordapp.com/emojis/499331913035808808.png?v=1>")
							  .replace("&C", "<img class=\"emoji\" src=https://cdn.discordapp.com/emojis/499331757292650526.png?v=1>")
							  .replace("&!Z","<img class=\"emoji\" src=https://cdn.discordapp.com/emojis/499332106183376897.png?v=1>")
							  .replace("&F", "<img class=\"emoji\" src=https://cdn.discordapp.com/emojis/499331766402940948.png?v=1>")
							  .replace("&T", "<img class=\"emoji\" src=https://cdn.discordapp.com/emojis/499331960406278146.png?v=1>")
							  .replace("&!P","<img class=\"emoji\" src=https://cdn.discordapp.com/emojis/499331935642845215.png?v=1>")
							  .replace("&X", "<img class=\"emoji\" src=https://cdn.discordapp.com/emojis/499332003632775180.png?v=1>")
							  .replace("&!F","<img class=\"emoji\" src=https://cdn.discordapp.com/emojis/499386069825880064.png?v=1>")
							  .replace("&!N","<img class=\"emoji\" src=https://cdn.discordapp.com/emojis/499331883780276304.png?v=1>")
							  .replace("&Z", "<img class=\"emoji\" src=https://cdn.discordapp.com/emojis/499332088303058974.png?v=1>")
							  .replace("&W", "<img class=\"emoji\" src=https://cdn.discordapp.com/emojis/499331984699424799.png?v=1>")
							  .replace("&emoji", "<img class=\"emoji\" src=https://cdn.discordapp.com/emojis/340669253135106050.png?v=1>")
						
						 :((document.getElementById("emojiHandling").value == "Text") ?
						 (temp.replace("&I", "I Pentominoes").replace("1 I Pentominoes", "1 I Pentomino") // AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
							  .replace("&J", "J Pentominoes").replace("1 J Pentominoes", "1 J Pentomino")
							  .replace("&!Y","Y' Pentominoes").replace("1 Y' Pentominoes", "1 Y' Pentomino")
							  .replace("&Y", "Y Pentominoes").replace("1 Y Pentominoes", "1 Y Pentomino")
							  .replace("&!J","J' Pentominoes").replace("1 J' Pentominoes", "1 J' Pentomino")
							  .replace("&N", "N Pentominoes").replace("1 N Pentominoes", "1 N Pentomino")
							  .replace("&V", "V Pentominoes").replace("1 V Pentominoes", "1 V Pentomino")
							  .replace("&P", "P Pentominoes").replace("1 P Pentominoes", "1 P Pentomino")
							  .replace("&C", "C Pentominoes").replace("1 C Pentominoes", "1 C Pentomino")
							  .replace("&!Z","Z' Pentominoes").replace("1 Z' Pentominoes", "1 Z' Pentomino")
							  .replace("&F", "F Pentominoes").replace("1 F Pentominoes", "1 F Pentomino")
							  .replace("&T", "T Pentominoes").replace("1 T Pentominoes", "1 T Pentomino")
							  .replace("&!P","P' Pentominoes").replace("1 P' Pentominoes", "1 P' Pentomino")
							  .replace("&X", "X Pentominoes").replace("1 X Pentominoes", "1 X Pentomino")
							  .replace("&!F","F' Pentominoes").replace("1 F' Pentominoes", "1 F' Pentomino")
							  .replace("&!N","N' Pentominoes").replace("1 N' Pentominoes", "1 N' Pentomino")
							  .replace("&Z", "Z Pentominoes").replace("1 Z Pentominoes", "1 Z Pentomino")
							  .replace("&W", "W Pentominoes").replace("1 W Pentominoes", "1 W Pentomino")
							  .replace("&emoji", "\ud83d\ude02"))
						:(temp.replace("&I", ":5I_:") // AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
							  .replace("&J", ":5J_:")
							  .replace("&!Y",":5Y_m:")
							  .replace("&Y", ":5Y_:")
							  .replace("&!J",":5J_m:")
							  .replace("&N", ":5N_:")
							  .replace("&V", ":5V_:")
							  .replace("&P", ":5P_:")
							  .replace("&C", ":5C_:")
							  .replace("&!Z",":5Z_m:")
							  .replace("&F", ":5F_:")
							  .replace("&T", ":5T_:")
							  .replace("&!P",":5P_m:")
							  .replace("&X", ":5X_:")
							  .replace("&!F",":5F_m:")
							  .replace("&!N",":5N_m:")
							  .replace("&Z", ":5Z_:")
							  .replace("&W", ":5W_:")
							  .replace("&emoji", ":what:"))))
}
function User(username, items) {
	this.username = username
	this.items = items
	if (!((this.items) instanceof Array)) {
		this.items = []
	}
	while (this.items.length < iList.length) {
		this.items.push(0)
	} 
	while (this.items.length > iList.length) {
		this.items.pop()
	}
	this.flowerVal = function () {
		return (this.items[0] * document.getElementById("sun").value) +
			   (this.items[1] * document.getElementById("hib").value) +
			   (this.items[2] * document.getElementById("bou").value)
	}
	this.addItems = function (itemID, amount) {
		this.items[itemID] += amount
	}
	this.leaderboardText = function () {
		let j = []
		for (i = 0; i < iList.length; i++) {
			if ((this.items[i] > 0) || (i < 1)) {
				j.push(this.items[i].toString() + " " + iList[i])
			}
		}
		return "<span class=\"username\">@" + this.username + "</span> has " + FromKeywords(j.join(", ")) + " (" + this.flowerVal() + " flower val.)"
	}
	this.greaterThan = function (other) {
		return (this.flowerVal() > other.flowerVal())
	}
	this.equalTo = function (other) {
		return (this.flowerVal() == other.flowerVal())
	}
}
var userList = []
userList.push(new User("Reidolol", [1775, 84, 13]))
userList[userList.length - 1].addItems(20, 1)
userList[userList.length - 1].addItems(7, 1)
userList[userList.length - 1].addItems(0, 72)
userList[userList.length - 1].addItems(0, 41) // added 10/12/2018
userList.push(new User("Milo Jacquet", [2184, 76, 9]))
userList[userList.length - 1].addItems(7, 1)
userList[userList.length - 1].addItems(0, 35) // added 10/12/2018
userList.push(new User("\u0E56\u0336\u0336\u0336\u03B6\u035C\u0361W\uD835\uDD56\uD835\uDD5A\uD835\uDD63\uD835\uDD55\uD835\uDD60\uD835\uDD67\uD835\uDD56\uD835\uDD63\uD835\uDD64\uD835\uDD56", [2134, 44, 6, 0, 1, 0]))
userList[userList.length - 1].addItems(20, 1)
userList[userList.length - 1].addItems(7, 1)
userList[userList.length - 1].addItems(0, 23) // added 10/12/2018
userList[userList.length - 1].addItems(0, 31) // added 10/12/2018
userList.push(new User("Layle", [1346, 79, 6]))
userList[userList.length - 1].addItems(7, 1)
userList[userList.length - 1].addItems(0, 23) // added 10/12/2018
userList.push(new User("Denc", [191, 0, 0, 1, 0, 0, 1, 1]))
userList.push(new User("AAAAAAAAA", [140, 5, 0, 0, 0, 0, 0, 1]))
userList.push(new User("fabric", [113, 3]))
userList.push(new User("yes", [10, 5]))

userList.push(new User("Coliop", [10]))
userList.push(new User("TWSICommunity", [10]))
userList.push(new User("\u03C2\u03C3\u03C2\u03B1\u03B9\u03B7\u03B5 \u03C2\u03BF\u03BF\u03BA\u03B9\u03B5", [10]))
userList.push(new User("jk", [10]))
function userSort (users) {
	let result = []
	for (i = 0; result.length < users.length; i++) {
		result.push([users[i], false])
	}
	var len = result.length;
    for (var i = len-1; i>=0; i--){
      for(var j = 1; j<=i; j++){
        if(result[j][0].greaterThan(result[j-1][0])){
            var temp = result[j-1];
            result[j-1] = result[j];
            result[j] = temp;
         } else if (result[j-1][0].equalTo(result[j][0])) {
			 result[j][1] = true
		 }
      }
    }
	return result
}
function UpdateScores() {
	document.getElementById("stxt").innerHTML = "Sunflower val. = " + document.getElementById("sun").value + ", New value = "
	document.getElementById("htxt").innerHTML = "Hibiscus val. = " + document.getElementById("hib").value + ", New value = "
	document.getElementById("btxt").innerHTML = "Bouquet val. = " + document.getElementById("bou").value + ", New value = "
	let result = [userSort(userList), []]
	let j = 0
	for (let i = 0; i < userList.length; i++) {
		if (result[0][i][1]) {
			result[1].push(j.toString() + ". (tied) " + result[0][i][0].leaderboardText())
		} else if (result[0][(i+1) % result[0].length][1]) {
			j++
			result[1].push(j.toString() + ". (tied) " + result[0][i][0].leaderboardText())
		} else {
			j++
			result[1].push(j.toString() + ". " + result[0][i][0].leaderboardText())
		}
	}
	document.getElementById("scores").innerHTML = result[1].join("<br>")
}
