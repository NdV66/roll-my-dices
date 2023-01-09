import { AppContextWrapper } from './context';
import { Page } from './view/page';

import 'antd/dist/reset.css';
import './styles/fonts.css';

export const App = () => (
    <AppContextWrapper>
        <Page />
    </AppContextWrapper>
);

export default App;
