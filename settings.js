//base by DGXeon
//recode by GIDDY TENNOR 
//YouTube: @GIDDYTENNOR


const fs = require('fs')
const chalk = require('chalk')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


global.SESSION_ID = process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0VHRUFrN0MrR2NJamZSMjg0ZWxPMi9iN2lsUEk4cENMSTk0R3JvekVYYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK2JEQkYxYS9lcCtUTEw1TTh3UlNEQTBEbkg5MVhvUVNFbk5sdHNsTlVVbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyTXh3NCtIS0pOK3dtS2pFcGFHZGkxS0VPRnM5enFuaG51ZGRVY0hoemtrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2eEJ1OWpoVlBGUGNJT214MkwzeEM4TWoya0pqZWNDR2NSakZ4ZWYzR0JNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldLNTdUdFVQTHhYZzZZdEhQNVk3c2xqYVNGclZ5VFkvcWY4NVBtY0srSE09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImgwQXBmOVYvemlvSjRlem9yb0E5Mkh1cFdtYzFISkY4eUJaYlArOGQ1aW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEM0YlFpcFZCTyticy8rWkU0NlJyWlB0ZDlrMEIyWFRzZXVhOGF4czRuUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRExnQzhZWGk0QnhKZTdKRTB4QWY4Zmx0cEwvZWJCcFV4NTYvdnZoWkYyYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhPUitRakE3Z1ZDL0pVd0JoYU1NeGFUNE1pNEE4aWlKN0RLZmx2eCtpRFZqc1QycTFDaDJkQzNyM3pYZ2g4emdQdnhnZkJMSmN5T3FlbjhsOFFiYkR3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTEsImFkdlNlY3JldEtleSI6Im5pY3JaemtvZGhoam52bUh5NzZmaUZjOFdubHdlaWNaVVlVSEthTHlYZG89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkNzc3l3dXQwVDNhNk1tdTZEVXYxNmciLCJwaG9uZUlkIjoiNThhYmEyOTItY2JlNy00MGQ0LTliZGMtOWM2YmIyNmM3NTc5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpZcUlmelNqSS9xUXZpdkNXS05pRUFRTG50ND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYTUZ6eXUvZU9MZlozVkluWk1TVDhLTmVEREU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSEI5NDZNS1ciLCJtZSI6eyJpZCI6IjIyODkzNjk3NTU3OjM5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdl5QgIFxu8J2XqCAgXG7wnZeaICBcbvCdl6ggIFxu8J2XpiAgXG7wnZenICBcblxu8J2XoCAgXG7wnZeUICBcbvCdl6EgIFxu8J2XrCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSXFJdTVFRkVNZXBsOEFHR0J3Z0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidkdjcVB2L3RKbWRPTGsxcXZNS2ZhYlYyZk1pa0tGTi8rTWd2dnpUeVJUbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVDlLajl0S0VlMHRoaExrM05KMzdkYXZoQW5MaVFqS0hkbVQ4ZXFtTHhxVnlCV2VYa2lpT0txTmpSWFV4UjdMVUlOeTNXWTgwSldYNnV5aW5WUnBXQXc9PSIsImRldmljZVNpZ25hdHVyZSI6IkZUZlVSOXBTUjVyWkp6eDRNSit1dXM2dlVEd0tyYkhzYzh3bEZ1eUN1N25oc2liOWsvbS9BYjRnU0s3UDlYUDJxT1JWSjVodkV5WWlOYUdrcUV2YkNBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjI4OTM2OTc1NTc6MzlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYnhuS2o3LzdTWm5UaTVOYXJ6Q24ybTFkbnpJcENoVGYvaklMNzgwOGtVNiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0NTIxMjYyNywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFOancifQ==' 
//owmner v card
global.ytname = "YT: GIDDYTENNOR" //ur yt chanel name
global.socialm = "IG: @GIDDYTENNOR" //ur github or insta name
global.location = "Kenya" //ur location

//new
global.botname = process.env.BOT_NAME ||'𝐁𝐞𝐥𝐥𝐚𝐡 𝐗𝐦𝐝' //enter your  bot name here
global.ownernumber = process.env.OWNER_NUMBER ||'22893697557' //ur owner number
global.ownername = '© TENNOMODZ' //ur owner name
global.websitex = "https://whatsapp.com/channel/0029VaPZWbY1iUxVVRIIOm0D" //"https://chat.whatsapp.com/JmsgzJllAAB8zHfQcJXxES"
global.wagc = "https://chat.whatsapp.com/CzFlFQrkdzxFw0pxCBYM7H" //"https://chat.whatsapp.com/JmsgzJllAAB8zHfQcJXxES"
global.themeemoji = '🪀'
global.wm = "GIDDY TENNOR"
global.botscript = 'https://whatsapp.com/channel/0029VaPZWbY1iUxVVRIIOm0D' //'https://chat.whatsapp.com/JmsgzJllAAB8zHfQcJXxES' //script link
global.packname = process.env.PACK_NAME ||"VolTah Xmd" //enter your stickers author name here
global.author = "Giddy-Tennor"
global.creator = "254703726139@s.whatsapp.net"
global.xprefix = process.env.BOT_PREFIX ||'.'
global.hituet = 0

//bot settings 
global.autoblocknumber = process.env.AUTOBLOCK_NUMBER || '263,234' //set autoblock country code
global.antiforeignnumber = process.env.ANTIFOREIGN_NUMBER || '' //set anti foreign number country code
global.mode = process.env.MODE || 'public' //set bot public/private
global.anticall = process.env.ANTI_CALL || 'false' //bot blocks user when called
global.autostatusview = process.env.AUTOSW_VIEW || 'true' //auto status/story view
global.adminevent = true //show promote/demote message
global.groupevent = true //show update messages in group chat
//msg
global.autorecording = process.env.AUTO_RECORDING || 'false'
global.autotyping = process.env.AUTO_TYPING || 'true'

global.mess = {
	limit: 'Your limit is up <\>',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
	owner: 'Bellah Xmd owner only<\>',
    admin: 'Bot is not admin<\>',
    group: 'feature for group only<\>',
    done: 'Done ✓',
    error: 'Error !',
    success: 'Succes •'
}
//thumbnail


let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
