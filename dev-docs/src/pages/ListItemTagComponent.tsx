import React from 'react';
import { ListItemTag } from '@brightlayer-ui/react-components';
import { useSelector}  from 'react-redux';

// interface listItemProps {
//     label: string;
//     backgroundColor: string;
//     fontColor: string
//   }

export const ListItemTagComponent = (): JSX.Element => {
    
    const listItemTagJson = useSelector((state:any) => {
        return state.listItemTagComponent.listItemTagComponent[0];
    });

    function passProps() {
        const a: { [key: string]: any } = {
            label: null,
            backgroundColor: null,
            fontColor: null,
          };
        
        listItemTagJson.children.map((res: any) => {
            console.log(res);
            a[res.fieldName] = res[res.fieldName];
        })
        return a;
        
    }

    console.log(passProps());
    function renderListItemTag(listItemTagJson: any) {
        console.log('listItemTagJson',listItemTagJson);
        const aaa = passProps();
        console.log('aaa', aaa)
        const ab = {label: 'ListitemTag', backgroundColor: 'black', fontColor: 'gold'};
        return React.createElement(ListItemTag, ab);
    }

    console.log('listItemTagJson', listItemTagJson);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ flex: '1 1 0px' }}>
                {/* <ListItemTag
                    label={'dd'}
                /> */}
                {renderListItemTag(listItemTagJson)}
            </div>
        </div>
    );
};
