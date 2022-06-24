import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { TextField } from '@mui/material';
import { useSelector}  from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { updateListTagComponent } from '../store/actions/componentActions';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: true,
  });
  // const dispatch = useDispatch();
  const listItemTagJson = useSelector((state:any) => {
    return state.listItemTagComponent.listItemTagComponent[0];
  });

  const renderInputs = () => {
    return listItemTagJson.children.map((entry:any, index:number) => renderInput(entry, index));
  }
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>, index: number): void => {
    const newState = listItemTagJson.children.map((obj:any, id: number) =>
      id === index ? { ...obj, inputText: event.target.value } : obj
    );
  };

  const renderInput = (entry: any, index: number) => {
    return(
        <TextField
          key={index}
          variant = 'filled'
          value = {entry.inputText}
          label = {entry.fieldName}
          helperText = {entry.helperText}
          sx={{width: '100%'}}
          onChange={(event) => handleChange(event, index)}
        />
    )
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
     <div>{renderInputs()}</div>
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