const InputField = ({ label, value, onChange, name, placeholder }) => {
    const displayLabel = label.replace(/_/g, " ");
    const inputType = name && name.toLowerCase().includes("mobile") ? "tel" : "text";

    return (
        <div className="space-y-2">
            <label htmlFor={name} className="block text-sm font-semibold text-slate-700">
                {displayLabel}
            </label>
            <input
                id={name}
                type={inputType}
                name={name}
                value={value}
                onChange={onChange}
                autoComplete="off"
                placeholder={placeholder || displayLabel}
                aria-label={displayLabel}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition duration-150 focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
            />
        </div>
    );
};

export default InputField;