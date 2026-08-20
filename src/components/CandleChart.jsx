import { useEffect, useRef } from 'react'
import {
  createChart,
  CandlestickSeries,
  HistogramSeries,
  CrosshairMode,
} from 'lightweight-charts'
import { candles, volumes } from '../data/mock'

export function CandleChart({ height = 200 }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const chart = createChart(el, {
      height,
      width: el.clientWidth,
      layout: {
        background: { color: 'transparent' },
        textColor: '#6b6b70',
        fontFamily: 'Inter, sans-serif',
        attributionLogo: false,
      },
      grid: {
        vertLines: { visible: false },
        horzLines: { color: 'rgba(255,255,255,0.04)' },
      },
      rightPriceScale: {
        borderVisible: false,
        scaleMargins: { top: 0.1, bottom: 0.3 },
      },
      timeScale: { borderVisible: false, visible: false },
      crosshair: {
        mode: CrosshairMode.Normal,
        vertLine: { color: 'rgba(255,255,255,0.15)', labelVisible: false },
        horzLine: { color: 'rgba(255,255,255,0.15)', labelVisible: false },
      },
      handleScroll: false,
      handleScale: false,
    })

    const candleSeries = chart.addSeries(CandlestickSeries, {
      upColor: '#22c55e',
      downColor: '#ef4444',
      wickUpColor: '#22c55e',
      wickDownColor: '#ef4444',
      borderVisible: false,
      priceLineVisible: false,
      lastValueVisible: false,
    })
    candleSeries.setData(candles)

    const volumeSeries = chart.addSeries(HistogramSeries, {
      priceFormat: { type: 'volume' },
      priceScaleId: 'vol',
      priceLineVisible: false,
      lastValueVisible: false,
    })
    volumeSeries.priceScale().applyOptions({
      scaleMargins: { top: 0.8, bottom: 0 },
    })
    volumeSeries.setData(volumes)

    chart.timeScale().fitContent()

    const ro = new ResizeObserver((entries) => {
      const w = entries[0]?.contentRect.width
      if (w) chart.applyOptions({ width: w })
    })
    ro.observe(el)

    return () => {
      ro.disconnect()
      chart.remove()
    }
  }, [height])

  return <div ref={containerRef} className="w-full" style={{ height }} />
}
