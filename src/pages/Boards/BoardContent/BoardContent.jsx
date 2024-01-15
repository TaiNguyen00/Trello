import { Box } from "@mui/material"
import ListColumns from "./ListColumns/ListColumns"
import { mapOrder } from "~/utils/sorts"

const BoardContent = ({ board }) => {
  const orderedColumns = mapOrder(board?.columns, board?.columnOrderIds, '_id')
  return (
    <Box sx={{
      backgroundColor: 'primary.main',
      height: (theme) => (theme.trello.boardContentHeight),
      bgcolor: (theme) => (
        theme.palette.mode === "dark" ? "#34495e" : "#1975d2"
      ),
      p: '10px 0'

    }}>
      <ListColumns columns={orderedColumns}/>
    </Box>
  )
}

export default BoardContent