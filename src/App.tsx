import { useState } from 'react'
import { VIEW } from './constant'
import { Box, Button, Stack, Typography } from '@mui/material'

function App() {
  const [view, setView] = useState<string>(VIEW.dashboard)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <iframe src="https://giphy.com/embed/YsTs5ltWtEhnq" width="480" height="311" frameBorder="0" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/confused-flying-YsTs5ltWtEhnq">via GIPHY</a></p>
      {
        view === VIEW.dashboard && (
          <Stack direction='column' sx={{
            pt: 40
          }}>
            <Typography variant='h4' fontWeight={600}>
              Welcome to Your Giphy
            </Typography>

            <Button variant='text' >
              IRON MAN GIPHY
            </Button>
            <Button variant='text'>
              SEARCH YOUR GIPHY
            </Button>
          </Stack>
        )
      }

      {
        view === VIEW.ironman && (
          <Stack direction='column' sx={{
            pt: 40
          }}>
            <Typography variant='h4' fontWeight={600}>
              IRONMAN GIPHY
            </Typography>

<Stack>

</Stack>
          </Stack>
        )

      }
    </Box>
  )
}

export default App
