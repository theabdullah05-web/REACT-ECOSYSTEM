interface buttonTypes {
  label: string;
  onClick: () => void;
  disabled: boolean;
}
const Button = ({ label, onClick, disabled }: buttonTypes) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
