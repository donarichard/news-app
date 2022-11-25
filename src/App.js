import './App.css';
import { AppRouter } from './router';
import { createTheme, ThemeProvider } from '@mui/material/styles';
function App() {
  const theme = createTheme({
    palette: {

    }
  });
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
