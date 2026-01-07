import Joi from "joi";

//! create a layout which will be compared with req.body
//? order does not matter if we have defined datatypes first

export const userRegisterSchema = Joi.object({
  name: Joi.string().min(3).max(49).optional(),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(3).max(50),
  age: Joi.number().required().min(1).max(90),
  isMarried: Joi.boolean().optional(),
});

//! compare this layout with req.body

// {
//     "value": {
//         "email": "as",
//         "password": "1234",
//         "age": 23
//     },
//     "error": {
//         "_original": {
//             "email": "as",
//             "password": "1234",
//             "age": 23
//         },
//         "details": [
//             {
//                 "message": "\"email\" must be a valid email",
//                 "path": [
//                     "email"
//                 ],
//                 "type": "string.email",
//                 "context": {
//                     "value": "as",
//                     "invalids": [
//                         "as"
//                     ],
//                     "label": "email",
//                     "key": "email"
//                 }
//             }
//         ]
//     }
// }
