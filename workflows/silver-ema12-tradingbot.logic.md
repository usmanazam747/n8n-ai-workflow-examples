# Silver EMA12 Trading Bot Logic (n8n)

## Workflow Overview
This document describes the logic for an n8n trading bot that triggers a buy order for XAGUSD (Silver) when the weekly price touches the EMA 12, but only in a long-term bullish environment.

## Steps

1. **Trigger (Weekly)**
   - Use a Cron node to run the workflow once per week (e.g., at the close of the weekly candle).

2. **Fetch Weekly Price Data**
   - Use HTTP Request node to fetch the last N (e.g., 30) weekly candles for XAGUSD from Exness API.
   - Parse the response to extract close prices.

3. **Calculate EMA 12**
   - Use a Function node to calculate the EMA 12 for the weekly close prices.
   - Identify the current EMA 12 value and the latest close price.

4. **Bullish Sentiment Check**
   - Define bullish sentiment as: the current price is above the EMA 50 (or another long-term EMA), and/or the EMA 12 is above EMA 50.
   - Calculate EMA 50 in the same Function node or a separate one.
   - Only proceed if bullish conditions are met.

5. **Check Tap on EMA 12**
   - If the latest weekly close price is equal to or just below EMA 12 (within a small threshold), trigger a buy signal.

6. **Place Buy Order (Demo)**
   - Use HTTP Request node to send a buy order to Exness demo account API.
   - Include risk management parameters (lot size, stop loss, take profit).

7. **Send Notification**
   - Notify via email, Slack, or other integrations about the trade action.

## Example Pseudocode for EMA Calculation (JavaScript)
```js
function calculateEMA(prices, period) {
  const k = 2 / (period + 1);
  let ema = prices[0];
  for (let i = 1; i < prices.length; i++) {
    ema = prices[i] * k + ema * (1 - k);
  }
  return ema;
}
```

## Notes
- You must configure Exness API endpoints and credentials in n8n.
- For real trading, add more error handling and risk controls.
- Test thoroughly with demo account before using real funds.

---
This logic can be implemented using n8n nodes as described above. If you want, I can generate the actual n8n Function node code for EMA and bullish checks next.
