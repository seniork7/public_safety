export default function TextInput(props) {
    return (
        <input
        {...props}
        className={`w-full text-text-primary border border-input-border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-input-focus ${props.className || ''}`}
        />
    )
}
