const createError = require("http-errors");

const userUsesCases = require("../usescases/user.usescases");

const jwt = require("../lib/jwt");

function auth(request, response, next){
    try {
        const authorization = request.authorization;

        const token = authorization?.replace("Bearer","");
        if (!token){
            throw createError(404,"The token is required in authorization header");
        }
        const payload = jwt.verify(token);

        const user = userUsesCases.getById(payload.id);
        request.user = user;
        next();
    } catch (error) {
        response.status(error.status || 400);

        response.json({
            success: false,
            message: error.message,
        });


    }
}

module.exports = auth;
