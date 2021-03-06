exports.copy = { command: "xclip", args: [ "-selection", "clipboard" ] };
exports.paste = { command: "xclip", args: [ "-selection", "clipboard", "-o" ] };
exports.encode = function(str) { return new Buffer(str, "utf8"); };
exports.decode = function(chunks) {
	if(!Array.isArray(chunks)) { chunks = [ chunks ]; }

	return Buffer.concat(chunks).toString("utf8");
};
