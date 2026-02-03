import ErrorResponse from "../utils/ErrorResponse.util.js";

export const validateBody = (schema) => {
  return (req, res, next) => {
    let { error, value } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      console.log("error: ", error);
      let errorMessages = error.details.map((detail) => detail.message);
      console.log("errorsMessage: ", errorMessages.join(", "));
      return next(new ErrorResponse(errorMessages.join(", "), 400));
    }

    req.body = value;
    next();
  };
};
