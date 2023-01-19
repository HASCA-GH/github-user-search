import React from 'react'
import {CardMedia, Grid, Paper, Stack} from '@mui/material';
import { Box } from '@mui/system';
import PrincipalInformation from '../../components/PrincipalInformation/PrincipalInformation';
import Description from '../../components/Description/Description';

const UserCard = ({userState}) => {
  return (

    <Paper elevation={3}>
        <Grid 
            container 
            spacing={2}
            sx={{
                marginTop: '15px',
                paddingLeft:'10px',
             }}
        >
            <Grid item xs={3}>
                <CardMedia
                    component="img"
                    alt="GitHub User"
                    image={userState.avatar_url}
                    sx={{
                        borderRadius: '50%',
                        marginLeft: '5px'
                    }}
                />
            </Grid>
            <Grid item xs={9}>
                <Stack 
                    direction="column"
                    spacing={1}
                    sx={{
                        marginTop: '15px',
                        marginBottom: '15px',
                        marginRight: '15px'
                    }}
                >
                    <PrincipalInformation userState={userState}/>
                    <Description userState={userState}/>
                </Stack>
            </Grid>
            {/* <Grid item xs={12}>
            </Grid> */}
        </Grid>
    </Paper>
  )
}

export default UserCard

{/* <Grid container spacing={2}>
                    <Grid item>
                       
                    </Grid>
                    <Grid item>
                       
                    </Grid>
    </Grid> */}