const Discord = require('discord.js');
const client = new Discord.Client({ fetchAllMembers: true });
const fs = require('fs');



 client.on('guildMemberAdd', member => {

     if (member.guild.id === "683355868645163041") {
    
if (member.user.bot) return;
var Canvas = require('canvas')
var jimp = require('jimp')
const w = ['./img/bull1.png'];
        let Image = Canvas.Image,
            canvas = new Canvas(749, 198),
            ctx = canvas.getContext('2d');
        ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        ctx.stroke();
        ctx.beginPath();

        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 749, 198);

})

                let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".png" : member.user.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
                        ctx.font = '35px agent_orange';
                        ctx.fontSize = '40px';
                        ctx.fillStyle = "#34495E";
                        ctx.textAlign = "center";
                        ctx.fillText(" Welcome to Server Al 3rb ", 300, 60);

                        //ur name
                        ctx.font = '40px Impact';
                        ctx.fontSize = '48px';
                        ctx.fillStyle = "#566573";
                        ctx.textAlign = "center";
                        ctx.fillText(member.user.username, 300, 110);

                         ctx.font = '30px Impact';
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#2C3E50";
                        ctx.textAlign = "center";
                        ctx.fillText("Member Number" + member.guild.memberCount, 300, 150);


                        //Avatar
                    let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                              ctx.arc(75, 101, 63, 0, Math.PI*2);
                                 ctx.closePath();
                                 ctx.clip();
                                 ctx.drawImage(ava, 10, 38, 128, 126);     
client.channels.get("689166102529572880").sendFile(canvas.toBuffer())



})
})

}
});

const Discord = require('discord.js');
const client = new Discord.Client({ fetchAllMembers: true });
const fs = require('fs');



 client.on('guildMemberAdd', member => {

     if (member.guild.id === "683355868645163041") {
    
if (member.user.bot) return;
var Canvas = require('canvas')
var jimp = require('jimp')
const w = ['./img/bull1.png'];
        let Image = Canvas.Image,
            canvas = new Canvas(749, 198),
            ctx = canvas.getContext('2d');
        ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        ctx.stroke();
        ctx.beginPath();

        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 749, 198);

})

                let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".png" : member.user.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
                        ctx.font = '35px agent_orange';
                        ctx.fontSize = '40px';
                        ctx.fillStyle = "#34495E";
                        ctx.textAlign = "center";
                        ctx.fillText(" Welcome to Server Al 3rb ", 300, 60);

                        //ur name
                        ctx.font = '40px Impact';
                        ctx.fontSize = '48px';
                        ctx.fillStyle = "#566573";
                        ctx.textAlign = "center";
                        ctx.fillText(member.user.username, 300, 110);

                         ctx.font = '30px Impact';
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#2C3E50";
                        ctx.textAlign = "center";
                        ctx.fillText("Member Number" + member.guild.memberCount, 300, 150);


                        //Avatar
                    let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                              ctx.arc(75, 101, 63, 0, Math.PI*2);
                                 ctx.closePath();
                                 ctx.clip();
                                 ctx.drawImage(ava, 10, 38, 128, 126);     
client.channels.get("689553074192384205").sendFile(canvas.toBuffer())



})
})

}
});

client.on('message', message => {
    if (message.content.startsWith("invites")) {
    message.guild.fetchInvites()
    .then(invites => message.channel.send(`You Have Been invited  **${invites.find(invite => invite.inviter.id === message.author.id).uses} Members** To This Server `))
     
    }
});


