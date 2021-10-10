const methods = require('../Helpers/Methods');

/**
 *
 * @param error
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
module.exports = (error, req, res, next) => {
    return res.status(process.env.EXCEPTION_CODE).send(methods.failResponse(error.message));
}
