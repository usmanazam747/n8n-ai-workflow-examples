// n8n Function node: Calculate EMA12, EMA50, and Bullish Sentiment for XAGUSD (Silver)
// Input: Array of weekly close prices (latest last)
// Output: { ema12, ema50, isBullish, tapEma12 }

// Helper function to calculate EMAunction calculateEMA(prices, period) {
  const k = 2 / (period + 1);
  let ema = prices[0];
  for (let i = 1; i < prices.length; i++) {
    ema = prices[i] * k + ema * (1 - k);
  }
  return ema;
}

// Assume inputData is an array of weekly close prices, latest last
const inputData = items[0].json.closePrices; // e.g., [23.1, 23.5, ..., 25.2]

const ema12 = calculateEMA(inputData, 12);
const ema50 = calculateEMA(inputData, 50);
const currentPrice = inputData[inputData.length - 1];

// Bullish sentiment: EMA12 > EMA50 and current price > EMA50
const isBullish = ema12 > ema50 && currentPrice > ema50;

// Tap EMA12: current price is within 0.2% below or above EMA12
const tapThreshold = 0.002 * ema12;
const tapEma12 = Math.abs(currentPrice - ema12) <= tapThreshold;

return [{
  json: {
    ema12,
    ema50,
    isBullish,
    tapEma12,
    currentPrice
  }
}];
