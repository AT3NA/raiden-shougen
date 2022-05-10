/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { IParsedArgs, ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "broadcast",
			description:
				"Will make a broadcast for groups where the bot is in. Can be used to make announcements.",
			aliases: ["bcast", "announcement", "bc"],
			category: "dev",
			dm: true,
			usage: `${client.config.prefix}bc`,
			modsOnly: true,
			baseXp: 20000,
		});
	}

	run = async (
		M: ISimplifiedMessage,
		{ joined }: IParsedArgs
	): Promise<void> => {
		if (!joined)
			return void (await M.reply(`Please provide the Broadcast Message.`));
		const term = joined.trim();
		const gifs = [
			"https://ahad-cloud.mirror-index.workers.dev/0:/Uploads/video_2022-05-06_02-12-59_7094440655376994304.mp4",
			"https://ahad-cloud.mirror-index.workers.dev/0:/Uploads/video_2022-05-06_02-21-06_7094442746977236992.mp4",
			"https://ahad-cloud.mirror-index.workers.dev/0:/Uploads/video_2022-05-06_02-35-40_7094446503847251968.mp4",
			"https://ahad-cloud.mirror-index.workers.dev/0:/Uploads/video_2022-05-06_02-28-23_7094444621712323584.mp4",
			"https://ahad-cloud.mirror-index.workers.dev/0:/Uploads/video_2022-05-06_02-46-57_7094449484353338368.mp4",
			"https://ahad-cloud.mirror-index.workers.dev/0:/Uploads/video_2022-05-10_01-10-22_7095908865759848448.mp4",
			"https://ahad-cloud.mirror-index.workers.dev/0:/Uploads/video_2022-05-10_01-11-32_7095909162462006272.mp4",
		];
		const selected = gifs[Math.floor(Math.random() * gifs.length)];
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const chats: any = this.client.chats
			.all()
			.filter((v) => !v.read_only && !v.archive)
			.map((v) => v.jid)
			.map((jids) => (jids.includes("g.us") ? jids : null))
			.filter((v) => v);
		for (let i = 0; i < chats.length; i++) {
			const text = `*📢[LELOUCH BROADCAST」📢*\n\n${term}\n\n Regards ~ *${M.sender.username}*`;
			this.client.sendMessage(chats[i], { url: selected }, MessageType.video, {
				mimetype: Mimetype.gif,
				caption: `${text}`,
				contextInfo: {
					mentionedJid: M.groupMetadata?.participants.map((user) => user.jid),
				},
			});
		}
		await M.reply(`✅ Broadcast Message sent to *${chats.length} groups*.`);
	};
}
