import { Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

const PrincipalInformation = ({userState}) => {
  return (
    <>
    <Stack 
         
         justifyContent="flex-start"
         alignItems="flex-start"
    >
        <Typography>Name: {userState.name}</Typography>
        <Typography>Login: {userState.login}</Typography>
        <Typography>Created at: {userState.created_at}</Typography>
        <Typography>Followers {userState.followers}</Typography>
        <Typography>Following {userState.following}</Typography>
    </Stack>
    </>
  )
}

export default PrincipalInformation