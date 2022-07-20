const katılımcı = {
  "941075067230625803": "999307613642698822",
  "941074179401338900": "999307509045145701"
}; 

const etkinlik = {
  "941885170183708682": "999306180348362914",
  "941885176609374219": "999306590932975627"
}; 

const burclar = {
  "931658642955075604": "999322896210087997",
  "931657544756248606": "999322974907809916",
  "931658863923593297": "999323004087586859",
  "931658464512598056": "999323031589625897",
  "931657587886264340": "999323052070416444",
  "931658178482012201": "999323088057540658",
  "931658397860892672": "999323102343348296",
  "931658529314603008": "999323121154801784",
  "931658575951048714": "999323144479309895",
  "931658251181887508": "999323161973768272",
  "931658687028789289": "999323180047024179",
  "931659095629529168": "999323204688560128"
};

const renkler = {
  "746992558927904891": "999323286959824997",
  "746992700099657830": "999323320728178821",
  "746992666926907393": "999323348746108958",
  "746992603186069615": "999323472884936794",
  "746992734434230383": "999323429150916679"
};

const ilişki = {
  "855054137296814101": "999307940257345617",
  "835704673204830238": "999308047769948210",
  "941885145999368212": "999307841330483330",
  "941885143239524432": "999308223368658964",
  "941885146792071209": "999324267575529544"
}; 

const oyunlar = {
  "880606175274598461":"999323613620604989",
  "880606175761145906":"999323632813744178",
  "880606175387873281":"999323705278734377",
  "880606175408824321":"999323736824094811",
  "880606175178153994":"999323752837947392",
  "880606175488540693":"999323772526006322",
  "843187231539855370":"999323798585225226",
  "932614645892669511":"999323827668521022"
};


