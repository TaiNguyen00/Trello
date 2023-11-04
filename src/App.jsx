import { Button, Typography } from "@mui/material"
import { useState } from "react"

// toggle dark ? light
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
  useColorScheme,
} from '@mui/material/styles'

function ModeToggle() {
  const { mode, setMode } = useColorScheme()
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light')
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  )
}

function App() {
  const [changeColor, setChangeColor] = useState(false)
  return (
    <>
      <div>
        <ModeToggle />
        <Button variant="outlined"
          onClick={() => setChangeColor(!changeColor)}
        >
          Change Color
        </Button>


        <Typography variant="body2" color={changeColor ? 'text.secondary' : 'text.primary'}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nemo
          sit incidunt debitis dicta ad molestias eum delectus! Corrupti
          voluptatem velit consequatur reprehenderit, voluptatibus accusamus
          nostrum vel doloremque numquam atque?
        </Typography>
      </div>
    </>
  )
}

export default App
