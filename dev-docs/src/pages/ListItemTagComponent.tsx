import React from 'react';
import { ListItemTag } from '@brightlayer-ui/react-components';
import { useSelector}  from 'react-redux';
import { Box } from '@mui/material';
const ListItemContainerStyles = {
    height: '100%',
    display: 'flex',
    minHeight: '100%',
    textAlign: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
};

export const ListItemTagComponent = (): JSX.Element => {
    
    const listItemTagJson = useSelector((state:any) => {
        return state.listItemTagComponent.listItemTagComponent[0];
    });

    function passProps(listItemTagJson: { children: any[]; }) {
        const a = listItemTagJson.children.reduce((acc:any, cur:any) => ({ ...acc, [cur.fieldName]: cur.inputText }), {})
        return a;
    }

    function renderListItemTag(listItemTagJson: { children: any[]; }) {
        return React.createElement(ListItemTag, passProps(listItemTagJson));
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Box sx={ListItemContainerStyles}>
                {renderListItemTag(listItemTagJson)}
            </Box>
        </div>
    );
};
