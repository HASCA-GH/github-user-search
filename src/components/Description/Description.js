import React from 'react'
import { Stack, Typography } from '@mui/material'
import PaperInformation from '../PaperInformation/PaperInformation'

const Description = ({userState}) => {
  return (
    <>
      <Stack
        //  justifyContent="flex-start"
        //  alignItems="flex-start"
        sx={{textAlign: 'left'}}
      >
        {userState.bio !== null 
              ? <Typography>Bio: {userState.bio}</Typography>
              : <Typography>Bio: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, voluptate.  </Typography>

        }
      </Stack>
      <PaperInformation userState={userState} />
    </>
  )
}

export default Description