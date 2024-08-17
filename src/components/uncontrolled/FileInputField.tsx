export const FileInputField = ({
    label,
    id,
    onChange,
    error,
}: {
    label: string;
    id: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error: string;
}) => (
    <div>
        <label htmlFor={id}>{label}</label>
        <input type="file" id={id} onChange={onChange} />
        {error && <span>{error}</span>}
    </div>
);
