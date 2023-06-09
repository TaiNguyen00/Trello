
import { Button } from '@mui/material'
import { green } from '@mui/material/colors'
import { Home } from '@mui/icons-material'
function App() {

  return (
    <>
      <div>
        <Button variant="contained">Hello World</Button>
        <Button variant='outlined'>Hello World</Button>

        <Home sx={{ color: green[600] }}/>
      </div>
    </>
  )
}

export default App
