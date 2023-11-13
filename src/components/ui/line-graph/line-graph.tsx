import { Legend } from '@/components/ui/line-graph/legend/legend'
import { ResponsiveLine } from '@nivo/line'

import s from './line-graph.module.scss'

export type LineGraphProps = {
  data: {
    data: {
      x: string
      y: number
    }[]
    id: string
  }[]
}

export const LineGraph = (props: LineGraphProps) => {
  const { data } = props
  const theme = {
    fontSize: 12,
    textColor: 'var(--color-black-60)',
  }
  const colors = [
    'var(--color-green-primary)',
    'var(--color-lime)',
    'var(--color-dark)',
    'var(--color-blue)',
    'var(--color-pink)',
    'var(--color-purple-light)',
  ]

  return (
    <>
      <div className={s.wrapper}>
        <div className={s.lineGraph}>
          <ResponsiveLine
            axisBottom={{
              tickPadding: 30,
              tickRotation: 0,
              tickSize: 0,
            }}
            axisLeft={{
              legend: 'Количество изданий',
              legendOffset: -55,
              legendPosition: 'middle',
              tickPadding: 10,
              tickRotation: 0,
              tickSize: 0,
            }}
            colors={colors}
            data={data}
            enableGridX={false}
            enablePoints={false}
            lineWidth={3}
            margin={{ bottom: 80, left: 60, right: 20, top: 50 }}
            theme={theme}
            useMesh
            xScale={{ type: 'point' }}
            yFormat={' >-.2f'}
            yScale={{
              max: 90,
              min: 0,
              type: 'linear',
            }}
          />
        </div>
        <Legend colors={colors} data={data} />
      </div>
    </>
  )
}