module.exports = {
  conf: {
    aliases: ["menüü"],
    name: "menü",
    owner: true,
  },
 
    run: async (client, message, args, durum, kanal) => {
 
      const katılımPush = [];
      const etkinPush = [];
      const burcPush = [];
      const oyunPush = [];
      const renkPush = [];
      const digerPush = [];
      const emoji = (name) => client.emojis.cache.find(x => x.name === name);
    
    
      for (const katılım in katılımcı) {
        let sonuc = katılımcı[katılım];
        let table = new disbut.MessageMenuOption()
          .setLabel(message.guild.roles.cache.get(sonuc) ? message.guild.roles.cache.get(sonuc).name : sonuc)
          .setEmoji(emoji(katılım) ? emoji(katılım).id : katılım)
          .setValue(sonuc)
          katılımPush.push(table);
      };
      let kaldırkatılım = new disbut.MessageMenuOption()
      .setLabel("Rol İstemiyorum")
      .setEmoji("🗑️")
      .setValue("kaldır")
      let katılım = new disbut.MessageMenu()
        katılım.setID("katılım")
        katılım.setPlaceholder(`Etkinlik Rolleri`)
        katılım.setMaxValues(2)
        katılım.setMinValues(1)
        katılım.addOptions(katılımPush,kaldırkatılım)

        for (const etkin in etkinlik) {
          let sonuc = etkinlik[etkin];
          let table = new disbut.MessageMenuOption()
            .setLabel(message.guild.roles.cache.get(sonuc) ? message.guild.roles.cache.get(sonuc).name : sonuc)
            .setEmoji(emoji(etkin) ? emoji(etkin).id : etkin)
            .setValue(sonuc)
            etkinPush.push(table);
        };
        let kaldıretkin = new disbut.MessageMenuOption()
        .setLabel("Rol İstemiyorum")
        .setEmoji("🗑️")
        .setValue("kaldır")
        let etkin = new disbut.MessageMenu()
        etkin.setID("etkin")
        etkin.setPlaceholder(`Dc & Vk Rolleri`)
        etkin.setMaxValues(3)
        etkin.setMinValues(1)
        etkin.addOptions(etkinPush,kaldıretkin)

      for (const burc in burclar) {
        let sonuc = burclar[burc];
        let table = new disbut.MessageMenuOption()
          .setLabel(message.guild.roles.cache.get(sonuc) ? message.guild.roles.cache.get(sonuc).name : sonuc)
          .setEmoji(emoji(burc) ? emoji(burc).id : burc)
          .setValue(sonuc)
     burcPush.push(table);
      };
      let kaldırburc = new disbut.MessageMenuOption()
      .setLabel("Rol İstemiyorum")
      .setEmoji("🗑️")
      .setValue("kaldır")
      let burc = new disbut.MessageMenu()
        burc.setID("burc")
        burc.setPlaceholder(`Burç Rolleri`)
        burc.setMaxValues(1)
        burc.setMinValues(1)
        burc.addOptions(burcPush,kaldırburc)
    
    
      for (const oyun in oyunlar) {
        const sonuc = oyunlar[oyun];
        let table = new disbut.MessageMenuOption()
          .setLabel(message.guild.roles.cache.get(sonuc) ? message.guild.roles.cache.get(sonuc).name : sonuc)
          .setEmoji(emoji(oyun) ? emoji(oyun).id : oyun)
          .setValue(sonuc)
         oyunPush.push(table);
      };
      let kaldıroyun = new disbut.MessageMenuOption()
      .setLabel("Rol İstemiyorum")
      .setEmoji("🗑️")
      .setValue("kaldır")
      let oyun = new disbut.MessageMenu();
      oyun.setID("oyun");
      oyun.setPlaceholder(`Oyun Rolleri`)
      oyun.setMaxValues(8);
      oyun.setMinValues(1);
      oyun.addOptions(oyunPush,kaldıroyun);
    
   for (const renk in renkler) {
        const sonuc = renkler[renk];
        let table = new disbut.MessageMenuOption()
          .setLabel(message.guild.roles.cache.get(sonuc) ? message.guild.roles.cache.get(sonuc).name : sonuc)
          .setEmoji(emoji(renk) ? emoji(renk).id : renk)
          .setValue(sonuc)
        renkPush.push(table);
      };
      let kaldırrenk = new disbut.MessageMenuOption()
      .setLabel("Rol İstemiyorum")
      .setEmoji("🗑️")
      .setValue("kaldır")
      let renk = new disbut.MessageMenu();
      renk.setID("renk");
      renk.setPlaceholder(`Renk Rolleri`)
      renk.setMaxValues(1);
      renk.setMinValues(1);
      renk.addOptions(renkPush,kaldırrenk);
    
  
    
      for (const diger in ilişki) {
        const sonuc = ilişki[diger];
        let table = new disbut.MessageMenuOption()
          .setLabel(message.guild.roles.cache.get(sonuc) ? message.guild.roles.cache.get(sonuc).name : sonuc)
          .setEmoji(emoji(diger) ? emoji(diger).id : diger)
          .setValue(sonuc)
        digerPush.push(table);
      };
      let kaldırdiger = new disbut.MessageMenuOption()
      .setLabel("Rol İstemiyorum")
      .setEmoji("🗑️")
      .setValue("kaldır")
      let diger = new disbut.MessageMenu();
      diger.setID("diger");
      diger.setPlaceholder(`İlişki Rolleri`)
      diger.setMaxValues(1);
      diger.setMinValues(1);
      diger.addOptions(digerPush,kaldırdiger);
    
      if (args[0] === "katılım") {
        message.channel.send(`:tada: Sunucuda sizleri rahatsız etmemek için \`@everyone\` veya \`@here\` atmayacağız. Sadece isteğiniz doğrultusunda aşağıda bulunan tepkilere tıklarsanız Çekilişler,Etkinlikler V/K ve D/C'den haberdar olacaksınız.
\`⦁\` Eğer \`@Etkinlik Katılımcısı\` Rolünü alırsanız sunucumuzda düzenlenecek olan etkinlikler, konserler ve oyun etkinlikleri gibi etkinliklerden haberdar olabilirsiniz. 
        
\`⦁\` Eğer \`@Çekiliş Katılımcısı\` Rolünü alırsanız sunucumuzda sıkça vereceğimiz ${ozinitro} , ${ozispotify} , ${ozinetflix} , ${oziexxen} , ${oziblutv} ve daha nice ödüllerin bulunduğu çekilişlerden haberdar olabilirsiniz. 
        
**NOT:** \`Kayıtlı, kayıtsız olarak hepiniz bu kanalı görebilmektesiniz. Sunucumuz da everyone veya here atılmayacağından dolayı kesinlikle rollerinizi almayı unutmayın.\``, katılım);
      }

      if (args[0] === "etkin") {
        message.channel.send(`${star} Aşağıda ki menüden **Sunucu İçi Oyun** rollerinden dilediğinizi alabilirsiniz.`, etkin);
      }

      if (args[0] === "burc") {
        message.channel.send(`${star} Aşağıda ki menüden **Burç** rollerinden dilediğinizi alabilirsiniz.`, burc);
      }
    
    
      if (args[0] === "oyun") {
        message.channel.send(`${star} Aşağıda ki menüden **Oyun** rollerinden dilediğinizi alabilirsiniz.`, oyun);
      }
    
      if (args[0] === "renk") {
        message.channel.send(`${star} Aşağıda ki menüden **Renk** rollerinden dilediğinizi alabilirsiniz.`, renk);
      }
    
    
      if (args[0] === "iliski") {
        message.channel.send(`${star} Aşağıda ki menüden **İlişki** rollerinden dilediğinizi alabilirsiniz.`, diger);
      }
    
  
    },
  };

    client.on("clickMenu", async (menu) => {

      if (menu.id == "katılım") {
        await menu.reply.think(true);
        await menu.reply.edit("Rollerin güncellendi!");
        let add = [];
        let remove = [];
        let allRemove = [];
        let roller = katılımcı;
        for (const rol in roller) {
          let sonuc = roller[rol];
          allRemove.push(sonuc);
          if (menu.values.includes(sonuc)) {
          await menu.reply.edit(`Başarılı bir şekilde <@&${sonuc}> rolü üzerinize eklendi!`);
            add.push(sonuc);
          } else {
            remove.push(sonuc);
          };
        };
        if (!menu.values.some(value => value === "allDelete")) {
          if (remove.length > 0) {
            await menu.clicker.member.roles.remove(remove);
    
          };
          await menu.clicker.member.roles.add(add);
        
  
        } else {
          await menu.clicker.member.roles.remove(allRemove);
         
  
        };
        };

        if (menu.id == "etkin") {
          await menu.reply.think(true);
          await menu.reply.edit("Rollerin güncellendi!");
          let add = [];
          let remove = [];
          let allRemove = [];
          let roller = etkinlik;
          for (const rol in roller) {
            let sonuc = roller[rol];
            allRemove.push(sonuc);
            if (menu.values.includes(sonuc)) {
            await menu.reply.edit(`Başarılı bir şekilde <@&${sonuc}> rolü üzerinize eklendi!`);
              add.push(sonuc);
            } else {
              remove.push(sonuc);
            };
          };
          if (!menu.values.some(value => value === "allDelete")) {
            if (remove.length > 0) {
              await menu.clicker.member.roles.remove(remove);
      
            };
            await menu.clicker.member.roles.add(add);
          
    
          } else {
            await menu.clicker.member.roles.remove(allRemove);
           
    
          };
          };

      if (menu.id == "burc") {
          await menu.reply.think(true);
          await menu.reply.edit("Rollerin güncellendi!");
          let add = [];
          let remove = [];
          let allRemove = [];
          let roller = burclar;
          for (const rol in roller) {
            let sonuc = roller[rol];
            allRemove.push(sonuc);
            if (menu.values.includes(sonuc)) {
            await menu.reply.edit(`Başarılı bir şekilde <@&${sonuc}> rolü üzerinize eklendi!`);
              add.push(sonuc);
            } else {
              remove.push(sonuc);
            };
          };
          if (!menu.values.some(value => value === "allDelete")) {
            if (remove.length > 0) {
              await menu.clicker.member.roles.remove(remove);
      
            };
            await menu.clicker.member.roles.add(add);
          
    
          } else {
            await menu.clicker.member.roles.remove(allRemove);
           
    
          };
          };
    
      if (menu.id == "oyun") {
        await menu.reply.think(true);
        await menu.reply.edit("Rollerin güncellendi!");
        let add = [];
        let remove = [];
        let allRemove = [];
        let roller = oyunlar;
        for (const rol in roller) {
          let sonuc = roller[rol];
          allRemove.push(sonuc);
          if (menu.values.includes(sonuc)) {
              
            await menu.reply.edit(`Başarılı bir şekilde <@&${sonuc}> rolü üzerinize eklendi!`);
            add.push(sonuc);
          } else {
            remove.push(sonuc);
          };
        };
        if (!menu.values.some(value => value === "allDelete")) {
          if (remove.length > 0) {
            await menu.clicker.member.roles.remove(remove);
          };
          await menu.clicker.member.roles.add(add);
        } else {
          await menu.clicker.member.roles.remove(allRemove);
  
        };
      };
    
      if (menu.id == "renk") {
        await menu.reply.think(true);
        if (!menu.clicker.member.roles.cache.get("945760985673764968") && !menu.clicker.member.roles.cache.get("945761792846626866")) return await menu.reply.edit("Booster & Taglu üye olman gerek!");;
        await menu.reply.edit("Rollerin güncellendi!");
  
        let add = [];
        let remove = [];
        let allRemove = [];
        let roller = renkler;
        for (const rol in roller) {
  
          let sonuc = roller[rol];  
  
          allRemove.push(sonuc);
          if (menu.values.includes(sonuc)) {    
            await menu.reply.edit(`Başarılı bir şekilde <@&${sonuc}> rolü üzerinize eklendi!`);
  
            add.push(sonuc);
          } else {
            remove.push(sonuc);
  
          };
        };
        if (!menu.values.some(value => value === "allDelete")) {
          if (remove.length > 0) {
            await menu.clicker.member.roles.remove(remove);
          };
          await menu.clicker.member.roles.add(add);
        } else {
          await menu.clicker.member.roles.remove(allRemove);
  
        };
      };
      if (menu.id == "diger") {
        await menu.reply.think(true);
        await menu.reply.edit("Rollerin güncellendi!");
        let add = [];
        let remove = [];
        let allRemove = [];
        let roller = ilişki;
        for (const rol in roller) {
          let sonuc = ilişki[rol];
          allRemove.push(sonuc);
          if (menu.values.includes(sonuc)) {
              
            await menu.reply.edit(`Başarılı bir şekilde <@&${sonuc}> rolü üzerinize eklendi!`);
            add.push(sonuc);
          } else {
            remove.push(sonuc);
          };
        };
        if (!menu.values.some(value => value === "allDelete")) {
          if (remove.length > 0) {
            await menu.clicker.member.roles.remove(remove);
           
  
          };
          await menu.clicker.member.roles.add(add);
        } else {
          await menu.clicker.member.roles.remove(allRemove);
        };
      };
  
     
    });