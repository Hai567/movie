module.exports = function SortMiddleware (req, res, next){

    res.locals._sortCategory = {
        enable: false,
        category: "none",
    }
    if (req.query.hasOwnProperty("_sort-category")){
        res.locals._sortCategory.enable = true
        res.locals._sortCategory.category = req.query.category
    }

    next()
}
// <% switch (_sortCategory.category) { %>
//     <% case "discover": %>
//         <h3><a href="?_sort-category&category=discover" style="text-decoration: none; color:#666464;">Discover</a></h3>
//         <% break; %>
//     <% case "tv": %>
//         <h3><a href="?_sort-category&category=tv" style="text-decoration: none; color:#666464">TV</a></h3>
//         <% break; %>
//     <% case "high-rated": %>
//         <h3><a href="?_sort-category&category=high-rated" style="text-decoration: none; color:#666464">High Rated</a></h3>
//         <% break; %>
//     <% default: %>
//         <% break; %>
// <% } %>