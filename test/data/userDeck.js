"use strict";

let _ = require("lodash");

let userData = require("./user");
let userPropertyData = require("./userProperty");

let characterData = require("./character");
let itemData = require("./item");
var crypto = require("crypto");

var characterKeyList = Object.keys(characterData.field);
// var weaponKey = Object.keys(itemData.weapon);
// var armorKey = Object.keys(itemData.armor);
// var accessoryKey = Object.keys(itemData.accessory);

let wearableItemData = {
	"weapon": itemData.weapon,
	"armor": itemData.armor,
	"accessory": itemData.accessory
}

// user 수만큼 있음
var data = {
	"smadupset@naver": {
		"cardList": {
			"uid": {
				"name": "Lorem",
				"nickname": "Lorem",
				"property": {
					"level": -16,
					"hp": 25,
					"defence": 25,
					"attackPower": 4,
					"agility": 33,
					"exp": -11,
					"skills": {
						"name": {
							"level": -1,
							"exp": 3,
							"active": true
						}
					}
				},
				"equipment": {
					"weapon": {
						"inventoryUid1": {}
					},
					"armor": {
						"inventoryUid2": {}
					},
					"accessory": {
						"inventoryUid3": {}
					}
				}
			}
		},
		"deckList": {
			"uid1": {
				"cardList": {
					"uid1": "Lorem",
					"uid2": "Lorem",
					"uid3": "Lorem"
				},
				"active": true
			},
			"uid2": {},
			"uid3": {}
		}
	},
	"jgj90@naver": {
		"cardList": {
			"uid": {
				"name": "Lorem",
				"nickname": "Lorem",
				"property": {
					"level": -16,
					"hp": 25,
					"defence": 25,
					"attackPower": 4,
					"agility": 33,
					"exp": -11,
					"skills": {
						"name": {
							"level": -1,
							"exp": 3,
							"active": true
						}
					}
				},
				"equipment": {
					"weapon": {
						"inventoryUid1": {}
					},
					"armor": {
						"inventoryUid2": {}
					},
					"accessory": {
						"inventoryUid3": {}
					}
				}
			}
		},
		"deckList": {
			"uid1": {
				"cardList": {
					"uid1": "Lorem",
					"uid2": "Lorem",
					"uid3": "Lorem"
				},
				"active": true
			},
			"uid2": {},
			"uid3": {}
		}
	},
	"pastelbook89@gmail": {
		"cardList": {
			"uid": {
				"name": "Lorem",
				"nickname": "Lorem",
				"property": {
					"level": -16,
					"hp": 25,
					"defence": 25,
					"attackPower": 4,
					"agility": 33,
					"exp": -11,
					"skills": {
						"name": {
							"level": -1,
							"exp": 3,
							"active": true
						}
					}
				},
				"equipment": {
					"weapon": {
						"inventoryUid1": {}
					},
					"armor": {
						"inventoryUid2": {}
					},
					"accessory": {
						"inventoryUid3": {}
					}
				}
			}
		},
		"deckList": {
			"uid1": {
				"cardList": {
					"uid1": "Lorem",
					"uid2": "Lorem",
					"uid3": "Lorem"
				},
				"active": true
			},
			"uid2": {},
			"uid3": {}
		}
	},
	"sinho0689@gmail": {
		"cardList": {
			"uid": {
				"name": "Lorem",
				"nickname": "Lorem",
				"property": {
					"level": -16,
					"hp": 25,
					"defence": 25,
					"attackPower": 4,
					"agility": 33,
					"exp": -11,
					"skills": {
						"name": {
							"level": -1,
							"exp": 3,
							"active": true
						}
					}
				},
				"equipment": {
					"weapon": {
						"inventoryUid1": {}
					},
					"armor": {
						"inventoryUid2": {}
					},
					"accessory": {
						"inventoryUid3": {}
					}
				}
			}
		},
		"deckList": {
			"uid1": {
				"cardList": {
					"uid1": "Lorem",
					"uid2": "Lorem",
					"uid3": "Lorem"
				},
				"active": true
			},
			"uid2": {},
			"uid3": {}
		}
	},
	"random_1487780669@gmail": {
		"cardList": {
			"uid": {
				"name": "Lorem",
				"nickname": "Lorem",
				"property": {
					"level": -16,
					"hp": 25,
					"defence": 25,
					"attackPower": 4,
					"agility": 33,
					"exp": -11,
					"skills": {
						"name": {
							"level": -1,
							"exp": 3,
							"active": true
						}
					}
				},
				"equipment": {
					"weapon": {
						"inventoryUid1": {}
					},
					"armor": {
						"inventoryUid2": {}
					},
					"accessory": {
						"inventoryUid3": {}
					}
				}
			}
		},
		"deckList": {
			"uid1": {
				"cardList": {
					"uid1": "Lorem",
					"uid2": "Lorem",
					"uid3": "Lorem"
				},
				"active": true
			},
			"uid2": {},
			"uid3": {}
		}
	}
};

_.forEach(userData, function(userValue, userKey) {
	data[userKey] = {
		cardList: {},
		deckList: {}
	};

	// cardList
	_.forEach(characterData.field, function(characterValue, characterKey) {
		let uid = crypto.randomBytes(10).toString('hex');

		let idx = _.random(0, characterKeyList.length - 1);
		let detailValue = characterData.field[characterKeyList[idx]];

		if (detailValue) {
			data[userKey].cardList[uid] = {};
			data[userKey].cardList[uid].name = characterKeyList[idx];
			data[userKey].cardList[uid].property = {
				level: 1,
				hp: detailValue.property.hp.min,
				attackPower: detailValue.property.attackPower.min,
				defence: detailValue.property.defence.min,
				agility: detailValue.property.agility.min,
				exp: _.random(0, 200)
			};
			data[userKey].cardList[uid].skills = {};

			let skillLv = "lv" + data[userKey].cardList[uid].property.level;
			_.forEach(detailValue.property.byLevel[skillLv].skills, function(skillValue, skillName) {
				data[userKey].cardList[uid].skills[skillName] = {
					level: 1,	// 일단 level은 1임
					exp: _.random(0, 200),
					active: true		// 일단 모두 활성화
				};
			});

			data[userKey].cardList[uid].equipmemt = {
				"weapon": {
				},
				"armor": {
				},
				"accessory": {
				}
			};

			// equipment(weapon, armor, accessory)
			_.forEach(data[userKey].cardList[uid].equipmemt, function(equipValue, equipKey) {
				let itemObj, itemObjKey, partObj;
				let itemUid = _.findKey(userPropertyData[userKey].inventory, function(value, key) {
					return equipKey === value.category;
				});

				if (itemUid) {
					data[userKey].cardList[uid].equipmemt[equipKey] = itemUid;
				} else {
					data[userKey].cardList[uid].equipmemt[equipKey] = ""
				}
			});
		}
	});

});

module.exports = data;
