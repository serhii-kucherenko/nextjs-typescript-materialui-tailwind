'use client'
import { Button, Grid, Stack } from '@mui/material'
export default function Home() {
  return (
    <Grid container height='100vh' alignItems='center' justifyContent='center' direction='column'>
      <h1 className='text-white'>Next.js 13 with Tailwind and MUI Boilerplate</h1>
      <Stack direction='row' columnGap={1}>
        <Button variant='text' className='text-red-500'>
          Text
        </Button>
        <Button variant='contained'>Contained</Button>
        <Button variant='outlined'>Outlined</Button>
      </Stack>
    </Grid>
  )
}
