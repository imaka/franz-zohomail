import path from 'path';

module.exports = (Franz) => {
  const getMessages = function getMessages() {
    let count = 0;

    const unreadLabel = document.querySelector('#zm_unread .zmTreeCount');

    if (unreadLabel.length > 0) {
      count = parseInt(unreadLabel.innerHTML, 10);
      if (isNaN(count)) {
        // Just incase we don't end up with a number, set it back to zero (parseInt can return NaN)
        count = 0;
      }
    }

    // set Franz badge
    Franz.setBadge(count);
  };

  Franz.injectCSS(path.join(__dirname, 'service.css'));
  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
