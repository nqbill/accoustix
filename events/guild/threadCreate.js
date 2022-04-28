//The Module
module.exports = async (client, thread) => {
  try {
    if (thread.joinable && !thread.joined) {
      await thread.join();
    }
  } catch (e) {
    console.log(String(e).grey)
  }
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
