export default function Checkbox(props) {
    return (
        <input
        type="checkbox"
        {...props}
        className={`h-4 w-4 rounded ${props.className || ''}`}
        />
    )
}
