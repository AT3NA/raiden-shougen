/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "ei",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}elaina`,
			baseXp: 200,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const chitoge =
			"https://telegra.ph/file/1a62a7ddb7e44b7ea91d7.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: chitoge },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: ` *⚡Raiden Shogun⚡* \n\n🍀 *Description: A WhatsApp Bot developed by *HARAJIT* With Rich Anime features.*\n\n🌐 *OFFICIAL BOT URL:https://github.com/AT3NA/raiden-shougen* \n\n 📒 *Guide:https://youtu.be/KVrt3iKO4L0* \n\n 👾 *BOT URL:https://github.com/AT3NA/raiden-shougen* \n`,
			}
		);
	};
}
