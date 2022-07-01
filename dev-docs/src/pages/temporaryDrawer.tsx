import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { TextField } from '@mui/material';
import { useSelector}  from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateListTagComponent } from '../redux/listItemComponent';
import { listItemTagPropItem } from '../componentJson/ListItemTagJson';
import { RootState } from '../redux/store';

type Anchor = 'right';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    right: true,
  });
  const dispatch = useDispatch();
  const listItemTagJson = useSelector((state: RootState) => state.listItemTagComponentData.listItemTagComponent[0])

  const renderInputs = () => {
    return listItemTagJson.children.map((entry:listItemTagPropItem, index:number) => renderInput(entry, index));
  }
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>, index: number): void => {
    const newState = listItemTagJson.children.map((obj:listItemTagPropItem, id: number) =>
      id === index ? { ...obj, inputText: event.target.value } : obj
    );
    dispatch(updateListTagComponent(newState))
  };

  const renderInput = (entry: listItemTagPropItem, index: number) => {
    return(
        <TextField
          key={index}
          variant = 'filled'
          value = {entry.inputText}
          label = {entry.label}
          helperText = {entry.helperText}
          sx={{width: '100%', m: '8px 0'}}
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
      {(['right'] as const).map((anchor) => (
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