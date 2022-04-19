import request from "~/helper/request"

export const getSashimiList = async () => {
    return await request.get('https://mocki.io/v1/824c6e7d-d525-4455-b24a-3515c81edbb4');
};