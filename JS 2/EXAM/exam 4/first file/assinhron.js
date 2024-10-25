import { get } from "./sinhron.js";

let api = "https://66e583cf5cc7f9b6273d908c.mockapi.io/user";

export async function getData() {
    try {
        const { data } = await axios.get(api);
        get(data);
    } catch (error) {
        console.error(error);
    }
}