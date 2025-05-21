const getCookieData = (cookies) => cookies?.usuario || null;

const getUserInfo = (req, res) => {
    const usuario = getCookieData(req.cookies);
    res.json({ usuario });
};

const setCookie = (req, res) => {
    res.cookie('usuario', 'Juan', {
        httpOnly: true,
        maxAge: 60000,
        sameSite: 'Lax',
    });
    res.json({ status: 'ok', msg: 'Cookie creada' });
};

const deleteCookie = (req, res) => {
    res.clearCookie('usuario');
    res.json({ status: 'ok', msg: 'Cookie borrada' });
};

const setTheme = (req, res) => {
    const { theme } = req.body;
  
    if (theme === 'dark' || theme === 'light') {
      res.cookie('theme', theme, {
        maxAge: 1000 * 60 * 60 * 24 * 30, // 30 días
        httpOnly: false,
        sameSite: 'Lax',
      });
      res.status(200).json({ message: 'Tema guardado en cookie' });
    } else {
      res.status(400).json({ error: 'Tema inválido' });
    }
}

module.exports = {
    getUserInfo,
    setCookie,
    deleteCookie,
    setTheme
};
