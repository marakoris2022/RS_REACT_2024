export const SelectField = ({
    label,
    id,
    value,
    onChange,
    options,
}: {
    label: string;
    id: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: string[];
}) => (
    <div>
        <label htmlFor={id}>{label}</label>
        <select id={id} value={value} onChange={onChange}>
            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
);
