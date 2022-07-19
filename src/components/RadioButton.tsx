import { useFormContext } from "react-hook-form";

interface RadioButtonProps {
  selectedValue?: string;
  value: string;
  registerName: string;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  value,
  selectedValue,
  registerName,
}) => {
  const { register, setValue } = useFormContext();

  return (
    <label htmlFor={value} className="flex gap-x-0.5">
      <input
        {...register(registerName)}
        onChange={(e) => {
          setValue(registerName, e.target.value, {
            shouldValidate: true,
          });
        }}
        type="radio"
        name={registerName}
        id={value}
        value={value}
      />
      {value}
    </label>
  );
};
