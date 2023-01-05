type Props = {
    onClick: () => void;
    text: string;
};

export const DiceButton: React.FC<Props> = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;
