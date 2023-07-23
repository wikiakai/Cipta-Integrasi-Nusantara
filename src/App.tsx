import { useState } from 'react'
import { VIEW } from './constant'
import { Box, Button, CircularProgress, IconButton, Stack, TextField, Typography } from '@mui/material'
import { getSearchData } from './services'
import { GifType } from './types'
import HomeIcon from '@mui/icons-material/Home';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import SearchIcon from '@mui/icons-material/Search';
function App() {
  const [view, setView] = useState<string>(VIEW.dashboard)
  const [loading, setLoading] = useState<boolean>(false)
  const [loadingReq, setLoadingReq] = useState<boolean>(false)
  const [gifData, setGifData] = useState<GifType[]>([])
  const [keyWord, setKeyWord] = useState<string>('')

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
    setGifData([])

    await new Promise((resolve) => setTimeout(resolve, 300))
    getIronMan()
    setView(VIEW.ironman)
    setLoading(false)
  }

  const handleToHome = async () => {

    setLoading(true)
    setGifData([])
    await new Promise((resolve) => setTimeout(resolve, 300))
    setView(VIEW.dashboard)
    setLoading(false)
  }

  const handleToSearch = async () => {
    setLoading(true)
    setGifData([])

    await new Promise((resolve) => setTimeout(resolve, 300))

    setView(VIEW.search)
    setLoading(false)
  }

  const handleChangeText = async (e: any) => {
    const val = e.target.value
    setKeyWord(val)
    setLoadingReq(true)
    setGifData([])

    await new Promise((resolve) => setTimeout(resolve, 900))

    const params = {
      q: keyWord
    }
    const data = await getSearchData(params)
    setGifData(data.data)
    setLoadingReq(false)

  }
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingX: '24px', paddingTop: loading ? '390px' : '0px' }}>
      {
        loading ? (
          <Box sx={{ paddingTop: '40px' }}>
            <CircularProgress />
          </Box>
        ) : (
          <>
            {
              view === VIEW.dashboard && (
                <Stack direction='column' sx={{
                  pt: 20,
                  textAlign: 'center',
                  gap: '20px'
                }}>
                  <Typography variant='h4' fontWeight={600}>
                    Welcome to Your Giphy
                  </Typography>

                  <iframe src="https://giphy.com/embed/l3nFh9xbJtZYc6UhO" width="480" height="360" frameBorder="0" allowFullScreen></iframe>
                  <Button variant='text' onClick={handleToIronMan} >
                    IRON MAN GIPHY
                  </Button>
                  <Button variant='text' onClick={handleToSearch}>
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
                    <IconButton onClick={handleToSearch}>
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
                      <Box key={gif.id} sx={{ width: '480px', height: '250px', padding: '10px', overflow: 'hidden', }}>
                        <iframe src={gif.embed_url} width="80%" height="80%" allowFullScreen></iframe>
                        <p>{gif.title}</p>
                      </Box>
                    )) : <>
                    </>}
                  </Stack>
                </Stack>
              )
            }
            {
              view === VIEW.search && (
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
                    Search Gif
                  </Typography>

                  <TextField id="outlined-basic" label="Search" variant="outlined" sx={{ width: '400px' }} onChange={(e) => handleChangeText(e)} />

                  <Stack direction='row' justifyContent={
                    'center'
                  } alignItems='center' flexWrap='wrap' sx={{ gap: '10px' }}>
                    {loadingReq && (
                      <Box sx={{ paddingTOp: '40px' }}>
                        <CircularProgress />
                      </Box>
                    )}
                    {gifData ? gifData.map(gif => (
                      <Box sx={{ width: '480px', height: '250px', padding: '10px', overflow: 'hidden', }}>
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
