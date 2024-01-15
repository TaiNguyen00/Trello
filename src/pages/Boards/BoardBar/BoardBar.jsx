import { Box, Button, Chip, Tooltip } from "@mui/material"
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'

import AvatarGroup from "@mui/material/AvatarGroup"
import Avatar from "@mui/material/Avatar"
import PersonAddIcon from '@mui/icons-material/PersonAdd'

import { capitalizeFirstLetter } from "~/utils/formatters"

const MENU_STYLE={
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  padding: '5px',
  borderRadius: '4px',
  '& .MuiSvgIcon-root': {
    color: 'white'
  },
  '& .MuiChip-label': {
    marginTop: '2px'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}
const BoardBar = ({ board }) => {
  // const { board } = props
  // const board = props.board
  return (
    <Box px={2} sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      overflowX: 'auto',
      justifyContent: 'space-between',
      gap: 2,
      bgcolor: (theme) => (
        theme.palette.mode === "dark" ? "#34495e" : "#1975d2"
      ),
      '&::-webkit-scrollbar-track': { // margin thanh scroll
        m: 2
      }
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          label={board?.title}
          clickable
          sx={MENU_STYLE}
          icon={<DashboardIcon />}
        />

        <Chip
          label={capitalizeFirstLetter(board?.type)}
          clickable
          sx={MENU_STYLE}
          icon={<VpnLockIcon />}
        />

        <Chip
          label="Add to Google Drive"
          clickable
          sx={MENU_STYLE}
          icon={<AddToDriveIcon />}
        />

        <Chip
          label="Automation"
          clickable
          sx={MENU_STYLE}
          icon={<BoltIcon />}
        />
        <Chip
          label="Filter"
          clickable
          sx={MENU_STYLE}
          icon={<FilterListIcon />}
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant='outlined'
          startIcon={<PersonAddIcon />}
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': {
              borderColor: 'white'
            }
          }}
        >
            Invite
        </Button>
        <AvatarGroup max={4}
          sx={{
            gap: '5px',
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16,
              border: 'none',
              color: 'white',
              '&:first-of-type': {
                bgcolor: '#a4b0be'
              }
            }
          }}
        >
          <Tooltip title='name' fontSize='bold'>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