client.on('message',function(message) {
                  if(!message.channel.guild) return;

  const prefix = "";
                    if (message.content === prefix + "discrim") {
    let messageArray = message.content.split(" ");
    let args = messageArray.slice(1);
    
    if (message.author.bot) return;
    
    var discri = args[0]
    let discrim
    if(discri){
    discrim = discri;
    }else{
    discrim = message.author.discriminator;
    }
    if(discrim.length == 1){
        discrim = "000"+discrim
    }
    if(discrim.length == 2){
        discrim = "00"+discrim
    }
    if(discrim.length == 3){
        discrim = "0"+discrim
    }

        const users = client.users.filter(user => user.discriminator === discrim).map(user => user.username);
        return message.channel.send(`
            **Found ${users.length} users with the discriminator #${discrim}**
            ${users.join('\n')}
        `);

/*if(command == "emoji-img"){
        let emojis = msg.guild.emojis
  msg.channel.send({ files: [emoji.url] });
}*/
}
});
client.on('message', message => {
   if (message.content === "roll") {
  message.channel.sendMessage(Math.floor(Math.random() * 100));
    }
});


       client.on('message', message => {
        var args = message.content.split(/[ ]+/)
        if(message.content.includes('gmail')){
           if(!message.channel.guild) return message.reply('** advertising me on DM ? :thinking:   **');
        if (!message.member.hasPermissions('ADMINISTRATOR')){
        message.delete()
    return message.reply(`** Not allowed to advertising Here :angry: ! **`)
    }
        }
    });
    
    client.on('message', message => {
        var args = message.content.split(/[ ]+/)
        if(message.content.includes('snapchat')){
           if(!message.channel.guild) return message.reply('** advertising me on DM ? :thinking:   **');
        if (!message.member.hasPermissions('ADMINISTRATOR')){
        message.delete()
    return message.reply(`** Not allowed to advertising Here :angry: ! **`)
    }
        }
    });
    
    
    client.on('message', message => {
        var args = message.content.split(/[ ]+/)
        if(message.content.includes('instagram')){
            if(!message.channel.guild) return message.reply('** advertising me on DM ? :thinking:   **');
        if (!message.member.hasPermissions('ADMINISTRATOR')){
        message.delete()
    return message.reply(`** Not allowed to advertising Here :angry: ! **`)
    }
        }
    });
    
    
    client.on('message', message => {
        var args = message.content.split(/[ ]+/)
        if(message.content.includes('twitter')){
           if(!message.channel.guild) return message.reply('** advertising me on DM ? :thinking:   **');
        if (!message.member.hasPermissions('ADMINISTRATOR')){
        message.delete()
    return message.reply(`** Not allowed to advertising Here :angry: ! **`)
    }
        }
    });
    
    
    client.on('message', message => {
        var args = message.content.split(/[ ]+/)
        if(message.content.includes('facebook')){
            if(!message.channel.guild) return message.reply('** advertising me on DM ? :thinking:   **');
        if (!message.member.hasPermissions('ADMINISTRATOR')){
        message.delete()
    return message.reply(`** Not allowed to advertising Here :angry: ! **`)
    }
        }
    });
    
    
    
    client.on('message', message => {
        var args = message.content.split(/[ ]+/)
        if(message.content.includes('youtube')){
          if(!message.channel.guild) return message.reply('** advertising me on DM ? :thinking:   **');
        if (!message.member.hasPermissions('ADMINISTRATOR')){
        message.delete()
    return message.reply(`** Not allowed to advertising Here :angry: ! **`)
    }
        }
    
    });
client.on('message', message => {
    if(message.content.includes('discord.gg')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? :thinking:   **');
        if (!message.member.hasPermissions('ADMINISTRATOR')){
        message.delete()
    return message.reply(`** Not allowed to advertising Here :angry: ! **`)
        }
}
});

    client.on('ready', () => {
    console.log('-------------------------')
    console.log(`✨ Name: ${client.user.username}`)
    console.log('-------------------------')
    console.log(`✨ Id: ${client.user.id}`)
    console.log('-------------------------')
    console.log(`✨ Servers: ${client.guilds.size}`)
    console.log('-------------------------')
    console.log(`✨ Members: ${client.users.size}`)
    console.log('-------------------------')
    console.log(`✨ Channels: ${client.channels.size}`)
    console.log('-------------------------')
  
})



client.login('NDg5MDczMDMyMTU3OTg2ODE2.XnEhzg.jZu8C6bHe6x9ajwR93xpyiE-xaM');


