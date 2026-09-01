import React from 'react';
import { Card, CardContent } from '@material-ui/core';

function Word() {
    return (
        <Card className="word-document">
            <CardContent>
                <h2>Word</h2>
                <p>You can download the resume on word or pdf documents.</p>
                <span><a href="DanielRodriguez_SeniorMobileSpecialist.docx" download>Word Document</a></span>
                <br/>
                <span><a href="DanielRodriguez_SeniorMobileSpecialist.pdf" download>PDF Document</a></span>
            </CardContent>
        </Card>
    );
}

export default Word;