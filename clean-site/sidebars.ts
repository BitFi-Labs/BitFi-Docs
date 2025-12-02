import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: 'Welcome to BitFi',
      link: {type: 'doc', id: 'welcome'},
      items: [
        'readme/cedefi-innovation',
        'readme/addressing-market-challenges',
      ],
    },
    'faq',
    {
      type: 'category',
      label: 'Background',
      items: [
        'background/quickstart',
        'background/the-bitfi-solution-a-cedefi-hybrid-approach',
      ],
    },
    {
      type: 'category',
      label: "BitFi's CEDEFI",
      items: [
        'bitfis-cedefi/editor',
        {
          type: 'category',
          label: 'Implementation of CeFi',
          link: {type: 'doc', id: 'bitfis-cedefi/markdown/README'},
          items: [
            'bitfis-cedefi/markdown/ceffu-mirrorx',
            'bitfis-cedefi/markdown/bitfi-strategies',
            'bitfis-cedefi/markdown/risk-management',
          ],
        },
        {
          type: 'category',
          label: 'Implementation of DeFi',
          link: {type: 'doc', id: 'bitfis-cedefi/images-and-media/README'},
          items: [
            'bitfis-cedefi/images-and-media/bfbtc',
            'bitfis-cedefi/images-and-media/bfusd',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'How To',
      items: [
        'how-to/introduction',
        'how-to/how-to-participate-in-points-campaign',
        'how-to/get-bfusd-and-stake-in-horizon-pulsar-pools',
        'how-to/unstake-pbfusd-hbfusd-and-redeem-bfusd-to-usdt',
        'how-to/stake-btc-on-an-evm-compatible-chain',
        'how-to/stake-btc-on-bitcoin-network',
        'how-to/unstake-bfbtc-to-evm-compatible-chain',
        'how-to/unstake-bfbtc-to-bitcoin-network',
        'how-to/create-sui-wallet',
      ],
    },
    {
      type: 'category',
      label: 'Points Program',
      items: ['points-program/overview'],
    },
    {
      type: 'category',
      label: 'Developer',
      items: [
        {
          type: 'category',
          label: 'bfBTC Overview',
          link: {type: 'doc', id: 'developer/bfbtc-overview/README'},
          items: [
            'developer/bfbtc-overview/deployed-contracts',
            'developer/bfbtc-overview/contract-parameters',
            'developer/bfbtc-overview/contract-abi',
          ],
        },
        {
          type: 'category',
          label: 'bfUSD Overview',
          link: {type: 'doc', id: 'developer/bfusd-overview/README'},
          items: [
            'developer/bfusd-overview/deployed-contracts',
            'developer/bfusd-overview/contract-parameters',
            'developer/bfusd-overview/contract-abi',
          ],
        },
        {
          type: 'category',
          label: 'Using Contract',
          link: {type: 'doc', id: 'developer/using-contract/README'},
          items: [
            'developer/using-contract/stake-bfbtc',
            'developer/using-contract/unstake-bfbtc',
            'developer/using-contract/bfbtc-fees',
            'developer/using-contract/bfbtc-price-oracle',
            'developer/using-contract/stake-bfusd',
            'developer/using-contract/unstake-bfusd',
            'developer/using-contract/redeem-bfusd',
            'developer/using-contract/bfusd-fees',
            'developer/using-contract/bfusd-oracle',
          ],
        },
        {
          type: 'category',
          label: 'Epoch and Ratio',
          link: {type: 'doc', id: 'developer/epoch-and-ratio/README'},
          items: [
            'developer/epoch-and-ratio/epoch-updates',
            'developer/epoch-and-ratio/underlying-asset-price-variation',
            'developer/epoch-and-ratio/apy-calculation',
          ],
        },
        'developer/audit-report',
      ],
    },
    {
      type: 'category',
      label: 'Resource',
      items: [
        'resource/communities',
        'resource/brand-assets',
        {
          type: 'link',
          label: 'BitFi Home Page',
          href: 'https://www.bitfi.one/',
        },
        {
          type: 'link',
          label: 'BitFi Dapp',
          href: 'https://app.bitfi.one/',
        },
      ],
    },
  ],
};

export default sidebars;
