const foot = [
'https://telegra.ph/file/18637808207c7ed6100f7.mp4', 
'https://telegra.ph/file/9a55163a23a098835c40d.mp4', 
'https://telegra.ph/file/3065acb08ecda01db241a.mp4', 
'https://telegra.ph/file/1101f962666061f87639c.mp4', 
'https://telegra.ph/file/ad9c52aab44d1a7a016d1.mp4',
'https://telegra.ph/file/ebafbecce76a0cb9cd70c.mp4', 
'https://telegra.ph/file/d0f9cb760a1472d3e1b24.mp4', 
'https://telegra.ph/file/eb93fc0d9528c747d9fa7.mp4', 
'https://telegra.ph/file/1e79fe62f2efa718385cc.mp4', 
'https://telegra.ph/file/1d3033bdcf941b92a8b69.mp4', 
'https://telegra.ph/file/148dcadb72c631e0a9d1c.mp4', 
'https://telegra.ph/file/defdae03df504720a8947.mp4', 
'https://telegra.ph/file/2093f37370f0ba5c0fa7e.mp4',
'https://telegra.ph/file/a0054e97bd049ccf8103e.mp4', 
  'https://telegra.ph/file/0c4046c6477431bbed40d.mp4', 
'https://telegra.ph/file/cd611bb1e76ceac182de8.mp4', 
'https://telegra.ph/file/809ae028a0f5e0f3c7657.mp4', 
  'https://telegra.ph/file/3b7124897a86c1546b905.mp4', 
  'https://telegra.ph/file/372bf4e22cd122fe442de.mp4', 
'https://telegra.ph/file/1082224ffd0af09ae142b.mp4', 
'https://telegra.ph/file/2184f88cd13ae70b904a0.mp4', 

];


let handler = async (m, { conn }) => { 

m.react('📽️') 
  conn.sendFile(m.chat, foot[Math.floor(Math.random() * foot.length)], 'dedo.webp', '', m)
}
handler.limit = 10;
handler.help = ['dedo']
handler.tags = ['game']
handler.command = ['كوره', 'football'] 

export default handler
