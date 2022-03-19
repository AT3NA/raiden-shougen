/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "mikasa",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}elaina`,
			baseXp: 200,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const chitoge =
			"https://c.tenor.com/ZPyVOtzLYzsAAAPo/mikasa-ackerman-mikasa-season4.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: chitoge },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `💕 *Mikasa* 💕\n\n🍀 *Description: A WhatsApp Bot developed by *AT3NA* With Rich Anime features based on MIKASABOT.*\n\n🌐 *OFFICIAL BOT URL:https://github.com/AT3NA/mikasabot* \n\n 📒 *Guide:https://github.com/Ronen6999/Elaina-bot* \n\n 👾 *BOT URL:https://github.com/AT3NA/mikasabot* \n`,
			}
		);
	};
}
