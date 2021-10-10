const IndexController = require('../Controllers/IndexController');

/**
 *
 * @param app
 */
module.exports = function (app) {
    app.get('/', IndexController.index)
    app.post('/', IndexController.indexPost)
}