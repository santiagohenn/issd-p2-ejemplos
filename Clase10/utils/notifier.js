const emailService = require('./emailService');

function notifyUser(user, message) {
  if (!user.email) {
    return false;
  }
  return emailService.sendEmail(user.email, message);
}

module.exports = { notifyUser };
