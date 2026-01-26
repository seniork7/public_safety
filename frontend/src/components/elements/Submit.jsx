export default function Submit({ loading, buttonText, loadingText }) {
    return (
        <button 
            type="submit"
            id="submitVolunteer"
            className="w-full p-2 mt-5 rounded-lg font-semibold bg-accent-secondary hover:bg-accent-primary hover:text-text-primary text-bg cursor-pointer transition duration-700 hover:scale-98 ldbtn ldbtn-ring"
        >
            {loading ? loadingText : buttonText}
        </button>
    )
}