let API_KEY = "1b8102c1e52c1cbbf4197b9c7c0f28ad"
class siteController {

    homePage(req, res, next){
        let recommendingMoviesURL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
        let weeklyTrendingMoviesURL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
        async function getData(){
            try {   
                let rawResponses = await Promise.all([fetch(recommendingMoviesURL), fetch(weeklyTrendingMoviesURL)])

                let recommendingMovies = await rawResponses[0].json()
                let weeklyTrendingMovies = await rawResponses[1].json()
                res.render("index", {recommendingMovies, weeklyTrendingMovies})
            } catch (error) {
                console.log(`Error Encounter While Fetching Data From TMDB In siteController, ${error}`)
            }
        }

        getData()
    } 

    movieDetails(req, res, next) {
        async function getData(){
            try { 
                let movieDetailsRawResponses = await (fetch(`https://api.themoviedb.org/3/movie/${req.params.movieID}?api_key=${API_KEY}`))
                movieDetailsRawResponses.json()
                    .then((movieDetailsData) => {
                        let sameGenreMovieURL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=`
                        let genres = movieDetailsData.genres
                        async function getMovieByGenre(){
                            let sameGenreMoviesResponse = await Promise.all([fetch(sameGenreMovieURL+genres[0].id)])
                            let sameGenreMovies = await sameGenreMoviesResponse[0].json()
                            let currentMovieID = req.params.movieID
                            res.render("movie-details", {movieDetailsData, movieURL: `https://2embed.org/embed/movie?imdb=${movieDetailsData.imdb_id}`, sameGenreMovies, currentMovieID})
                        }
                        getMovieByGenre()
                    })
            } catch (error) {
                console.log(`Error Encounter While Fetching Data From TMDB In siteController, ${error}`)
            }
        }
        getData()
    }
}

module.exports = new siteController