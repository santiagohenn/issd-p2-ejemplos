const emailService = require('../utils/emailService');

describe('Testeo email service', () => {

  test('test email', () => {
    
    expect(emailService.sendEmail("santi@santi.com", "email falso")).toBe(true);

  });

});

