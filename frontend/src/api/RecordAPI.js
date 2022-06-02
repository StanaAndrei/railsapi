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

    static async add({ distance, startTime, endTime }) {
        await axiosAuthInstanceToAPI.post('/records', {
            distance, start_time: startTime, end_time: endTime
        });
    }

    static async update(id, { distance, startTime, endTime }) {
        await axiosAuthInstanceToAPI.patch(`/records/${id}`, {
            distance, start_time: startTime, end_time: endTime
        });
    }
}