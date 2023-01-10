import { Button } from 'antd';
import { TTheme, TTranslations } from '../../types';
import { TextButton } from './TextButton';

type Props = {
    translations: TTranslations;
    onCancel: () => void;
    onConfirm: () => void;
    theme: TTheme;
};

export const ModalFooter: React.FC<Props> = ({ translations, onConfirm, onCancel, theme }) => (
    <>
        <TextButton onClick={onCancel} theme={theme}>
            {translations.CANCEL}
        </TextButton>

        <Button type="primary" onClick={onConfirm}>
            {translations.OK}
        </Button>
    </>
);
