import mongoose, { Schema } from "mongoose";

const preferenceSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
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
  { timestamps: true }
);

export default mongoose.model("Preference", preferenceSchema);
