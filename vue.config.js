// const mock_data = require("./mock/test.json");
module.exports = {
    devServer: {
        before: function(app) {
            app.get('/api/getList',function(req,res) {
                res.json({
                    name: 'abcd'
                })
            })
        }
    }
}