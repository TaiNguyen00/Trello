
// toggle dark ? light
import { useColorScheme } from "@mui/material/styles"

import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"


import { SettingsBrightness, DarkModeOutlined, LightMode } from "@mui/icons-material"
import { Box } from "@mui/material"

function ModeSelect() {
  const { mode, setMode } = useColorScheme()

  const handleChange = (event) => {
    setMode(event.target.value)
  }

  return (
    <FormControl size="small" sx={{ minWidth: '120px' }}>
      <InputLabel
        id="label-select-dark-light"
        sx={{
          color: 'white',
          '&.Mui-focused': { color: 'white' }
        }}
      >
        Mode
      </InputLabel>
      <Select
        labelId="label-select-dark-light"
        id="demo-select-small"
        label="Mode"
        value={mode}
        onChange={handleChange}
        sx={{
          color: 'white',
          '.MuiSvgIcon-root': {
            color: 'white'
          },
          '.MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
          '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'white' }
        }}
      >
        <MenuItem value="light">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LightMode fontSize="small"/> Light
          </Box>
        </MenuItem>
        <MenuItem value="dark">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <DarkModeOutlined fontSize="small"/> Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <SettingsBrightness fontSize="small"/> System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

export default ModeSelect
