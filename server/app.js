const PromptManager = require("./userData.js")
const WebManager = require("./webCreation.js")

// Presentation
console.log("Hi! Let's add a new website to this server: \n");

PromptManager.gatherUserData().then((webRequirements) => {
  WebManager.createWeb(webRequirements)
})