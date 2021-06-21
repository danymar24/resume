import React from 'react';
import { Card, CardContent } from '@material-ui/core';

class Profile extends React.Component {
    render() {
        let data = this.props.data;
        let followers = `${data.homeUrl}/followers`;
        let repositories = `${data.homeUrl}?tab=repositories`;
        let following = `${data.homeUrl}/following`;
        if (data.notFound === 'Not Found')
            return (
                <div className="notfound">
                    <h2>Oops !!!</h2>
                    <p>The Component Couldn't Find The You Were Looking For . Try Again </p>
                </div>
            );
        else
            return (
                <Card className="github-profile">
                    <CardContent>
                        <div>
                            <h2><a href={data.homeUrl} title={data.username} target="_blank">Github</a></h2>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <a href={followers} target="_blank" title="Number Of Followers"><i>{data.followers}</i><span> Followers</span></a>
                                </li>
                                <li>
                                    <a href={repositories} target="_blank" title="Number Of Repository"><i>{data.repos}</i><span> Repositories</span></a>
                                </li>
                                <li>
                                    <a href={following} target="_blank" title="Number Of Following"><i>{data.following}</i><span>Following</span></a>
                                </li>
                            </ul>
                        </div>
                    </CardContent>
                </Card>
            );
    }
}

export default Profile;