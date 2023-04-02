let API_KEY = process.env.API_KEY
class listPageController {

    index(req, res, next){
        async function getMovieListPage (){
            let category = req.params.category
            let page = req.query.page
            let rawData = await fetch(`https://api.themoviedb.org/3/${category}/movie?api_key=${API_KEY}&page=${page}`)
            let data = await rawData.json()
            let currentPage = data.page
            res.render("list-page", {data, currentPage, heading:category})
        }
        getMovieListPage()
    }

    forDifferentGenre(req, res, next){
        async function getMovieGenreListePage (){
            let genreID = req.params.genreID
            let page = req.query.page
            let genreName = req.params.genreName
            let rawData = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreID}&page=${page}`)
            let data = await rawData.json()
            let currentPage = data.page

            res.render("list-page", {data, currentPage, heading:genreName})
        }
    getMovieGenreListePage()
    }

}

module.exports = new listPageController