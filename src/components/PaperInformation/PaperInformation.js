import { Paper, Stack, Typography } from '@mui/material'
import React from 'react'

const PaperInformation = ({userState}) => {
  return (
    <>
        <Paper elevation={3} sx={{margin: '10px 10px'}}>
            <Stack>
                <Typography>Repos</Typography>
                <Typography>{userState.public_repos}</Typography>
                <Typography>Followers</Typography>
                <Typography>{userState.followers}</Typography>
                <Typography>Following</Typography>
                <Typography>{userState.following}</Typography>
            </Stack>
        </Paper>
    </>
  )
}

export default PaperInformation