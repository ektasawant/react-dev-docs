import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { TextField } from '@mui/material';
import { ListItemTag } from '@brightlayer-ui/react-components';
import { useSelector}  from 'react-redux';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: true,
  });

  const emptyStateJson = useSelector((state:any) => {
    return state.emptyStateComponent.emptyStateComponent[0];
  });

  function listItem() {
    return React.createElement(ListItemTag, { label: 'a prop' });
  }

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 375, p: 2 }}
      role="presentation"
    >
     {/* <TextField
          sx={{width: '100%'}}
          variant={'filled'}
          value={emptyStateJson.data.field1.inputText}
          label={emptyStateJson.data.field1.fieldName}
          helperText={emptyStateJson.data.field1.helperText}
      /> */}
      <div>{listItem()}</div>

      <TextField
          sx={{width: '100%'}}
          variant={'filled'}
          value={emptyStateJson.data.field2.inputText}
          label={emptyStateJson.data.field2.fieldName}
          helperText={emptyStateJson.data.field2.helperText}
      />
      <TextField
          sx={{width: '100%'}}
          variant={'filled'}
          value={emptyStateJson.data.field3.inputText}
          label={emptyStateJson.data.field3.fieldName}
          helperText={emptyStateJson.data.field3.helperText}
      />
    </Box>
  );

  return (
    <div>
      {(['left', 'right', 'top', 'bottom'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            PaperProps={{
              sx: {
                mt: '64px'
              }
            }}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            variant={'persistent'}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}