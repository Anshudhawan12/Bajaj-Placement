const config = require("../config/default.json");

exports.healthCheck = (req, res) => {
  res.status(200).json({
    is_success: true,
    official_email: config.official_email
  });
};
