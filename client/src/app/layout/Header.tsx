import { AppBar, Switch, Toolbar, Typography } from '@mui/material'
import React from 'react'

interface Props {
  checked: boolean,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Header = ({ checked, handleChange }: Props) => {
  return (
    <>
      <AppBar position='static' sx={{ mb: 4 }}>
        <Toolbar>
          <Typography variant='h6'>RE-STORE</Typography>
          <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header