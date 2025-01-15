import Doctor from "../Models/DoctorSchema.js";

export const updateDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    const updateDoctor = await Doctor.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updateDoctor,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to update",
      error: err.message,
    });
  }
};

export const deleteDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    await Doctor.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Successfully deleted" });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to delete",
      error: err.message,
    });
  }
};

export const getSingleDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    const Doctor = await Doctor.findById(id);
    if (!Doctor) {
      return res.status(404).json({
        success: false,
        message: "Doctor not found",
      });
    }
    res
      .status(200)
      .json({ success: true, message: "Data found", data: Doctor });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch Doctor",
      error: err.message,
    });
  }
};

export const getAllDoctor = async (req, res) => {
  try {
    const Doctors = await Doctor.find({}).select("-password");
    res.status(200).json({
      success: true,
      message: "Doctors found",
      data: Doctors,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch Doctors",
      error: err.message,
    });
  }
};
