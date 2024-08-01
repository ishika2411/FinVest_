import asyncHandler from "../utils/AsyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import preferenceModel from "../models/preference.model.js";

const createPreference = asyncHandler(async (req, res) => {
  const {
    id,
    investmentGoal,
    riskTolerance,
    liquidityNeeds,
    investmentKnowledge,
    income,
    marketVolatility,
  } = req.body;

  const preference = await preferenceModel.create({
    user: id,
    investmentGoal,
    riskTolerance,
    liquidityNeeds,
    investmentKnowledge,
    income,
    marketVolatility,
  });

  return res
    .status(201)
    .json(
      new ApiResponse(201, "Preferences set successfully", { data: preference })
    );
});

export { createPreference };
