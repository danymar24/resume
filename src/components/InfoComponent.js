import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography, CardMedia, withStyles } from '@material-ui/core';
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
    email: {
        title: 'danymar24@gmail.com',
        url: 'danymar24@gmail.com'
    },
    linkedIn: {
        title: 'linkedin.com/in/danielrdzm/',
        url: 'https://linkedin.com/in/danielrdzm/'
    },
    github: {
        title: 'danymar24',
        url: 'https://github.com/danymar24'
    },
    citizenship: 'U.S. Citizen (Authorized to work in the US for any employer)',
    location: 'Aubrey TX. 76227'
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
                    Email: <a href={'mailto:' + info.email.url}>{info.email.title}</a>
                </Typography>
                <Typography gutterBottom variant="body1" component="h3">
                    LinkedIn: <a target="_blank" href={info.linkedIn.url}>{info.linkedIn.url}</a>
                </Typography>
                <Typography gutterBottom variant="body1" component="h3">
                    Github: <a target="_blank" href={info.github.url}>{info.github.title}</a>
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