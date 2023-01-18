import React from 'react'
import {CardMedia, Grid, Paper} from '@mui/material';
import { Box } from '@mui/system';
import PrincipalInformation from '../../components/PrincipalInformation/PrincipalInformation';
import Description from '../../components/Description/Description';

const UserCard = ({userState}) => {
  return (

    <Paper elevation={3}>
        <Grid container spacing={2}>
            
            <Grid item xs={3}>
                <CardMedia
                    component="img"
                    alt="GitHub User"
                    image={userState.avatar_url}
                />
            </Grid>
            <Grid item xs={9}>
                <PrincipalInformation userState={userState}/>
            </Grid>
            <Grid item xs={12}>
                <Description userState={userState}/>
            </Grid>
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