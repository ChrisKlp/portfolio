import { ThemeProvider } from 'styled-components';
import { Container, Filters, Header, Intro, Projects } from './components';
import Footer from './components/Footer/Footer';
import { Provider } from './context/Context';
import GlobalStyle from './global/GlobalStyle';
import theme from './global/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Provider>
        <Header />
        <main>
          <Container>
            <Intro />
            <Filters />
            <Projects />
          </Container>
        </main>
        <Footer />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
