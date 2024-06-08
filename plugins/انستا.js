import fetch from 'node-fetch';

const handler = async (m, { conn, args }) => {
    if (!args[0]) {
        throw `_⚠️ من فضلك, أرسل رابط Instagram._`;
    }
if (!args[0].match(/instagram/gi))
    throw `_❌تأكد من أن الرابط من Instagram_`;
    await conn.sendNyanCat(m.chat, global.wait, adnyancat, addescargas, null, script, m);

    try {
        const apiUrl = `https://visionaryapi.boxmine.xyz/api/v1/igdl?url=${args[0]}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.success && data.data.length > 0) {
            for (const media of data.data) {
                if (media.type === 'video')
            {
                    await conn.sendFile(m.chat, media.url_download, 'video.mp4', '', m);
                } else {
                    await conn.sendFile(m.chat, media.url_download, 'imagen.jpg', '', m);
                }
            }
        } else {
            throw '_🍒 تعذر الحصول على محتوى Instagram._';
        }
    } catch (error) {
        throw `_🍒 حدث خطأ أثناء معالجة الطلب:\n\n ${error}_`;
    }
};

handler.help = ['instagram'];
handler.tags = ['dl'];
handler.command = /^(انستا|انستجرام|انستغرام|ig)$/i;

export default handler
