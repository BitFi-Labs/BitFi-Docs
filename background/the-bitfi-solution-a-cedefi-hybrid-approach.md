---
icon: octagon-check
---

# The BitFi Solution: A CeDeFi Hybrid Approach

BitFi's CeDeFi approach distinguishes itself by focusing on delivering native BTC yield to users.

We recognize that while funding rate arbitrage can provide stable returns, it requires specialized expertise and robust risk management, limiting access for the average BTC holder. BitFi simplifies this process. Leveraging Ceffu's MirrorX solution, we enable mirrored trading without requiring users to transfer assets to centralized exchanges.

This ensures ample market depth while significantly reducing platform risk and providing users with direct access to arbitrage strategies. By combining the strengths of CeFi and DeFi, BitFi creates a multi-chain yield platform for Bitcoin holders.

Currently, we support deposit and withdrawal of BTC assets across major blockchains including Bitcoin, Ethereum, and Binance Smart Chain. We also accept ETH-network deposits of USDT and USDC so users can mint bfUSD directly from those stablecoins, and we plan to expand support to additional Bitcoin-compatible blockchains in the future.

## Liquidity Solutions with bfBTC and bfUSD

BitFi extends its CeDeFi architecture to both BTC and USD assets. Users who deposit BTC, USDT, or USDC through BitFi receive bfBTC or bfUSD, two ERC-20 tokens that are designed to move easily across DeFi protocols.

While the underlying assets remain in secure custody, bfBTC and bfUSD can be supplied to liquidity pools, lending markets, or other integrated protocols. This design allows the same capital to earn base CeDeFi yield and additional on-chain returns at the same time, improving overall capital efficiency.

### bfBTC

bfBTC is minted whenever BTC is bridged on-chain and locked under BitFi's custody. The protocol routes those assets through MirrorX-powered arbitrage, cross-chain liquidity provisioning, and DeFi staking, then feeds the resulting revenue back into the bfBTC pool. Because the exchange ratio grows with the revenue distributed to bfBTC holders, the token delivers a native BTC yield while remaining redeemable 1:1 for underlying BTC across multiple chains.

### bfUSD

bfUSD is a fully collateralized USD stablecoin minted against USDT and USDC using Chainlink-secured pricing. Holders can stake bfUSD into the Horizon pool (hbfUSD, low risk) or the Pulsar pool (pbfUSD, higher yield); both operate as ERC-4626 vaults and track a per-epoch ratio. Yield is distributed from protocol revenue, the insurance buffer, and cross-pool boosts (Horizon revenue supports Pulsar and Pulsar principal backstops Horizon drawdowns). Standard and instant redemption paths keep the peg while letting users collect 15%–22% target APYs depending on their risk profile.
