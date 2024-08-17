import React from 'react';

export const CheckboxField = React.forwardRef<HTMLInputElement, { label: string; id: string; error: string }>(({ label, id, error }, ref) => (
    <div>
        <label htmlFor={id}>{label}</label>
        <input type="checkbox" id={id} ref={ref} />
        {error && <span>{error}</span>}
    </div>
));
