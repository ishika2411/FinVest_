import mongoose, { Schema } from "mongoose";

const insightsSchema = new Schema(
  {
    preferences: {
      investmentGoal: {
        type: String,
        required: true,
        enum: [
          "Capital Preservation",
          "Income Generation",
          "Growth",
          "Speculation",
        ],
      },
      riskTolerance: {
        type: String,
        required: true,
        enum: ["Low", "Medium", "High"],
      },
      liquidityNeeds: {
        type: String,
        required: true,
        enum: ["Low", "Medium", "High"],
      },
      investmentKnowledge: {
        type: String,
        required: true,
        enum: ["Beginner", "Intermediate", "Advanced"],
      },
      income: {
        type: String,
        required: true,
        enum: [
          "Below Rs.2,00,000",
          "Rs.2,00,000 - Rs.5,00,000",
          "Rs.5,00,000 - Rs.10,00,000",
          "Above Rs.10,00,000",
        ],
      },
      marketVolatility: {
        type: String,
        required: true,
        enum: [
          "I get anxious and prefer stability",
          "I can handle some fluctuations",
          "I am comfortable with high volatility",
        ],
      },
    },
    insights: [
      {
        instruments: {
          type: String,
          required: true,
        },
        risk: {
          type: String,
          required: true,
        },
        expected_rate_of_return: {
          type: String,
          required: true,
        },
        expected_growth: {
          year1: {
            type: String,
            required: true,
          },
          year5: {
            type: String,
            required: true,
          },
          year10: {
            type: String,
            required: true,
          },
        },
      },
    ],
  },
  { timestamps: true }
);
export default mongoose.model("Insight", insightsSchema);
