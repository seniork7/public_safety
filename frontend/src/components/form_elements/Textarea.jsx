export default function Textarea(props) {
    return (
        <textarea
        {...props}
        className={`w-full text-text-primary border border-input-border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-input-focus ${props.className || ''}`}
        />
    )
}
