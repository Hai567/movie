let API_KEY = process.env.API_KEY
class genreRouter {

    // [GET] /genre/:genreID
    index(req, res, next){
        let genreID = req.params.genreID
        let genreName = req.query.genre
        async function getMoviesByGenre() {  
            let moviesByGenreRaw = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreID}&page=1`)
            let moviesByGenre = await moviesByGenreRaw.json()
            res.render("moviesByGenre", {moviesByGenre, genreName, genreID, currentPage: 1})
        }
        getMoviesByGenre()
    }


}

module.exports = new genreRouter