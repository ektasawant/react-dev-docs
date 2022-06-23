import { createAction } from '@reduxjs/toolkit';

export const showComponent = createAction('showComponent');



// const emptyStateJson1 = {
//     componentName: 'Empty State',
//     data: {
//         field1: {
//             inputType: 'Input',
//             fieldName: 'icon',
//             inputText: "<LocationOff fontSize={'inherit'} />",
//             icon: <LocationOff fontSize={'inherit'} />,
//             helperText: 'The primary icon',
//         },
//         field2: {
//             inputType: 'Input',
//             fieldName: 'title',
//             inputText: "Location Services Disabled",
//             title: 'Location Services Disabled',
//             helperText: 'The main text to display',
//         },
//         field3: {
//             inputType: 'Input',
//             fieldName: 'description',
//             inputText: "Enable Location Services via Settings to receive GPS informationil",
//             description: 'Enable Location Services via Settings to receive GPS informationil',
//             helperText: 'The secondary text to display',
//         },
//     },
// }