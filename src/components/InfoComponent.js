import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography, Grid, CardActionArea, CardMedia, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const styles={
    media: {
        height: 230
    }
}

const info={
    name: 'Daniel Rdz',
    title: 'Full Stack Developer',
    phone: '(469) 774 35 71',
    email: 'danymar24@gmail.com',
    linkedIn: 'linkedin.com/in/danielrdzm/',
    github: 'danymar24',
    citizenship: 'U.S. Citizen',
    location: 'Plano TX. 75025'
}

function Info(props) {
    const {classes} = props;
    return (
        <Card>
            <CardMedia image="images/danielrdz.jpg"
                       title="Daniel Rdz"
                       className={classes.media} />
            <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                    {info.name}
                </Typography>
                <Typography gutterBottom variant="title" component="h3">
                    {info.title}
                </Typography>
                <Typography gutterBottom variant="body1" component="h3">
                    Phone: {info.phone}
                </Typography>
                <Typography gutterBottom variant="body1" component="h3">
                    Email: {info.email}
                </Typography>
                <Typography gutterBottom variant="body1" component="h3">
                    LinkedIn: {info.linkedIn}
                </Typography>
                <Typography gutterBottom variant="body1" component="h3">
                    Github: {info.github}
                </Typography>
                <Typography gutterBottom variant="body1" component="h3">
                    Citizenship: {info.citizenship}
                </Typography>
                <Typography gutterBottom variant="body1" component="h3">
                    Location: {info.location}
                </Typography>
            </CardContent>
        </Card>
    );
}

Info.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Info);