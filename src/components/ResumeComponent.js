import React from 'react';
import marked from 'marked';
import { Card, CardContent } from '@material-ui/core';

class Resume extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            markdown: ''
        }
    }

    componentWillMount() {
        const resumePath = require('../resume.md');
        
        fetch(resumePath)
            .then(response => {
                return response.text();
            })
            .then(text => {
                this.setState({
                    markdown: marked(text)
                })
            })
    }

    render() {
        return (
            <Card>
                <CardContent>
                    <article className='resume' dangerouslySetInnerHTML={{ __html: this.state.markdown }}></article>
                </CardContent>
            </Card>
        );
    }
}

export default Resume;