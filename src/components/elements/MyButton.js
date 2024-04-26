import Button from 'react-bootstrap/Button';

export default function MyButton({text, variant="primary", func}) {
    return (
        <Button className="Button" variant={variant} onClick={func}>{text}</Button>
    );
}