
module.exports = async function CheckUserAuthenticated(req, res, next){
    res.locals.userProfile = {
        displayName: null,
        photo: null
    }
    if (req.isAuthenticated()){
        res.locals.userProfile = await {
            stringedID: await req.user._id.toString(),
            displayName: req.user.displayName,
            photo: req.user.photo
        }
        await next()
    }else{
        next()
    }
}