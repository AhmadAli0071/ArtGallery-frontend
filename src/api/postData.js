import axios from "../utils/AxiosConfig";

export const postData = async (endpoint, dataToPost) => {

    try {
        console.log(dataToPost);
        const data = await axios.post(endpoint, dataToPost)
        return data;
    } catch (error) {
        console.log(error);
        throw error
    }
}