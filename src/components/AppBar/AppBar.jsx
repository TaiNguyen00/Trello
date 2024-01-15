import { Box, Button, Typography, TextField, Badge } from "@mui/material"
import ModeSelect from "../ModeSelect/ModeSelect"

import AppsIcon from "@mui/icons-material/Apps"
import { ReactComponent as TrelloIcon } from "~/assets/trello.svg"

import SvgIcon from "@mui/material/SvgIcon"
import WorkSpaces from "./Menus/WorkSpaces"
import Recent from "./Menus/Recent"
import Template from "./Menus/Template"
import Starred from "./Menus/Starred"
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone"
import Tooltip from "@mui/material/Tooltip"
import HelpOutlineIcon from "@mui/icons-material/HelpOutline"
import Profile from "./Menus/Profile"
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from "@mui/icons-material/Close"
import { useState } from "react"


const AppBar = () => {
  const [searchValue, setSearchValue] = useState('')
  return (
    <Box
      px={2}
      sx={{
        with: "100%",
        height: (theme) => theme.trello.appBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        // sử lý việc bị khoảng trắng khi responsive
        overflowX: "auto",
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#2c3e50" : "#1565c0",
        '&::-webkit-scrollbar-track': { // margin thanh scroll
          m: 2
        }
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <AppsIcon sx={{ color: "white" }} />
        {/* Config và sử dụng svgIcon để đồng bộ font size... cho svg */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <SvgIcon
            component={TrelloIcon}
            fontSize="small"
            inheritViewBox
            sx={{ color: "white" }}
          />
          <Typography
            variant="span"
            sx={{ fontSize: "1.2rem", fontWeight: "bold", color: "white" }}
          >
            Trello
          </Typography>
        </Box>

        {/* mẹo để responsive */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
          <WorkSpaces />
          <Recent />
          <Template />
          <Starred />
          <Button
            sx={{
              color: "white",
              border: 'none'
            }}
            startIcon={<LibraryAddIcon />}
          >
            Create
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <TextField
          id="outlined-basic"
          variant="outlined"
          label="Search"
          type='text'
          size="small"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon sx={{ color: 'white' }}/>
              </InputAdornment>
            ),
            endAdornment: (
              <CloseIcon
                onClick={() => setSearchValue('')}
                fontSize="small"
                sx={{ color: searchValue ? 'white' : 'transparent', cursor: searchValue ? 'pointer' : 'text' }}
              />
            )
          }}
          sx={{
            minWidth: "120px",
            maxWidth: '180px',
            '& label': {
              color: 'white'
            },
            '& input': {
              color: 'white'
            },
            '& label.Mui-focused': {
              color: 'white'
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white'
              },
              '&:hover fieldset': {
                borderColor: 'white'
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white'
              }
            }
          }}
        />
        <ModeSelect />
        <Tooltip title="Notification">
          <Badge color="warning" variant="dot">
            <NotificationsNoneIcon sx={{ cursor: "pointer", color: "white" }} />
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <Badge color="warning" variant="dot">
            <HelpOutlineIcon sx={{ cursor: "pointer", color: "white" }} />
          </Badge>
        </Tooltip>
        <Profile />
      </Box>
    </Box>
  )
}

export default AppBar
