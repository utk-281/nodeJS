import ErrorResponse from "../utils/ErrorResponse.util.js";

export const validateBody = (schema) => {
  return (req, res, next) => {
    let { error, value } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      let errorsMessage = error.details.map((detail) => detail.message);
      return next(new ErrorResponse(errorsMessage, 400));
    }

    req.body = value;
    next();
  };
};
