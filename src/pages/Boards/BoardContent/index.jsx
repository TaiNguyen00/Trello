import { Box } from "@mui/material"

const BoardContent = () => {
  return (
    <Box sx={{
      backgroundColor: 'primary.main',
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      height: (theme) => `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`
    }}>
      Broad content
    </Box>
  )
}

export default BoardContent