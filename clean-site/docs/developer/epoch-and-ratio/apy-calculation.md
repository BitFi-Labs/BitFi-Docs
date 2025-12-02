# APY Calculation

BitFi reports two APY metrics for bfBTC:

- 7-epoch rolling APY ("7D APY"): based on the exchange-rate change over the last 7 epochs.
- Cumulative project APY (since genesis): based on the exchange-rate change from genesis to the latest epoch.

Both use the bfBTC/BTC exchange rate and epoch timestamps.

## Terminology

- Epoch N: the Nth rebasing/accounting interval where the bfBTC/BTC rate is finalized.
- T_N: Unix timestamp (seconds) when epoch N is finalized.
- R_N: Exchange rate at epoch N, expressed as BTC per 1 bfBTC.
- S_year: Seconds per year. Unless noted otherwise, S_year = 31,536,000.

Notes:
- Exchange rate R_N should be non-decreasing if bfBTC accrues yield in BTC.
- Timestamps must be strictly increasing: T_N > T_(N-1).

## 7-Epoch Rolling APY ("7D APY")

A linearized, annualized rate using the change in exchange rate over the last 7 epochs. Because epochs are not exactly 24 hours, this "7D APY" can differ from a strict 7-calendar-day APY.

### Formula

APY_7_epoch = 100 * S_year * ((R_N / R_N_minus_7) - 1) / (T_N - T_N_minus_7), for N >= 7.

Where:
- (R_N / R_N_minus_7) - 1 is the relative change over the last seven epochs.
- The fraction is scaled to an annual rate by S_year and converted to percent.

Notes:
- Require N >= 7.
- If T_N - T_N_minus_7 is very small or zero, skip the update or fall back to a safe default.

## Cumulative Project APY (since genesis)

A linearized, annualized rate computed from genesis (epoch 0) to epoch N.

### Formula

APY_cumulative = 100 * S_year * ((R_N / R_0) - 1) / (T_N - T_0).

Where:
- (R_N / R_0) - 1 is the total relative appreciation of bfBTC versus BTC since genesis.
- Linearization keeps the rate easy to interpret and stable across reporting intervals.
