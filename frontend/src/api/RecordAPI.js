import { axiosAuthInstanceToAPI } from "../utils/APIUtils";

export default class RecordAPI {
    static async getRecsOfUser(uid) {
        const res = await axiosAuthInstanceToAPI.get(`/records/${uid}`);
        return res.data.records;
    }

    static async delete(id, target) {
        const res = await (axiosAuthInstanceToAPI.delete(`/records/${id}?target=${target}`))
        return res.status;
    }
}