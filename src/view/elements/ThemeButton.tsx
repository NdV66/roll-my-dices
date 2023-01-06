import { Switch, SwitchProps } from 'antd';

type Props = Pick<SwitchProps, 'unCheckedChildren' | 'checked' | 'checkedChildren'> & {
    onChange: () => void;
};

export const ThemeButton: React.FC<Props> = ({ onChange, ...props }) => <Switch onChange={onChange} {...props} />;
