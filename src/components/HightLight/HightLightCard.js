import React from 'react'
import { Card, CardContent, Grid, styled, Typography } from '@material-ui/core'


export default function HightLightCard({sumary}) {
    return (
        <Card style={{'borderLeftStyle': 'groove',
            'borderLeftColor': sumary.type,
            'borderLeftWidth': '7px',
            'marginLeft ': '30px',
            "minHeight": '100px',
           
            margin: '50px'
            }}>
            <CardContent>
                <Typography component='p' variant='body1'>{sumary.title}</Typography>
                <Typography component='span' variant='body1'>{sumary.count}</Typography>
            </CardContent>
        </Card>
    )
}
