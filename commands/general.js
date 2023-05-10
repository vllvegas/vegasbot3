/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : SamPandey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/
const os = require('os');
const { tlang, botpic,cmd, prefix, runtime,Config,formatp } = require('../lib')
const axios = require('axios')
const speed = require('performance-now')
//---------------------------------------------------------------------------
cmd({
        pattern: "chatdectakag",
        desc: "chat with an AI",
        category: "general",
        use: '<Hii,Secktor>',
        filename: __filename,
    },
    async(Void, citel,text) => {
        let zx = text.length;
        if (zx < 30) {
            let {data} = await axios.get(`http://api.brainshop.ai/get?bid=167991&key=aozpOoNOy3dfLgmB&uid=[${citel.sender.split("@")[0]}]&msg=[${text}]`);
            return citel.reply(data.cnt);  
        }
        if (!text) return citel.reply(`Hey there! ${citel.pushName}. How are you doing these days?`);
        const { Configuration, OpenAIApi } = require("openai");
        const configuration = new Configuration({
            apiKey: Config.OPENAI_API_KEY || "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",
        });
        const openai = new OpenAIApi(configuration);
        const completion = await openai.createCompletion({
            model: "text-davinci-002",
            prompt: text,
            temperature: 0.5,
            max_tokens: 80,
            top_p: 1.0,
            frequency_penalty: 0.5,
            presence_penalty: 0.0,
            stop: ['"""'],
        });
        citel.reply(completion.data.choices[0].text);
    }
)
//---------------------------------------------------------------------------
cmd({
        pattern: "script",
        alias: ["git", "github", "repo"],
        desc: "Sends info about repo.",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        let { data } = await axios.get('https://api.github.com/repos/SamPandey001/Secktor-Md')
        let cap = `*🌐 VEGASFORUM ♦️*

●. *Online Grup :* https://chat.whatsapp.com/CYuUPNdztoVJjGnrnk5n4f

●. *Website:* https://vllvegas.xyz

●. *Kurucu:* VEGAS | VEGASFORUM


Project By Vegas 
`
        let buttonMessaged = {
            image: { url: await botpic() },
            caption: cap,
            headerType: 4,
            }
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)

//---------------------------------------------------------------------------

cmd({

            pattern: "logo",

            desc: "(menu cmdlist).",

            category: "downloader",

            react: "🎲",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttons = [{

                    buttonId: `${prefix}system`,

                    buttonText: {

                        displayText: "System",

                    },

                    type: 1,

                },

                  {

                    buttonId: `${prefix}ping`,

                    buttonText: {

                        displayText: "Ping",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    url: await botpic(),

                },

                caption: `
.logo1 text
.logo2 text
.logo3 text
.logo4 text
.logo5 text
.logo6 text
.logo7 text
.logo8 text
.logo9 text
.logo10 text
.logo11 text
.logo12 text
.logo13 text
.logo14 text
.logo15 text
.logo16 text
.logo17 text
.logo18 text
.logo19 text
.logo20 text
.logo21 text
.logo22 text
.logo23 text
.logo24 text
.logo25 text
.logo26 text
.logo27 text
.logo28 text
.logo29 text
.logo30 text


Project By Vegas
`,

                footer: tlang().footer,


                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )

//---------------------------------------------------------------------------

cmd({

            pattern: "groupcmdnew",

            desc: "(menu cmdlist).",

            category: "downloader",

            react: "📂",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttons = [{

                    buttonId: `${prefix}git`,

                    buttonText: {

                        displayText: "Github",

                    },

                    type: 1,

                },

                  {

                    buttonId: `${prefix}system`,

                    buttonText: {

                        displayText: "Info",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    url: await botpic(),

                },

                caption: `

                

📟 *Command:-* .sticker
ℹ️ *Description:-* Fotoğrafı Etiketleyetek Deneyin 
🔥 *Help:-* .sticker Herhangi Bir Fotoğraf Veya Videodan Bahset 


📟 *Command:-* .promote
ℹ️ *Description:-* Yöneticiyi Terfi Ettir 
🔥 *Help:-* .promote Herhangi Bir Kullanıcıyı Etiketle  


📟 *Command:-* .demote
ℹ️ *Description:-* Yönetici Seviyesini Düşür 
🔥 *help:-* .promote Herhangi Bir Kullanıcıyı Etiketle  


📟 *Command:-* .ban
ℹ️ *Description:-* Kullanıcıyı Banlar
🔥 *Help:-* .ban Herhangi Bir Kullanıcıyı Etiketle 


📟 *Command:-* .unban
ℹ️ *Description:-* Kilitli Kullanıcı Engellemesini Kaldırır 
🔥 *Help:-* .unban Herhangi Bir Kullanıcıyı Etiketle 


📟 *Command:-* .kick
ℹ️ *Description:-* Gruptaki Kullanıcıyı Kaldırır
🔥 *Help:-* .kick Herhangi Bir Kullanıcıyı Etiketle 


📟 *Command:-* .add
ℹ️ *Description:-* Gruba Katılımcı Ekler
🔥 *Help:-* .add WhatsApp Numarası 


📟 *Command:-* .poll
ℹ️ *Description:-* Grup İçin Anket Oluşturur
🔥 *Help:-* .poll Soru Seçenek1 Seçenek2 Seçenek3 


📟 *Command:-* .profile
ℹ️ *Description:-* Profilden Bilgi Alır 
🔥 *Help:-* .profile Herhangi Bir Kullanıcıyı Etiketle 


📟 *Command:-* .group
ℹ️ *Description:-* Group Sesi Kapatır veya Sesi Açar
🔥 *Help:-* .group


📟 *Command:-* .gdp
ℹ️ *Description:-* Group Profil Fotoğrafı Değiştirir
🔥 *Help:-* .gdp Herhangi Bir Fotoğrafı Etiketle 


📟 *Command:-* .del
ℹ️ *Description:-* Mesajı Siller 
🔥 *Help:-* .del tag message


📟 *Command:-* .antilink
ℹ️ *Description:-* Bağlantıları Engeller
🔥 *Help:-* .antilink Active veya Deactive


📟 *Command:-* .tag
ℹ️ *Description:-* Tag Tüm Grup Kullanıcıları Etiketler
🔥 *Help:-* .tag


📟 *Command:-* .getjids
ℹ️ *Description:-* Jid'i alır
🔥 *Help:-* .getjids


📟 *Command:-* .rank
ℹ️ *Description:-* Sıralamayı Kontrol Eder
🔥 *Help:-* .rank Herhangi Bir Kullanıcıyı Etiketle 


📟 *Command:-* .setwelcome
ℹ️ *Description:-* Karşılama Mesajı Değiştirir
🔥 *Help:-* .setwelcome hoş geldiniz mesajınız 


📟 *Command:-* .setgoodbye
ℹ️ *Description:-* Ayrılma Mesajı Değiştirir 
🔥 *Help:-* .setgoodbye Hoşçakal Mesajınız 


📟 *Command:-* .gs
ℹ️ *Description:-* Grup Ayarları Değişikliği Yapar 
🔥 *Help:-* .gs


📟 *Command:-* .settings
ℹ️ *Description:-* Grup Ayarlarını Değiştirir
🔥 *Help:-* .settings


⦿. *Project By :* ${citel.pushName}

`,

                footer: tlang().footer,

                buttons: buttons,

                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )

    

    

    //---------------------------------------------------------------------------

cmd({

            pattern: "mjakageksjsgwusksgaisjsgajhshshshshehbenu",

            desc: "(menu cmdlist).",

            category: "downloader",

            react: "🔖",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {


            let buttonMessage = {

                image: {

                    url: await botpic(),

                },

                caption: `

┌────────────────────────────
│  👥 VegasBot Komutları
└────────────────────────────


┌─(📥 Görüntü Komutları )
│.song
│.video
│.apk
│.docsong 
│.docvideo
│.fb
│.tiktok
│.img
│.mp4down
│.fbs
└─────────◉
┌─(🔍 Arama Komutları )
│.findvideo
│.findsong
│.yts
│.weather
│.movie
└─────────◉
┌─(🧰 Fotoğraf Komutları )
│.sticker
│.attp
│.ttp
│.logo
│.ss
│.trt
└─────────◉
┌─(👥 Kullanıcı Komutları )
│.kick
│.promote
│.demote
│.htg
│.setwelcome
│.setgoodbye
│.gs
│.ban
│.unban
│.ping
│.del
│.gdp
└─────────◉
┌─(🧑‍💻 Admin Komutları )
│.ujid
│.block
│.unblock
│.restart
│.join
│.save
│.dnote
│.dallnote
└─────────◉
┌─( 🎮 Oyun Komutları )
│.xo
│.dadu
└─────────◉
┌─(💬 Diğer Komutlar )
│.alive
│.rank
│.profile
│.system
│.eval
│.qr
│.sn
└─────────◉

Project By Vegas
`,

                footer: tlang().footer,


                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )

//---------------------------------------------------------------------------

cmd({

            pattern: "gs",

            desc: "(menu cmdlist).",

            category: "downloader",

            react: "⚙️",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttonMessage = {

                image: {

                    url: await botpic(),

                },

                caption: `

┏━━━━━━━━━━━━━━━━━━━━━━━━━
┃  *GRUP AYARLARINI DEĞİŞTİR*
┗━━━━━━━━━━━━━━━━━━━━━━━━━



🔇 *GRUBU SUSTUR  -* .group close
🔊 *GRUBU AKTİFLEŞTİR -* .group open


✅ *ANTİLİNK AKTİFLEŞTİR -* .act antilink
❌ *ANTİLİNK KAPAT -* .deact antilink


✅ *BU GRUPTA BOTU AKTİF EDER -* .bot on
❌ *BU GRUPTA BOTU KAPATIR -* .bot off


✅ *AKTİF EKLE VE SOL MSJ  -* .act events
❌ *EKLE VE SOL MSJ'Yİ DEVRE DIŞI BIRAK -* .deact events

Project By Vegas 
`,


                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )

//---------------------------------------------------------------------------

cmd({

            pattern: "ownercmdnew",

            desc: "(menu cmdlist).",

            category: "downloader",

            react: "👨‍💻",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text,{isCreator}) => {

         

            let buttons = [{

                    buttonId: `${prefix}owner`,

                    buttonText: {

                        displayText: "Owner",

                    },

                    type: 1,

                },

                  {

                    buttonId: `${prefix}git`,

                    buttonText: {

                        displayText: "Deploy Site",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    url: await botpic(),

                },

                caption: `

📟 *Command:-* .install
ℹ️ *Description:-* Eklentileri Yükler
🔥 *Help:-* .install Eklentinin Linkini Girin


📟 *Command:-* .plugins
ℹ️ *Description:-* Eklenti Görünümünü Yükler
🔥 *Help:-* .plugins 


📟 *Command:-* .block
ℹ️ *Description:-* Kullanıcıyı Engeller
🔥 *Help:-* .block Kullanıcıyı Etiketle Veya Özelden Yazın


📟 *Command:-* .unblock
ℹ️ *Description:-* Kullanıcının Engellini Kaldırır
🔥 *Help:-* .unblock Kullanıcıyı Etiketle Veya Özelden Yazın


📟 *Command:-* .remove
ℹ️ *Description:-* Eklentiyi Kaldırır 
🔥 *Help:-* .remove Eklentinin Linkini Girin


📟 *Command:-* .join
ℹ️ *Description:-* Whatsapp Grup URL'sini Kullanarak Gruba Katılır
🔥 *Help:-* .join Grup Urlsini Yazın


*📟Command:-* .restart
ℹ️ *Description:-* Botu Yeniden Başlatır
🔥 *Help:-* .restart


📟 *Command:-* .save
ℹ️ *Description:-* mongodb'dan Notları Kaydeder  
🔥 *Help:-* .save prabath-md


📟 *Command:-* .get
ℹ️ *Description:-* Kayıtlı Notları Getirir
🔥 *Help:-* .get


📟 *Command:-* .dnote
ℹ️ *Description:-* Notu Siler
🔥 *Help:-* .dnote Not ID'sini Girer


📟 *Command:-* .dallnote
ℹ️ *Description:-* Tüm Kayıtlı Notları Siler
🔥 *Help:-* .dallnote


⦿. *Project By:* ${citel.pushName}

`,

                footer: tlang().footer,

                buttons: buttons,

                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )

//---------------------------------------------------------------------------

cmd({

            pattern: "othercmdnew",

            desc: "(menu cmdlist).",

            category: "downloader",

            react: "🎊",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttons = [{

                    buttonId: `${prefix}Owner`,

                    buttonText: {

                        displayText: "Owner",

                    },

                    type: 1,

                },

                  {

                    buttonId: `${prefix}install https://gist.github.com/prabathLK/01f3859256a7130f234ac54aeebf486e/raw`,

                    buttonText: {

                        displayText: "Install Voice Reply",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    url: await botpic(),

                },

                caption: `

📟 *Command:-* .system
ℹ️ *Description:-* sistem durumu 
🔥 *Help:-* .system


📟 *Command:-* .weather
ℹ️ *Description:-* Havadurumu Bildirir
🔥 *Help:-* .weather Konumunu Yaz


📟 *Command:-* .eval
ℹ️ *Description:-* run codes
🔥 *Help:-* .eval 


📟 *Command:-* .chat
ℹ️ *Description:-* Sohbet Botu
🔥 *Help:-* . .chat bot


📟 *Command:-* .trt
ℹ️ *Description:-* Google Çeviri 
🔥 *Help:-* .trt active


⦿. *REQUEST BY:* ${citel.pushName}

`,

                footer: tlang().footer,

                buttons: buttons,

                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )

//---------------------------------------------------------------------------

cmd({

            pattern: "concmdnew",

            desc: "(menu cmdlist).",

            category: "downloader",

            react: "🔄",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttons = [{

                    buttonId: `${prefix}Git`,

                    buttonText: {

                        displayText: "Github",

                    },

                    type: 1,

                },

                  {

                    buttonId: `${prefix}rank`,

                    buttonText: {

                        displayText: "Rank",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    url: await botpic(),

                },

                caption: `

📟 *Command:-* .trt
ℹ️ *Description:-* Çeviri Yapar
🔥 *Help:-* .trt Bir Yazı Seç


📟 *Command:-* .sticker
ℹ️ *Description:-* Fotoğraf Veya Videoyu Sticker Yapar
🔥 *Help:-* .sticker Video Veya Fotoğraf Etiketle

⦿. *REQUEST BY:* ${citel.pushName}

`,

                footer: tlang().footer,

                buttons: buttons,

                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )



//---------------------------------------------------------------------------

cmd({

            pattern: "getadmin",

            desc: "(menu cmdlist).",

            category: "downloader",

            react: "😾",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttons = [{

                    buttonId: `${prefix}promote 94762280384`,

                    buttonText: {

                        displayText: "Get Admin",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    url: await botpic(),

                },

                caption: `



BayBay 😹💔 

`,

                footer: tlang().footer,

                buttons: buttons,

                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {


            });

        }

    )

