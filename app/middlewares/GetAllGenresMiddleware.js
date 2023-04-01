let API_KEY = process.env.API_KEY
module.exports = async function GetAllGenresMiddleware(req, res, next){
    try {
        let allGenres = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
        allGenres = await allGenres.json()
        res.locals.allGenres = allGenres.genres
    } catch (error) {
        console.log(`Error Encounter In GetAllGenres`)
    }
    next()
}