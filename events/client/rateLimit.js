//here the event starts
const settings = require(`${process.cwd()}/botconfig/settings.json`);
module.exports = (client, rateLimitData) => {
  if (!settings["ratelimit-logs"]) return;
  console.warn(rateLimitData)
}

/**********************************************************
 * @INFO
 * Bot Coded by nqbill | https://discord.gg/homely
 * @INFO
 * Work for Homely Development | https://homely.dev
 * @INFO
 * Please mention him / Homely Development, when using this Code!
 * @INFO
 *********************************************************/
