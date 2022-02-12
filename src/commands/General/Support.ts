import { MessageType, Mimetype } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'support',
            aliases: ['support'],
            description: 'Gets the support group links',
            category: 'general',
            usage: `${client.config.prefix}Support`,
            baseXp: 10
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        (await this.client.sendMessage(
        M.sender.jid,
        `    ♥️MY MASTER GROUP♥️\n\n*🎇YOTSUBA support:🎇* *https://chat.whatsapp.com/JkxmxZ593N16JYaiJ4Sx09*\n\n*💫INFINITY BOT FUN GROUP💫*:*https://chat.whatsapp.com/F0lsoalrK7yInLXShKdWJ6*`,
           MessageType.text
        ))
        const n = [
            'https://c.tenor.com/DnRViqnLNsUAAAPo/gotoubun-no-hanayome-anime.mp4'
        ]
        let beckylynch = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url:beckylynch }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `Sent you the support Link in personal message \n` }
        )

        }
}
