class siteController {


    homePage(req, res, next){
        async function getData(){
            let recommendingMoviesURL = "https://api.themoviedb.org/3/discover/movie?api_key=1b8102c1e52c1cbbf4197b9c7c0f28ad"
            let weeklyTrendingMoviesURL = "https://api.themoviedb.org/3/trending/movie/week?api_key=1b8102c1e52c1cbbf4197b9c7c0f28ad"
        
            try {   
                let responses = await Promise.all([fetch(recommendingMoviesURL), fetch(weeklyTrendingMoviesURL)])

                let recommendingMovies = await responses[0].json()
                let weeklyTrendingMovies = await responses[1].json()
                res.render("index", {recommendingMovies: recommendingMovies, weeklyTrendingMovies: weeklyTrendingMovies})
            } catch (error) {
                console.log(`Error Encounter While Fetching Data From TMDB In siteController, ${error}`)
            }
        }
        getData()
    } 
    

}

module.exports = new siteController