function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  var tooQuiet = "I can't hear you!"
  var yes = "YES INDEED!"
  var youToo = "I love you, too."

  if (string.toLowerCase() === lowercase) {
    return tooQuiet
  }

  else if (string.toUpperCase() === uppercase) {
    return yes
  }

  else if (string === "I love you, Grandma") {
    return youToo
  }
}
