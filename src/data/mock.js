// All data is local mock — no backend.

export const tickers = [
  { symbol: 'BTC', price: 105230.4, changePct: 1.24 },
  { symbol: 'ETH', price: 3412.18, changePct: -0.86 },
  { symbol: 'SOL', price: 214.55, changePct: 3.72 },
  { symbol: 'XRP', price: 2.41, changePct: 0.58 },
  { symbol: 'DOGE', price: 0.3821, changePct: -2.14 },
]

export const markets = [
  { symbol: 'BTC-PERP', type: 'PERP', leverage: '50x', price: 105230.4, changePct: 1.24, volume: '$1.43B' },
  { symbol: 'ETH-PERP', type: 'PERP', leverage: '50x', price: 3412.18, changePct: -0.86, volume: '$842.1M' },
  { symbol: 'SOL-PERP', type: 'PERP', leverage: '20x', price: 214.55, changePct: 3.72, volume: '$318.7M' },
  { symbol: 'DOGE', type: 'SPOT', leverage: '', price: 0.3821, changePct: -2.14, volume: '$96.4M' },
  { symbol: 'AVAX-PERP', type: 'PERP', leverage: '20x', price: 42.87, changePct: 1.91, volume: '$61.2M' },
  { symbol: 'ARB', type: 'SPOT', leverage: '', price: 0.9124, changePct: -1.08, volume: '$44.8M' },
]

export const positions = [
  {
    symbol: 'BTC-PERP',
    side: 'LONG',
    size: '0.42 BTC',
    pnl: 949.46,
    pnlPct: 25.4,
    entry: 96120.0,
    mark: 105230.4,
    liq: 94940.0,
  },
  {
    symbol: 'ETH-PERP',
    side: 'SHORT',
    size: '3.8 ETH',
    pnl: -92.0,
    pnlPct: -2.44,
    entry: 3388.0,
    mark: 3412.18,
    liq: 3820.0,
  },
  {
    symbol: 'SOL-PERP',
    side: 'LONG',
    size: '58 SOL',
    pnl: 688.79,
    pnlPct: 5.85,
    entry: 202.6,
    mark: 214.55,
    liq: 168.4,
  },
]

export const balances = [
  { asset: 'USDC', amount: '18,420.00', usdValue: 18420.0 },
  { asset: 'BTC', amount: '0.0612', usdValue: 6440.1 },
  { asset: 'ETH', amount: '0.4820', usdValue: 1644.67 },
  { asset: 'SOL', amount: '9.24', usdValue: 1982.44 },
]

// Tiny sparkline point arrays (0..1-ish) for market rows.
export const sparklines = {
  'BTC-PERP': [4, 6, 5, 7, 6, 8, 7, 9, 8, 11],
  'ETH-PERP': [9, 8, 8, 7, 7, 6, 6, 5, 6, 5],
  'SOL-PERP': [3, 4, 4, 6, 5, 7, 8, 7, 9, 10],
  DOGE: [8, 7, 7, 6, 5, 5, 4, 5, 4, 3],
  'AVAX-PERP': [4, 5, 4, 5, 6, 6, 7, 6, 8, 8],
  ARB: [7, 6, 6, 5, 5, 4, 5, 4, 4, 3],
}

// Mock OHLC candles for the lightweight-charts candlestick + volume series.
// Generated deterministically so the chart is stable across reloads.
function generateCandles(count = 90, start = 101000) {
  const candles = []
  const volumes = []
  let prev = start
  // Start ~3 months back on a daily cadence.
  let time = Math.floor(Date.now() / 1000) - count * 86400
  // Simple seeded pseudo-random for repeatability.
  let seed = 12345
  const rand = () => {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff
    return seed / 0x7fffffff
  }
  for (let i = 0; i < count; i++) {
    const drift = (rand() - 0.46) * 2600
    const open = prev
    const close = Math.max(20000, open + drift)
    const high = Math.max(open, close) + rand() * 900
    const low = Math.min(open, close) - rand() * 900
    candles.push({
      time,
      open: round2(open),
      high: round2(high),
      low: round2(low),
      close: round2(close),
    })
    volumes.push({
      time,
      value: Math.round(2000 + rand() * 9000),
      color: close >= open ? 'rgba(34,197,94,0.5)' : 'rgba(239,68,68,0.5)',
    })
    prev = close
    time += 86400
  }
  return { candles, volumes }
}

function round2(n) {
  return Math.round(n * 100) / 100
}

export const { candles, volumes } = generateCandles()
