const { getToken } = require("../service/auth");

function checkforAuthentication(req, res, next) {
    const tokenCookie = req.cookies?.uid;
    req.user = null;
    
    if (!tokenCookie) {
        return next();
    }
    
    const user = getToken(tokenCookie);
    
    if (user && user._id) {
        req.user = user;
        console.log(`Authenticated user: ${user.email}`);
    } 
    
    return next();
}

function restrictedTo(roles = []) {
    return function(req, res, next) {
        if (!req.user) {
            console.log('Access denied: No authenticated user');
            return res.status(401).redirect('/login');
        }
        
        if (roles.length === 0) {
            return next();
        }
        
        if (!roles.includes(req.user.role)) {
            console.log(`Access denied: User role '${req.user.role}' not in required roles:`, roles);
            return res.status(403).render('error', { 
                message: 'Access Denied', 
                error: 'You do not have permission to access this resource' 
            });
        }
        
        console.log(`Access granted: User ${req.user.email} has role '${req.user.role}'`);
        return next();
    };
}



module.exports = { 
    checkforAuthentication, 
    restrictedTo, 
    
};