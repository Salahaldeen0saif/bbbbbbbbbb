let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^هلا$/i.test(m.text)) { 
     responses = [ 
 '*وعليكم الهلا*'  
     ]; 
} else if (/^السلام عليكم|سلام عليكم ورحمه الله وبركاته|سلام عليكم|السلام عليكم ورحمه الله وبركاته$/i.test(m.text)) { 
     responses = [ 
 '*وعليكم السلام ورحمة الله وبركاته*',  
 '*وعليكم السلام*', 
     ]; 
   }else if (/^ايس|كايدو$/i.test(m.text)) { 
     responses = [ 
'*وش تبي منو؟!!*'
     ]; 
 }else if (/^اخبارك|كيف حالك|عامل ايه|شخبارك|كيفك$/i.test(m.text)) { 
     responses = [ 
'*بخير الحمد لله وانت*'
     ]; 
   }else if (/^هل انتي مرتبطة؟$/i.test(m.text)) { 
     responses = [ 
'*طاهر القلب نقي ذاكر لله*'
   ]; 
   }else if (/^تحبنيي$/i.test(m.text)) { 
     responses = [ 
'*اكيد يقلبي🙈♥🍒*',
'*ورع عيب احب مطوري بس*',
'*يعني نص نص🌚🍒*',
]; 
   }else if (/^تكرهيني$/i.test(m.text)) { 
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
     }else if (/^كرزه|كرزة|كروزتي$/i.test(m.text)) { 
     responses = [ 
       '*عيون كرزة 😍🍒*',  
       '*اي يقلبي وش تبي*'

     ];
     }else if (/^وين ايس|وين كايدو$/i.test(m.text)) { 
     responses = [ 
       '*حاليا غير متوفر اتفضل انا تحت الخدمة*',  

     ];
     }else if (/^بوت$/i.test(m.text)) { 
     responses = [ 
       '*اسمي كرزة بعد اذنك*', 

     ];
     }else if (/^مين مطورك$/i.test(m.text)) { 
     responses = [ 
       '*عمري وحبيب قلبي صلاح*',  

     ]; 
     }else if (/^مساء|مساء$/i.test(m.text)) { 
     responses = [ 
       '*مساء الخير*',  
       '*مساء الورد*'
     ];
     }else if (/^صباح|صباح$/ .test(m.text)) { 
     responses = [ 
       '*صباح الورد🧸*',  
     ];
       }else if (/^ملل|ملللل|مللللل|مللللللللللل|مللل|ملللللللل$/i.test(m.text)) { 
     responses = [ 
       '*حصل،تحب تلعب؟!اكتب .ك3*',  
     
     ];
            }else if (/^اتفق$/i.test(m.text)) { 
     responses = [ 
       '*اطلللللق*',  
      
      ];
            }else if (/^طرد$/i.test(m.text)) { 
     responses = [ 
       '*ذا حرام تستخدم فيه امر الطرد اسف م اطرد اشكال زي كذا*', 

      ];
            }else if (/^بنام$/i.test(m.text)) { 
     responses = [ 
       '*تصبح على خير*', 

      ];
            }else if (/^كفو$/i.test(m.text)) { 
     responses = [ 
       '*كفو مطوري*', 

      ];
            }else if (/^تست$/i.test(m.text)) { 
     responses = [ 
       '*تست شغال ي قلبي*', 

      ];
            }else if (/^منور|بنورك$/i.test(m.text)) { 
     responses = [ 
       '*بنور مطوري*', 

      ];
            }else if (/^جيت$/i.test(m.text)) { 
     responses = [ 
       '*منور*', 

      ];
            }else if (/^احا$/i.test(m.text)) { 
     responses = [ 
       '*عيب يبني ده قروب محترم*', 

      ];
            }else if (/^هههههههههههههههههههههههههه|😂😂😂$/i.test(m.text)) { 
     responses = [ 
       '*دوم*', 
       '*ادام الله سعادتك وفرحك*'

     ];
   }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler;
