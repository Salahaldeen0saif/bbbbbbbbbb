let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^هلا$/i.test(m.text)) { 
     responses = [ 
 '*وعليكم الاهلا*'  
     ]; 
} else if (/^السلام عليكم|سلام عليكم ورحمه الله وبركاته|سلام عليكم|السلام عليكم ورحمه الله وبركاته$/i.test(m.text)) { 
     responses = [ 
 '*وعليكم السلام ورحمة الله وبركاته*',  
 '*_وعليكم السلام_*', 
     ]; 
   }else if (/^ايسس|ايس|كايدو$/i.test(m.text)) { 
     responses = [ 
'*وش تبي منو؟!!*'
     ]; 
 }else if (/^اخبارك|كيف حالك|شخبارك|كيف|كيفك$/i.test(m.text)) { 
     responses = [ 
'*بخير الحمد لله وانت*'
     ]; 
   }else if (/^هل انت مرتبطة$/i.test(m.text)) { 
     responses = [ 
'*طاهر القلب نقي ذاكر لله*'
   ]; 
   }else if (/^تحبني $/i.test(m.text)) { 
     responses = [ 
'*اكيد يقلبي🙈♥🍒*',
'*ورع عيب احب مطوري بس*',
'*يعني نص نص🌚🍒*',
]; 
   }else if (/^تكرهني$/i.test(m.text)) { 
     responses = [ 
'*في حد يكره القمر*',
'*لا بس لا تتعب نفسك لحبك*',
'*ااي اكرهك بحب مطوري انا*',   ]; 
     
     }else if (/^هاي|هالو$/i.test(m.text)) { 
     responses = [ 
       '*وش هاي ذي قول السلام عليكم*',  

     ]; 
}else if (/^بحبك/i.test(m.text)) { 
     responses = [ 
       '*عيب يبني*', 
       '*بالخاص مو هنا🙈🍒*' 

     ]; 
   }else if (/^فلسطين|🇵🇸$/i.test(m.text)) { 
     responses = [ 
'*~𝑭𝑹𝑬𝑬 𝑷𝑨𝑳𝑬𝑺𝑻𝑰𝑵𝑬~*'
     ]; 
   } else if (/^الحمد لله|بخير|تمام$/i.test(m.text)) { 
     responses = [ 
'*دوووووم♥🍒*'
     ]; 
     }else if (/^عامل ايه|عامل اي|عامل اية$/i.test(m.text)) { 
     responses = [ 
       'الحمدالله',  

     ];
     }else if (/^وين ايس|وين كايدو$/i.test(m.text)) { 
     responses = [ 
       'حاليا غير متوفر اتفضل انا تحت الخدمة',  

     ];
     }else if (/^بوت$/i.test(m.text)) { 
     responses = [ 
       'اسمي كرزة ي مز', 

     ];
     }else if (/^مين مطورك$/i.test(m.text)) { 
     responses = [ 
       '*عمري وحبيب قلبي صلاح*',  

     ]; 
     }else if (/^مساء|مساء$/i.test(m.text)) { 
     responses = [ 
       'مساء الخير',  

     ];
     }else if (/^صباح|صباح$/ .test(m.text)) { 
     responses = [ 
       '*صباح الورد🧸*',  
     ];
       }else if (/^ملل|ملللل|مللللل|مللللللللللل|مللل|ملللللللل$/i.test(m.text)) { 
     responses = [ 
       '*حصل،تحب تلعب؟!اكتب .ك4*',  
     
     ];
            }else if (/^مرحبا$/i.test(m.text)) { 
     responses = [ 
       '*مرحبا🧸*',  
     ];
   }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler;
