import React from 'react';

export const FormField = React.forwardRef<HTMLInputElement, { label: string; id: string; type?: string; error: string; defaultValue?: string }>(
    ({ label, id, type = 'text', error, defaultValue = '' }, ref) => (
        <div>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} ref={ref} defaultValue={defaultValue} />
            {error && <span>{error}</span>}
        </div>
    )
);
