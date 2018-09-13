import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import Profile from './ProfileComponent';

const API = 'https://api.github.com/users';

class Github extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'danymar24',
            name: '',
            avatar: '',
            location: '',
            repos: '',
            followers: '',
            following: '',
            homeUrl: '',
            notFound: ''
        }
    }
    fetchProfile(username) {
        let url = `${API}/${username}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    username: data.login,
                    name: data.name,
                    avatar: data.avatar_url,
                    location: data.location,
                    repos: data.public_repos,
                    followers: data.followers,
                    following: data.following,
                    homeUrl: data.html_url,
                    notFound: data.message
                })
            })
            .catch((error) => console.log('Oops! . There Is A Problem'))
    }
    componentDidMount() {
        this.fetchProfile(this.state.username);
    }
    render() {
        return (
            <div>
                <section id="card">
                    <Profile data={this.state} />
                </section>
            </div>
        )
    }
}

export default Github;
