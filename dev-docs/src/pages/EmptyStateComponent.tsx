import React from 'react';
import { EmptyState } from '@brightlayer-ui/react-components';
import { useSelector}  from 'react-redux';


export const EmptyStateComponent = (): JSX.Element => {
    
    const emptyStateJson = useSelector((state:any) => {
        return state.emptyStateComponent.emptyStateComponent[0];
    });


    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ flex: '1 1 0px' }}>
                <EmptyState
                    icon={emptyStateJson.data.field1.icon}
                    title={emptyStateJson.data.field2.title}
                    description={emptyStateJson.data.field3.description}
                />
            </div>
        </div>
    );
};
