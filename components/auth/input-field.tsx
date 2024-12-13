import { Input } from "@/components/ui/input";

interface TextFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
}) => {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-semibold text-foreground">
        {label}
      </label>
      <Input
        id={name}
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="h-11 transition-all duration-200 focus:ring-2 focus:ring-primary"
      />
    </div>
  );
};

export default TextField;
