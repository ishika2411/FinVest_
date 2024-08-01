import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/AsyncHandler.js";
import insightsModel from "../models/insights.model.js";
import preferenceModel from "../models/preference.model.js";

const getInsights = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const preference = await preferenceModel.findOne({ user: id });
  if (!preference) {
    throw new ApiError(404, "Preference not found");
  }

  const insight = await insightsModel.findOne({
    "preferences.investmentGoal": preference.investmentGoal,
    "preferences.riskTolerance": preference.riskTolerance,
    "preferences.liquidityNeeds": preference.liquidityNeeds,
    "preferences.investmentKnowledge": preference.investmentKnowledge,
    "preferences.income": preference.income,
    "preferences.marketVolatility": preference.marketVolatility,
  });

  if (!insight) {
    throw new ApiError(404, "Insight not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, "Insight found", { data: insight }));
});

export { getInsights };
