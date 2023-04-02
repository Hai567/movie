let API_KEY = process.env.API_KEY
class genreRouter {

    // [GET] /genre/:genreID
    index(req, res, next){
        let requestGenre = req.params.genreID
        async function getMoviesByGenre() {  
            let moviesByGenreRaw = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${requestGenre}`)
            let moviesByGenre = await moviesByGenreRaw.json()
            moviesByGenre = await moviesByGenre.results
            res.render("moviesByGenre", {moviesByGenre})
        }
        getMoviesByGenre()
    }

}

module.exports = new genreRouter