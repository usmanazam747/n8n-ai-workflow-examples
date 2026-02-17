# Silver EMA12 Trading Bot (Exness Demo)

## Overview
This n8n workflow demonstrates a simple trading bot for XAGUSD (Silver) using a demo account on Exness. It triggers a buy order when the weekly price taps the EMA 12.

## Workflow Steps
1. **Weekly Trigger**: Runs every week to check the condition.
2. **Fetch Silver Price Data**: Uses Exness API to get weekly candle data for XAGUSD.
3. **Calculate EMA 12**: Computes the EMA 12 for the weekly close prices.
4. **Check Tap EMA 12**: If the current price is less than or equal to EMA 12, the bot proceeds.
5. **Place Buy Order (Demo)**: Sends a buy order to Exness demo account via API.
6. **Send Trade Alert**: Notifies you of the trade via email, Slack, or other integrations.

## Setup Instructions
- Get Exness demo API credentials and endpoints for price data and trading.
- Import the workflow JSON from `/workflows/silver-ema12-tradingbot.example.json` into n8n.
- Configure all credentials and parameters in the workflow nodes.
- Test with demo account before using real funds.

## Customization
- Change symbol or timeframe as needed.
- Add risk management logic (stop loss, take profit).
- Expand notifications for trade logs or analytics.

---
For more details, see n8n documentation: https://docs.n8n.io/
Exness API docs: https://exness.dev/
