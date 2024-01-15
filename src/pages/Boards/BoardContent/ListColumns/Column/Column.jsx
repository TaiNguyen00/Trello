import Cloud from '@mui/icons-material/Cloud'
import ContentCopy from '@mui/icons-material/ContentCopy'
import MenuItem from "@mui/material/MenuItem"
import Divider from '@mui/material/Divider'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Tooltip from "@mui/material/Tooltip"
import ListItemIcon from '@mui/material/ListItemIcon'
import ContentCut from '@mui/icons-material/ContentCut'
import ListItemText from '@mui/material/ListItemText'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { ContentPaste } from "@mui/icons-material"
import AddCardIcon from '@mui/icons-material/AddCard'
import DragHandleIcon from '@mui/icons-material/DragHandle'

import { Box, Button, Menu, Typography } from "@mui/material"

import { useState } from 'react'
import ListCards from './ListCards/ListCards'

import { mapOrder } from '~/utils/sorts'

const Column = ({ column }) => {
  const orderedCards = mapOrder(column?.cards, column?.cardOrderIds, "_id")
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box sx={{
      minWidth: '300px',
      maxWidth: '300px',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'),
      ml: 2,
      borderRadius: '6px',
      height: 'fit-content',
      maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`
    }}>
      {/* Header */}
      <Box
        sx={{
          height: (theme) => theme.trello.columnHeaderHeight,
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
        <Typography variant="h6"
          sx={{
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          {column?.title}
        </Typography>
        <Box>
          <Tooltip title='More options'>
            <ExpandMoreIcon
              sx={{
                color: 'text.primary', cursor: 'pointer'
              }}
              id="basic-column-dropdown"
              aria-controls={open ? "basic-menu-column-dropdown" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            />
          </Tooltip>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button-workspaces"
            }}
          >
            <MenuItem>
              <ListItemIcon>
                <AddCardIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Add new card</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentCut fontSize="small" />
              </ListItemIcon>
              <ListItemText>Cut</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentCopy fontSize="small" />
              </ListItemIcon>
              <ListItemText>Copy</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentPaste fontSize="small" />
              </ListItemIcon>
              <ListItemText>Paste</ListItemText>
            </MenuItem>

            <Divider />

            <MenuItem>
              <ListItemIcon>
                <Cloud fontSize="small" />
              </ListItemIcon>
              <ListItemText>Archive this column</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <DeleteForeverIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Remove this column</ListItemText>
            </MenuItem>
          </Menu>
        </Box>
      </Box>

      {/* list card */}
      <ListCards cards={orderedCards}/>

      {/* footer */}
      <Box
        sx={{
          p: 2,
          height: (theme) => theme.trello.columnFooterHeight,
          alignItems: 'center',
          justifyContent: 'space-between',
          display: 'flex'
        }}>
        <Button startIcon={<AddCardIcon />}>Add new card</Button>
        <Tooltip title='Drag to move'>
          <DragHandleIcon sx={{ cursor: 'pointer' }}/>
        </Tooltip>
      </Box>
    </Box>
  )
}

export default Column