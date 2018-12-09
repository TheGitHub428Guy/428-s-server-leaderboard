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
			   "&Y'",   // Y'[10]
			   "&Y",    // Y [11]
			   "&J'",   // J'[12]
			   "&N",    // N [13]
			   "&V",    // V [14]
			   "&P",    // P [15]
			   "&C",    // C [16]
			   "&Z'",   // Z'[17]
			   "&F",    // F [18]
			   "&T",    // T [19]
			   "&P'",   // P'[20]
			   "&X",    // X [21]
			   "&F'",   // F'[22]
			   "&N'",   // N'[23]
			   "&Z",    // Z [24]
			   "&W",    // W [25]
			   "&pmpkn", // Pumpkin [26]
			   "\uD83C\uDF83" // SPOOKY Pumpkin [27]
			   ]
function FromKeywords(s) {
	let temp = s.replace("1 bragging points", "1 bragging point")
				.replace("1 Joined before shop badges", "Joined before shop")
	return ((document.getElementById("emojiHandling").value == "Images") ? temp.replace(/(&[^,\s]+)/gm, "<img class=\"emoji\" src=$1.png>")
						 :((document.getElementById("emojiHandling").value == "Text") ?
						 (temp.replace(/&([^,\s]+)/gm, "$1 Pentominoes")
						 .replace(/(\D)1(\D+?)Pentominoes/gm, "$11$2Pentomino").replace(/emoji Pentomino(es)?/gm, "\ud83d\ude02")).replace(/pmpkn Pentominoe?(s)?/gm, "Pumpkin$1").replace("1 Pumpkins", "1 Pumpkin")
						:(temp.replace("&emoji", ":what:").replace("&pmpkn", ":pumpkin:").replace(/&([^,\s]+)/gm, ":5$1_:").replace(/:5(.)'_:/gm, ":5$1_m:"))))
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
userList.push(new User("Reidolol", [2131, 99, 13, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]))
userList[userList.length - 1].addItems(0, 150) // lol 11/9/2018 12/9/2018
userList.push(new User("Milo Jacquet", [2568, 80, 13, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]))
userList[userList.length - 1].addItems(0, 75) // +ed 11/9/2018
userList.push(new User("\u0E56\u0336\u0336\u0336\u03B6\u035C\u0361W\uD835\uDD56\uD835\uDD5A\uD835\uDD63\uD835\uDD55\uD835\uDD60\uD835\uDD67\uD835\uDD56\uD835\uDD63\uD835\uDD64\uD835\uDD56", [2480, 38, 9, 0, 1, 0])) // this is weirdoverse
userList[userList.length - 1].addItems(20, 1)
userList[userList.length - 1].addItems(7, 1)
userList[userList.length - 1].addItems(0, 23) // added 10/12/2018
userList[userList.length - 1].addItems(0, 31) // added 10/12/2018
userList[userList.length - 1].addItems(0, 75) // added 10/26/2018
userList[userList.length - 1].addItems(1, 9)  // added 10/26/2018
userList[userList.length - 1].addItems(0, 32) // added 10/31/2018
userList[userList.length - 1].addItems(0, 73) // 11/9/2018
userList.push(new User("Layle", [1368, 79, 6]))
userList[userList.length - 1].addItems(7, 1)
userList[userList.length - 1].addItems(0, 46) // added 10/12/2018 and 11/9/2018
userList[userList.length - 1].addItems(0, 129) // added 10/19/2018 and 11/26/2018 and 12/3/2018
userList[userList.length - 1].addItems(0, 28) // added 10/26/2018
userList[userList.length - 1].addItems(0, 27)  // askfghd 10/31/2018
userList[userList.length - 1].addItems(0, 57) // ggggggggggggggggggggggggggggggggg 12/9/2018
userList.push(new User("Denc", [191, 5, 0, 1, 0, 0, 1, 1]))
userList.push(new User("AAAAAAAAA", [219, 5, 4, 0, 0, 0, 0, 1]))
userList[userList.length - 1].addItems(0, 12) // added 10/26/2018
userList[userList.length - 1].addItems(1, 5)  // added 10/26/2018
userList[userList.length - 1].addItems(0, 31) // sfsfsfsfsfsfs 10/31/2018
//userList.push(new User("fabric", [113, 3])) // he left 11/9/2018 // yes i put a comment on a comment
userList.push(new User("yes", [10, 5]))

userList.push(new User("TWSICommunity", [10]))
userList.push(new User("\u03C2\u03C3\u03C2\u03B1\u03B9\u03B7\u03B5 \u03C2\u03BF\u03BF\u03BA\u03B9\u03B5", [10])) // man i love escape sequences
userList.push(new User("jk", [10]))

// use userList[userList.length - 1].addItems(ID, number) under a user to add items
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
