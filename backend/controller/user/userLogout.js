async function userLogout(req, res) {
    try {
        const tokenOption = {
            httpOnly: true,
            secure: true,
            sameSite: 'None',
            path: '/' // Matches login cookie path
        };
        res.clearCookie("token", tokenOption);
        
        // res.set('Cache-Control', 'no-store'); // Prevent caching issues
        res.json({
            message: "Logged out successfully",
            error: false,
            success: true,
            data: []
        });
    } catch (err) {
        res.json({
            message: err.message || err,
            error: true,
            success: false
        });
    }
}
