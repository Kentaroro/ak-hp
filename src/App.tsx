import { HelmetProvider, Helmet } from 'react-helmet-async'
import SidebarLayout from './layout/SidebarLayout'
import Home from './pages/Home'

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>AK HIROSHI | Official Website</title>
        <meta name="description" content="AK HIROSHI Official Website" />
      </Helmet>
      <SidebarLayout>
        <Home />
      </SidebarLayout>
    </HelmetProvider>
  )
}

export default App
