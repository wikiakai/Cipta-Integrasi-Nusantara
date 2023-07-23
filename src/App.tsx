import { useState } from 'react'
import { VIEW } from './constant'
import { Box, Button, CircularProgress, IconButton, Stack, Typography } from '@mui/material'
import { getSearchData } from './services'
import { GifType } from './types'
import HomeIcon from '@mui/icons-material/Home';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import SearchIcon from '@mui/icons-material/Search';
function App() {
  const [view, setView] = useState<string>(VIEW.dashboard)
  const [loading, setLoading] = useState<boolean>(false)
  const [gifData, setGifData] = useState<GifType[]>([])
  const getIronMan = async () => {
    const q = 'iron man'
    const params = {
      q,

    }
    const data = await getSearchData(params)
    setGifData(data.data)
  }

  const handleToIronMan = async () => {
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 300))
    getIronMan()
    setView(VIEW.ironman)
    setLoading(false)
  }

  const handleToHome=async ()=>{
    
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 300))
     setView(VIEW.dashboard)
    setLoading(false)
  }
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingX: '24px' }}>
      {
        loading ? (
          <Box sx={{paddingTOp: '40px'}}>

          <CircularProgress />
          </Box>
        ) : (
          <>
            {/* <iframe src="https://giphy.com/embed/3lvqNXheb679S" width="480" height="311" allowFullScreen></iframe> */}
            {
              view === VIEW.dashboard && (
                <Stack direction='column' sx={{
                  pt: 40
                }}>
                  <Typography variant='h4' fontWeight={600}>
                    Welcome to Your Giphy
                  </Typography>

                  <Button variant='text' onClick={handleToIronMan} >
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
                <Stack direction='column' justifyContent='center' alignItems='center' sx={{
                  paddingY: 10,
                  gap: '10px',
                  textAlign: 'center'
                }}>
                  <Stack direction='row' justifyContent='center' alignItems='center' spacing={5}>
                    <IconButton onClick={handleToHome}>
                      <HomeIcon />
                      Home
                    </IconButton>
                    <IconButton onClick={handleToIronMan}>
                      <SmartToyIcon />
                      Iron man
                    </IconButton>
                    <IconButton>
                      <SearchIcon />
                      Search
                    </IconButton>
                  </Stack>

                  <Typography variant='h4' fontWeight={600}>
                    IRONMAN GIPHY
                  </Typography>

                  <Stack direction='row' justifyContent={
                    'center'
                  } alignItems='center' flexWrap='wrap' sx={{ gap: '10px' }}>
                    {gifData ? gifData.map(gif => (
                      <Box sx={{ width: '480px', height: '250px', padding: '10px' , overflow:'hidden', }}>
                        <iframe src={gif.embed_url} width="80%" height="80%" allowFullScreen></iframe>
                        <p>{gif.title}</p>
                      </Box>
                    )) : <>
                    </>}
                  </Stack>
                </Stack>
              )

            }
            
          </>
        )
      }
    </Box>
  )
}

export default App
