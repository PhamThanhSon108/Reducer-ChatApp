import { Card, CardContent, Grid, Typography } from '@material-ui/core'
import React from 'react'
import HightLightCard from './HightLightCard'

export default function HightLight({ report }) {
  const data = report.length ? report[report.length - 1]:[]
  const sumary = [
    {
      title: 'Số ca nhiễm',
      count: data.Confirmed,
      type: 'red'
    },
    {
      title: 'Khỏi',
      count: data.Recovered,
      type: '#2fdb09'
    },
    {
      title: 'Tử vong',
      count: data.Deaths,
      type: '#000000'
    }
  ]
  return (
    <Grid container spacing={3}>
      {sumary.map((item,key) => (<Grid key={key} item sm={4} xs={12}>
        <HightLightCard sumary={item}></HightLightCard>
      </Grid>))
      }
    </Grid >
  )
}
