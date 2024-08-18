const createError = require("http-errors");

const userUsesCases = require("../usescases/user.usescases");

const jwt = require("../lib/jwt");

function auth(){
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
        response.status(400);

        response.jason({
            success: false,
            message: error.message,
        });


    }
}
