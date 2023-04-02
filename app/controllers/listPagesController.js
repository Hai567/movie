let API_KEY = process.env.API_KEY
class listPageController {

    index(req, res, next){
        async function getMovieListPage (){
            let category = req.params.slug
            let page = req.query.page
            let rawData = await fetch(`https://api.themoviedb.org/3/${category}/movie?api_key=${API_KEY}&page=${page}`)
            let data = await rawData.json()
            let currentPage = data.page

            res.render("list-page", {data, currentPage})
        }
        getMovieListPage()
    }

}

module.exports = new listPageController