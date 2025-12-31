import empDetails from "../db.js";

export let displayHello = (req, res) => {
  res.status(200).json({
    success: true,
    message: "hello",
  });
};

export let displayAllUSers = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "all users fetched",
    data: empDetails,
  });
};

export let registerUser = (req, res) => {
  let newUser = req.body;
  console.log(newUser);
  empDetails.push(newUser);

  res.status(201).json({
    success: true,
    message: "User registration successful",
    data: newUser,
  });
};

export let displaySingleUser = (req, res) => {
  let userId = req.params.id;

  console.log(userId);

  let user = empDetails.find((user) => user.id === parseInt(userId));

  if (user === undefined)
    return res.status(404).json({
      success: false,
      message: "No user found",
    });

  console.log(user);

  res.status(200).json({
    success: true,
    message: "User details fetched successfully",
    data: user,
  });
};

export const deleteUser = (req, res) => {
  let userId = req.params.id;

  let idx = empDetails.findIndex((user) => user.id === parseInt(userId));

  if (idx !== -1) {
    empDetails.splice(idx, 1);

    return res.status(200).json({
      success: true,
      message: "user deleted",
      data: empDetails,
    });
  } else {
    res.status(404).json({
      success: false,
      message: "No user found",
    });
  }
};

export const updateUser = (req, res) => {
  let newData = req.body;
  let userId = req.params.id;

  let user = empDetails.find((u) => u.id === Number(userId));

  user.name = newData.name;
  user.age = newData.age;

  res.status(200).json({
    success: true,
    message: "User updated",
    data: user,
  });
};
