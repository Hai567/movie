let API_KEY = process.env.API_KEY
class siteController {
    homePage(req, res, next){
        let recommendingMoviesURL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
        let weeklyTrendingMoviesURL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
        async function getData(){
            try {   
                let rawResponses = await Promise.all([fetch(recommendingMoviesURL), fetch(weeklyTrendingMoviesURL)])

                let recommendingMovies = await rawResponses[0].json()
                let weeklyTrendingMovies = await rawResponses[1].json()
                if (req.query.hasOwnProperty("_sort-category")) {
                    async function sortMoviesByCategory () {
                        let tvSortQuery = "/tv/popular"
                        let highRatedMovieSortQuery = "/movie/top_rated"
                        let sortQuery = ""
                        if (req.query.category === "tv"){
                            sortQuery = tvSortQuery
                        }else if (req.query.category === "high-rated-movie"){
                            sortQuery = highRatedMovieSortQuery
                        }
                        let moviesSortedByCategoryRaw = await (fetch(`https://api.themoviedb.org/3${sortQuery}?api_key=${API_KEY}`))
                        let moviesSortedByCategoryResponse = await moviesSortedByCategoryRaw.json()
                        res.render("index", {recommendingMovies: moviesSortedByCategoryResponse, weeklyTrendingMovies})
                    }
                    sortMoviesByCategory()
                }else{
                res.render("index", {recommendingMovies, weeklyTrendingMovies})
                }
                    
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
                        let similarMoviesURL = `https://api.themoviedb.org/3/movie/${movieDetailsData.id}/similar?api_key=${API_KEY}`
                        async function getMovieByGenre(){
                            let similarMoviesResponse = await Promise.all([fetch(similarMoviesURL)])
                            let similarMovies = await similarMoviesResponse[0].json()
                            let currentMovieID = req.params.movieID
                            res.render("movie-details", {movieDetailsData, movieURL: `https://2embed.org/embed/movie?imdb=${movieDetailsData.imdb_id}`, similarMovies, currentMovieID})
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