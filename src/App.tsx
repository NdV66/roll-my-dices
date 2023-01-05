import { AppContextWrapper } from './context';
import { Page } from './view/page';

export const App = () => (
    <AppContextWrapper>
        <Page />
    </AppContextWrapper>
);

export default App;
