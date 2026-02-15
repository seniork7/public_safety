const logoutAdmin = (req, res) => {
        res.clearCookie('admin_token', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
    })
    return res.json({ message: 'Logged out' })
}

export default logoutAdmin
