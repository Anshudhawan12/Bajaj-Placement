const { fibonacci, filterPrimes, lcm, hcf } = require("../utils/mathUtils");
const { askAI } = require("../utils/aiUtils");
const config = require("../config/default.json");

exports.handleBFHL = async (req, res) => {
  try {
    let data;
    if (req.body.fibonacci !== undefined) {
      data = fibonacci(req.body.fibonacci);
    } else if (req.body.prime !== undefined) {
      data = filterPrimes(req.body.prime);
    } else if (req.body.lcm !== undefined) {
      data = lcm(req.body.lcm);
    } else if (req.body.hcf !== undefined) {
      data = hcf(req.body.hcf);
    } else if (req.body.AI !== undefined) {
      data = await askAI(req.body.AI);
    } else {
      return res.status(400).json({
        is_success: false,
        official_email: config.official_email,
        error: "Invalid input key"
      });
    }

    res.status(200).json({
      is_success: true,
      official_email: config.official_email,
      data
    });
  } catch (err) {
    res.status(500).json({
      is_success: false,
      official_email: config.official_email,
      error: err.message
    });
  }
};
