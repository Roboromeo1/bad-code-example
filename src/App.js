/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable require-jsdoc */
import '@fontsource/public-sans';
import {Box, CssBaseline, CssVarsProvider} from '@mui/joy';

import TodoList from 'src/containers/TodoList';

function App() {
  return (
    <CssVarsProvider>
      <CssBaseline />
      <Box
        sx={{display: 'flex', minHeight: '100dvh'}}
        component="main"
        className="MainContent"
      >
        <Box
          sx={(theme) => ({
            px: {
              xs: 2,
              md: 6,
            },
            pt: {
              xs: `calc(${theme.spacing(2)} + var(--Header-height))`,
              sm: `calc(${theme.spacing(2)} + var(--Header-height))`,
              md: 3,
            },
            pb: {
              xs: 2,
              sm: 2,
              md: 3,
            },

            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            minWidth: 0,
            height: '100dvh',
            gap: 1,
          })}
        >
          <TodoList />
        </Box>
      </Box>
    </CssVarsProvider>
  );
}

export default App;
