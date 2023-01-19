import { Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

const PrincipalInformation = ({userState}) => {
  return (
    <>
        <Stack 
            direction="row"
            sx={{justifyContent:'space-between'}}
            // justifyContent="flex-start"
            // alignItems="flex-start"
        >
            <Typography variant="h4">{userState.name}</Typography>
            <Typography variant="subtitle2">{userState.created_at}</Typography>
        </Stack>
            <Typography variant="caption">@{userState.login}</Typography>
    </>
  ) 
}

export default PrincipalInformation