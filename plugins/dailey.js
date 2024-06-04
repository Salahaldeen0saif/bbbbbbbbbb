let handler = async (m, {command, text, conn, usedPrefix}) => {

let url = 'https://wa.me/+201147144354';
let a7a = url + text;
await conn.reply(m.chat, a7a, m);
}
    handler.help = ['تبنيد'];
    handler.tags = ['group'];
    handler.command = /^(فنش)$/i

    export default handler;
