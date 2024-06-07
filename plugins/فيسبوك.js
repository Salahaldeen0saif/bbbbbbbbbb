import fg from "api-dylux";
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0])
    return m.ftext(
      `*◦أدخل رابطًا لمقطع فيديو على Facebook.*\n*◦مثال:* ${
        usedPrefix + command
      } https://fb.watch/hPoaWhs8af/`
    );
  await conn.sendNyanCat(
    m.chat,
    global.wait,
    adnyancat,
    addescargas,
    null,
    script,
    m
  );
  try {
    let result = await fg.fbdl(args[0]);
    conn.sendFile(
      m.chat,
      result.videoUrl,
      "fb.mp4",
      `🐢 ⤿ العنوان: ${result.title}`,
      m
    );
  } catch {
    m.reply(
      "*_🐢 عذرًا، حدثت مشكلة أثناء محاولة تنزيل الملف._*"
    );
  }
};
handler.help = ["facebook"].map((v) => v + " *<enlace>*");
handler.tags = ["downloader"];
handler.command = /^((فيس|فيسبوك)?)$/i;

export default handler;
