const path = require('path');

module.exports = (Franz, options) => {
  function getMessages() {
		var badge = document.getElementsByClassName('buffer-highlight-high');
		var count = badge.length;
		Franz.setBadge(count);
	};
  Franz.loop(getMessages);
  Franz.injectCSS(path.join(__dirname, 'css', 'franz.css'));
};
