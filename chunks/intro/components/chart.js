import React from 'react'
import { Component } from 'react-dom-chunky'
import { PieChart, LabelList, Pie, Sector, Cell, Label, Legend } from 'recharts'

const data = [
  { name: 'Community', value: 6, id: '0', percent: '60%' },
  { name: 'Founders Fund', value: 2, id: '1', percent: '20%' },
  { name: 'Business Partnerships', value: 1, id: '2', percent: '10%' },
  { name: 'Carmel Fund', value: 1, id: '3', percent: '10%' }
]

const COLORS = ['#66BB6A', '#00796B', '#1976D2', '#1A237E', '#0D47A1']
const RADIAN = Math.PI / 180

export default class ChartComponent extends Component {
  renderCustomizedLabel ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
      <text x={x} y={y} fill='white' textAnchor={x > cx ? 'start' : 'end'} dominantBaseline='central'>
        { data[index].percent }
      </text>
    )
  }

  renderActiveShape (props) {
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent } = props
    const sin = Math.sin(-RADIAN * midAngle)
    const cos = Math.cos(-RADIAN * midAngle)
    const sx = cx + (outerRadius + 10) * cos
    const sy = cy + (outerRadius + 10) * sin
    const mx = cx + (outerRadius + 30) * cos
    const my = cy + (outerRadius + 30) * sin
    const ex = mx + (cos >= 0 ? 1 : -1) * 22
    const ey = my
    const textAnchor = cos >= 0 ? 'start' : 'end'

    return (
      <g>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill='none' />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke='none' />
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill='#333'>{`${payload.name}`}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill='#999'>
          {`${payload.value}M CARMEL (${(percent * 100).toFixed(0)}%)`}
        </text>
      </g>
    )
  }

  constructor (props) {
    super(props)
    this.state = { ...super.state }
  }

  componentDidMount () {
    super.componentDidMount()
  }

  render () {
    const width = this.props.isSmallScreen ? 400 : 800
    const height = this.props.isSmallScreen ? 300 : 500
    const radius = this.props.isSmallScreen ? 80 : 200
    const cx = this.props.isSmallScreen ? 170 : 380
    const cy = this.props.isSmallScreen ? 120 : 230

    return (
      <PieChart width={width} height={height} onMouseEnter={this.onPieEnter} style={{margin: 'auto'}}>
        <Pie
          dataKey='value'
          data={data}
          cx={cx}
          cy={cy}
          labelLine={false}
          label={this.renderCustomizedLabel}
          outerRadius={radius}
          fill='#8884d8'>
          {
            data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
        <Legend verticalAlign={'bottom'} iconSize={'17'} height={50} />
      </PieChart>
    )
  }
}
