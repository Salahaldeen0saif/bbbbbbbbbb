import fetch from 'node-fetch';
import cheerio from 'cheerio-without-node-native';
import {
    toPTT
} from '../lib/converter.js';

const handler = async (m, {
    conn,
    args,
    usedPrefix,
    command
}) => {

    const sender = m.sender.split(`@`)[0];

    try {
        if (!args[0] || !/^https?:\/\//i.test(args[0])) {
            return conn.reply(m.chat, `*هذا الامر خاص بتحميل فيديوهات الفيسبوك على شكل ملف وايضا على شكل فيديو  سيرسلها لك بالجودة  العالية و المتوسطة نكتب هكذا مثال :*\n*.facebook3* https://www.facebook.com/CrazyEditor2/videos/1048242439453391`, m);
        }

        const response = await fetch('https://fdown.net/download.php', {
            method: 'POST',
            body: new URLSearchParams({
                'URLz': args[0]
            }),
        });

        m.reply('انتظر من فضلك......\n'+wait);

        const html = await response.text();
        const $ = cheerio.load(html);

        const title = $('.lib-row.lib-header').text().trim();
        const description = $('.lib-row.lib-desc').text().trim();

        const mp4Links = $('a[href*=".mp4"]').map((i, el) => $(el).attr('href')).get();

        if (mp4Links.length === 0) {
            return conn.reply(m.chat, 'لم يتم العثور على مقاطع فيديو MP4 في عنوان URL المحدد.', m);
        }

        let sdLink = mp4Links[0];
        let hdLink = mp4Links.length > 1 ? mp4Links[1] : mp4Links[0];

        const sizeSD = (await fetch(sdLink).then(res => res.buffer())).length;
        const sizeHD = (await fetch(hdLink).then(res => res.buffer())).length;

        let sdWarning = '';
        let hdWarning = '';

        if (sizeSD < sizeHD) {
            sdWarning = 'سيتم تنزيل ملفات SD وارسالها لأنها أصغر من HD';
            conn.reply(m.chat, sdWarning, m);
        } else {
            hdWarning = 'سيتم تنزيل الملفات عالية الدقة وارسالها لأنها أصغر من ملفات SD';
            conn.reply(m.chat, hdWarning, m);
        }

        for (let index = 0; index < mp4Links.length; index++) {
            const link = mp4Links[index];
            const buffer = await fetch(link).then(res => res.buffer());
            const resolution = index === 0 ? 'SD' : 'HD';
            const caption = `جودة الفيديو: (${resolution})\n${title}\n\n${description}\nرابط الفيديو: ${args[0]}`;
            await conn.sendMessage(
                m.chat, {
                    video: buffer,
                    mimetype: "video/mp4",
                    fileName: `video_${index + 1}.mp4`,
                    caption: ` هذا هو الفيديو الخاص بك@${sender} \n${caption}`,
                    mentions: [m.sender],
                }, {
                    quoted: m
                },
            );
            await conn.sendMessage(
                m.chat, {
                    document: buffer,
                    mimetype: "video/mp4",
                    fileName: `video_${index + 1}.mp4`,
                    caption: `هذا هو الفيديو الخاص بك @${sender} *DOCUMENT VERSION* \n${caption}`,
                    mentions: [m.sender],
                }, {
                    quoted: m
                },
            );
        }

        const audioBuffer = await fetch(sdLink).then(res => res.buffer());

        let audio = await toPTT(audioBuffer, 'mp4');
        if (!audio.data) throw 'لا يمكن تحويل  هذا الفيديو إلى صوت';
        conn.sendFile(m.chat, audio.data, 'audio.mp3', '', m, true, {
            mimetype: 'audio/mp3'
        });
        await conn.sendMessage(
            m.chat, {
                audio: audioBuffer,
                mimetype: "mpeg/mp3",
                fileName: `audio.mp3`,
                caption: ``,
                mentions: [m.sender],
            }, {
                quoted: m
            },
        );

    } catch (error) {
        console.error('وقع خطأ:', error);
        conn.reply(m.chat, 'حدث خطأ أثناء معالجة طلبك.');
    }
};

handler.help = ['facebook3'];
handler.tags = ['downloader'];
handler.command = /^face$/i;

export default handler;
