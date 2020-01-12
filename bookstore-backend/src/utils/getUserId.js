import jwt from 'jsonwebtoken';

export default function getUserId(httpContext){
    const authHeader = httpContext.request.headers.authorization;
    if (!authHeader) {
        throw new Error("Authentication required!");
    }
    const token = authHeader.replace("Bearer ","");
    const payload = jwt.verify(token, "")
    return payload.userId;
}