import { LocationOff } from "@mui/icons-material";

const emptyStateJson = [{
    componentName: 'Empty State',
    data: {
        field1: {
            inputType: 'Input',
            fieldName: 'icon',
            inputText: "<LocationOff fontSize={'inherit'} />",
            icon: <LocationOff fontSize={'inherit'} />,
            helperText: 'The primary icon',
        },
        field2: {
            inputType: 'Input',
            fieldName: 'title',
            inputText: "Location Services Disabled",
            title: 'Location Services Disabled',
            helperText: 'The main text to display',
        },
        field3: {
            inputType: 'Input',
            fieldName: 'description',
            inputText: "Enable Location Services via Settings to receive GPS information",
            description: 'Enable Location Services via Settings to receive GPS information',
            helperText: 'The secondary text to display',
        }
    },
    data1: [
        {
            inputType: 'Input',
            fieldName: 'icon',
            inputText: "<LocationOff fontSize={'inherit'} />",
            icon: <LocationOff fontSize={'inherit'} />,
            helperText: 'The primary icon',
        },
        {
            inputType: 'Input',
            fieldName: 'title',
            inputText: "Location Services Disabled",
            title: 'Location Services Disabled',
            helperText: 'The main text to display',
        },
        {
            inputType: 'Input',
            fieldName: 'description',
            inputText: "Enable Location Services via Settings to receive GPS information",
            description: 'Enable Location Services via Settings to receive GPS information',
            helperText: 'The secondary text to display',
        }
    ]
}]

export default emptyStateJson