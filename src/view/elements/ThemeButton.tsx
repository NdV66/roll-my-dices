import { AppTheme } from '../../types';

type Props = {
    onClick: () => void;
    theme: AppTheme;
};

export const ThemeButton: React.FC<Props> = ({ onClick, theme }) => <button onClick={onClick}>Current: {theme}</button>;
