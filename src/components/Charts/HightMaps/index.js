import React from 'react'
import Hightchart from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import hightchartsMap from 'highcharts/modules/map'
hightchartsMap(Hightchart)

const initOptions = {
  chart: {
    height: '500',
  },
  title: {
    text: null,
  },
  mapNavigation: {
    enabled: true,
  },
  colorAxis: {
    min: 0,
    stops: [
      [0.2, '#FFC4AA'],
      [0.4, '#FF8A66'],
      [0.6, '#FF392B'],
      [0.8, '#B71525'],
      [1, '	#7A0826'],
    ],
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'bottom',
  },
  series: [
    {
      mapData: {},
      name: 'Dân số',
      joinBy: ['hc-key', 'key'],
    },
  ],
};
export default function HightMaps() {
  return (
    <HighchartsReact 
      highcharts ={Hightchart}
      options = {{}}
      contructorType='mapChart'
    />
  )
}
