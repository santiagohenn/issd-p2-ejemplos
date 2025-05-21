const express = require('express');
const router = express.Router();
const {
  getUserInfo,
  setCookie,
  deleteCookie,
  setTheme
} = require('../controllers/cookieController');

router.get('/api/user', getUserInfo);
router.get('/api/set', setCookie);
router.get('/api/delete', deleteCookie);

module.exports = router;