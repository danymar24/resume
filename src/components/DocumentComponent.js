import React from 'react';
import { Card, CardContent } from '@material-ui/core';

function Word() {
    return (
        <Card className="word-document">
            <CardContent>
                <h2>Word</h2>
                <p>You can download the resume on word document.</p>
                <span><a href="DanielRodriguez_Resume_1-21-2026.docx" download>Word Document</a></span>
            </CardContent>
        </Card>
    );
}

export default Word;