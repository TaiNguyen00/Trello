import { Box } from "@mui/material"
import ModeSelect from "../ModeSelect"

const AppBar = () => {
  return (
    <Box sx={{
      backgroundColor: 'primary.light',
      with: '100%',
      height: (theme) => theme.trello.appBarHeight,
      display: 'flex',
      alignItems: 'center'
    }}>
      <ModeSelect />
    </Box>
  )
}

export default AppBar