export default function Input({ label, invalid, ...props }) {
    return (
        <>
            <label className="block mb-2 text-xs font-bold tracking-wide text-stone-200 uppercase" $invalid={invalid}>{label}</label>
            <input className="w-full px-3 py-2 leading-tight bg-stone-300 text-gray-700 border rounded shadow" {...props} />
        </>
    );
}