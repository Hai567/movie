let API_KEY = process.env.API_KEY
class searchFilmController {

    // [POST] /search
    index(req, res, next){
        let searchQuery = req.body["search-query"]
        let searchFilm = async function(){
            // let searchedFilmRaw = await fetch(`https://api.themoviedb.org/3/search/keyword?api_key=${API_KEY}&query=${searchQuery}`)
            // searchedFilmRaw = await searchedFilmRaw.json()
            // let allsearchedFilm = 


            // res.json(searchedFilmRaw)
            // res.render("search", {searchFilmResponse, searchQuery})
            try {
                let searchedFilmRaw = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`)
                let searchedFilmData = await searchedFilmRaw.json()
                // res.json(searchedFilmData)
    
                // Fetch details of each film in the search results
                let allSearchedFilmData = await Promise.all(searchedFilmData.results.map(async (film) => {
                    let filmDetailsRaw = await fetch(`https://api.themoviedb.org/3/movie/${film.id}?api_key=${API_KEY}`)
                    let filmDetailsData = await filmDetailsRaw.json()
                    return filmDetailsData
                }))
                // res.json(allSearchedFilmData)
                res.render("search", {allSearchedFilmData, searchQuery})
            } catch (error) {
                console.log(`Error encounter while fetching data from TMDB in siteController: ${error}`)
                next(error)
            }
        }
        searchFilm()
    }

}

module.exports = new searchFilmController