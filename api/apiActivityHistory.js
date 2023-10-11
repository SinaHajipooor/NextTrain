import axiosConfig from "../utils/axios";

export async function apiShowActivityHistory(id) {
    try {
        const response = await axiosConfig.get(`/api/profile/activity-history/show/${id}?user_id=1`);
        const data = response.data.result;

        return data;
    } catch (error) {
        console.log(error.message)
        throw new Error(error.message)
    }
}