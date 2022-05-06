/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "zero",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}elaina`,
			baseXp: 200,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const chitoge =
			"https://ahad-cloud.mirror-index.workers.dev/0:/Uploads/video_2022-05-06_03-04-31_7094454011202374656.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: chitoge },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: ` *Zero* \n\n🍀 *Description: A WhatsApp Bot developed by *HARAJIT* With Rich Anime features.*\n\n🌐 *OFFICIAL BOT URL:https://github.com/AT3NA/iamlelouch* \n\n 📒 *Guide:https://github.com/AT3NA/iamlelouch* \n\n 👾 *BOT URL:https://github.com/AT3NA/iamlelouch* \n`,
			}
		);
	};
}
