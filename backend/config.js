const containerMapping = {
  "lime juice": {
    "position"  : 4,
    "pin"	: 5,
    "relay"     : 3,
    "ingredient": "lime juice"
  },
  "simple syrup": {
    "position"  : 2,
    "pin"	: 6,
    "relay"     : 2,
    "ingredient": "simple syrup"
  },
  "gin": {
    "position"  : 8,
    "pin"	: 17,
    "relay"     : 6,
    "ingredient": "gin"
  },
  "campari": {
    "position"  : 7,
    "pin" 	: 22,
    "relay"     : 8,
    "ingredient": "campari"
  },
  "bourbon": {
    "position"  : 5,
    "pin" 	: 23,
    "relay"     : 1,
    "ingredient": "bourbon"
  },
  "bitters": {
    "position"  : 1,
    "pin"	: 24,
    "relay"     : 5,
    "ingredient": "bitters"
  },
  "cointreau": {
    "position"  : 3,
    "pin"	: 25,
    "relay"     : 4,
    "ingredient": "cointreau"
  },
  "vermouth": {
    "position"  : 6,
    "pin"	: 27,
    "relay"     : 7,
    "ingredient": "vermouth"
  }
}

const ounce = 30

module.exports = {
    containerMapping,
    ounce
}
