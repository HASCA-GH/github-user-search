import { Paper, Stack, Typography } from '@mui/material'
import React from 'react'

const PaperInformation = ({userState}) => {
  return (
    <>
        <Paper elevation={3} sx={{margin: '10px 10px'}}>
            <Stack 
                direction="row" 
                spacing={3} 
                sx={{justifyContent: 'space-evenly', margin:'20px'}}
            >
                <Stack>
                    <Typography variant='h7'>Repos</Typography>
                    <Typography variant='h8'>{userState.public_repos}</Typography>
                </Stack>
                <Stack>
                    <Typography variant='h7'>Followers</Typography>
                    <Typography variant='h8'>{userState.followers}</Typography>
                </Stack>
                <Stack>
                    <Typography variant='h7'>Following</Typography>
                    <Typography variant='h8'>{userState.following}</Typography>
                </Stack>
            </Stack>
        </Paper>
    </>
  )
}

export default PaperInformation