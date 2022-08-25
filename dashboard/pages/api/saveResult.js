import axios from "axios";
const BASE_URL = "http://localhost:8080";

export const saveResult = async (result) => {
    const { data } = await axios.post(
        `${BASE_URL}/result`,
        { result },
        {
            headers: {
                "Content-Type": "application/json"
            }
        }
    );
    return data.apiKey;
};
