import jwt from 'jsonwebtoken'

const verifyAdmin = (req, res, next) => {
    const token = req.cookies.admin_token
    if (!token) return res.status(401).json({ message: 'Not authenticated' })

    try {
        const verifiedToken = jwt.verify(token, process.env.JWT_SECRET)
        req.admin = verifiedToken
        next()
    } catch (err) {
            res.status(401).json({ message: 'Token invalid or expired' })
    }
}

export default verifyAdmin