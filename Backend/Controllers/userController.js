import User from "../Models/UserSchema.js";
export const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const updateUser = await User.findByIdAndUpdate(
      id,
      { $ser: req.body },
      { new: true }
    );
    res
      .status(200)
      .json({
        success: true,
        message: "succuessfullt updated",
        data: updateUser,
      });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "failed to update", data: updateUser });
  }
};
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const updateUser = await User.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "succuessfullt deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: "failed to delete" });
  }
};
export const getSingleUser = async (req, res) => {
  const id = req.params.id;
  try {
    const User = await User.findById(id);
    res.status(200).json({ success: true, message: "data found", data: User });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "No user found", data: User });
  }
};
export const getAllUser = async (req, res) => {
  const id = req.params.id;
  try {
    const User = await User.findByIdAndUpdate();
    res.status(200).json({ success: true, message: "Users found", data: User });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "No user found", data: User });
  }
};
