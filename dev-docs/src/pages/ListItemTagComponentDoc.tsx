import React from 'react';
import { Box } from '@mui/material';
import ListItemDoc from '../docs/markdown/ListItemDoc.mdx';
const ListItemTagComponentDocStyles = {
    p: 2
};

export const ListItemTagComponentDoc = (): JSX.Element => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Box sx={ListItemTagComponentDocStyles}>
                <ListItemDoc />
            </Box>
        </div>
    );
};
