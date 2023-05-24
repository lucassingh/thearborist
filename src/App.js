import { useTranslation } from 'react-i18next';
import Header from './components/navbar/Navbar';
import Tabs, { Book, Documentary, Exhibition } from './components/tabs/Tabs';
import Arborist from './screens/Arborist';
import Contact from './screens/Contact';
import Home from './screens/Home';
import NewProject from './screens/NewProject';

function App() {

    const { t } = useTranslation("global");

    return (
        <>
            <Header />
            <Home />
            <NewProject />
            <Tabs config={[
                    {header: t('tabs.tab1'), component:<Exhibition />},
                    {header: t('tabs.tab2'), component:<Documentary />},
                    {header: t('tabs.tab3'), component:<Book />},
                ]}
            />
            <Arborist />
            <Contact />
        </>
    );
}

export default App;
