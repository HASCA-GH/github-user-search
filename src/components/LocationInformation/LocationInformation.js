import React from 'react'
import { Grid, Stack, Typography } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import BusinessIcon from '@mui/icons-material/Business';

const LocationInformation = ({userState}) => {
  return (
    <Grid 
        container
        spacing={2}
        sx={{marginTop: '15px'}}
    >
        <Grid item xs={6}>
            <Stack direction="row" spacing={2}>
                <LocationOnIcon/>
                     {userState.location !== null 
                    ? <Typography>{userState.location}</Typography>
                    : <Typography>Location not available</Typography>
                }
            </Stack>
        </Grid>
        <Grid item xs={6}>
            <Stack direction="row" spacing={2}>
                <TwitterIcon/>
                {userState.twitter_username !== null 
                    ? <Typography>@{userState.twitter_username}</Typography>
                    : <Typography>Twitter not available</Typography>
                }
            </Stack>
        </Grid>
        <Grid item xs={6}>
            <Stack direction="row" spacing={2}>
                <LanguageIcon/>
                {userState.blog !== null 
                    ?   <a target={'_blank'} rel="noreferrer noopener" href={userState.blog}> 
                            <Typography>{userState.blog}</Typography>
                        </a>
                    : <Typography>Blog not available</Typography>
                }
            </Stack>
        </Grid>
        <Grid item xs={6}>
            <Stack direction="row" spacing={2}>
                <BusinessIcon/>
                {userState.company !== null 
                    ? <Typography>{userState.company}</Typography>
                    : <Typography>Company not available</Typography>
                }
            </Stack>
        </Grid>
    </Grid>
  )
}

export default LocationInformation