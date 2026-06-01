function generateCoupon() {
  // Genera un código aleatorio basado en Math.random
  const randomPart = Math.random().toString(36).substring(2, 7).toUpperCase();
  return `COUPON-${randomPart}`;
}

module.exports = { generateCoupon };
