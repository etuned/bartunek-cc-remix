import { Link, useLocation } from 'react-router-dom';
import { 
  MantineProvider, 
  AppShell, 
  Header, 
  Grid, 
  Text, 
  Group, 
  Container, 
  Anchor, 
} from '@mantine/core';
import { Routes, Route } from 'react-router-dom';
import ErrorBoundary from './utils/ErrorBoundary';
import Error404 from './components/Error404';
import Home from './components/Home';
import Projects from './components/Projects';

export default function App() {
  const location = useLocation();
  return (
    <MantineProvider 
      withGlobalStyles 
      withNormalizeCSS
      theme={{
        colorScheme: 'dark',
        colors: {
          'ocean-blue': ['#7AD1DD', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
          'bright-pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
        dark: [
            '#d5d7e0',
            '#acaebf',
            '#8c8fa3',
            '#666980',
            '#4d4f66',
            '#34354a',
            '#2b2c3d',
            '#272343',
            '#0c0d21',
            '#01010a',
          ],
        },
      }}
    >
      <AppShell
        header={
          <Header py={20}  height={65}>
            <Container size="lg">
              <Group position='left'>
                  <Anchor
                    color={
                      location.pathname === '/'
                      ?
                      "cyan"
                      :
                      "dimmed"
                    }
                    underline={false}
                    component={Link} 
                    to="/" 
                  >
                    Home
                  </Anchor>
                  <Anchor
                    color={
                      location.pathname === '/projects'
                      ?
                      "cyan"
                      :
                      "dimmed"
                    }
                    underline={false}
                    component={Link} 
                    to="/projects" 
                  >
                    Projects
                  </Anchor>
                </Group>
            </Container>
            </Header>
        }
      >
        <Container>
          
          <ErrorBoundary>
            <Routes>
              <Route path="*" element={<Error404 />} />
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </ErrorBoundary>
        </Container>
      </AppShell>
    </MantineProvider>
  );
}
