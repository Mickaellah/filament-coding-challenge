import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

type CompanyItemProps = {
    name: string
}

export const CompanyItem: React.FC<CompanyItemProps> = ({name}) => {
    return <Card variant="outlined">
        <CardContent>
            <Typography>{name}</Typography>
        </CardContent>
    </Card>
}