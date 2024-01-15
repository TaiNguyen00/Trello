
import { Box, Button } from "@mui/material"
import Column from "./Column/Column"
import NoteAddIcon from '@mui/icons-material/NoteAdd'

const ListColumns = ({ columns }) => {

  return (
    <Box sx={{
      bgcolor: 'inherit', // kế thừa bg của thằng cha,
      width: '100%',
      height: '100%',
      display: 'flex',
      overflowX: 'auto',
      overflowY: 'hidden',
      '&::-webkit-scrollbar-track': { // margin thanh scroll
        m: 2
      }
    }}>
      {/* <Column /> */}
      {columns?.map(column => <Column key={column._id} column={column} /> )}

      {/* Box add new column */}
      <Box sx={{
        minWidth: '200px',
        maxWidth: '200px',
        mx: 2,
        borderRadius: '6px',
        height: 'fit-content', // chiều cao sẽ bằng content của nó
        bgcolor: '#ffffff3d'
      }}>
        <Button
          sx={{
            color: 'white',
            width: '100%',
            justifyContent: 'flex-start',
            pl: 2.5,
            py: 1 // 1 = 8px
          }}
          startIcon={<NoteAddIcon />}>
            Add new column
        </Button>
      </Box>
    </Box>
  )
}

export default ListColumns