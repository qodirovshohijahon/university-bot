const config = {
	mongoURL: getConf("MONGO_URL", "mongodb://mongo:27017/mongodb"),
	botToken: getConf("BOT_TOKEN", "1524380805:AAEVbtnt82_B2-w1_bmERK2G-4l86Z3hc10"),
	groupInviteLink: getConf("GROUP_INVITE_LINK", "http://t.me/+VEoHHOeZWxTDGc9A")
};

function getConf(name, def = "") {
	if (process.env[name]) {
		return process.env[name];
	}
	return def;
}

module.exports = config;
