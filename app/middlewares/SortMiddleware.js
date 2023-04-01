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