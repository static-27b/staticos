const {
  CommandoClient,
  SQLiteProvider,
  Commando
} = require("discord.js-commando");
const path = require("path");
const sqlite = require("sqlite");
const { stripIndents } = require("common-tags");
const { getMember, formatDate } = require("./functions.js");
const { MessageEmbed, Structures, Collection } = require("discord.js");
const chalk = require("chalk");
const config = require("./config.json");
const ms = require("ms");

const client = new CommandoClient({
  commandPrefix: `${config.prefix}`,
  owner: `${config.ownerID}`,
  invite: `${config.support}`
});

client.registry
  .registerDefaultTypes()
  .registerGroups([["info", "The Info Command Group"]])
  .registerDefaultGroups()
  .registerDefaultCommands()
  .registerCommandsIn(path.join(__dirname, "commands"));

client.once("ready", () => {
  console.log(
    chalk.magenta("StaticOS"),
    `I have logged in as ${client.user.tag} (${client.user.id})`
  );
  client.user.setActivity(
    `${client.commandPrefix}help | Serving ${client.guilds.cache.size} servers!`
  );
});

sqlite.open(path.join(__dirname, "settings.sqlite")).then(db => {
  client.setProvider(new SQLiteProvider(db));
});

client.on("error", console.error);

client.login(config.token);
