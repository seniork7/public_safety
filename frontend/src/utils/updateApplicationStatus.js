import { adminFetch } from "./adminFetch"

const updateApplicationStatus = async (id, status) => {
    try {
        await new Promise(resolve => setTimeout(resolve, 500))

        const response = await adminFetch(`api/admin/applications/${id}`, {
            method: "PATCH",
            body: JSON.stringify({ status })
        })

        return response

    } catch (error) {
        console.error(error)
        throw error
    }
}

export default updateApplicationStatus