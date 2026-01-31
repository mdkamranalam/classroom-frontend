import {BaseRecord, DataProviders, GetListParams, GetListResponse} from "@refinedev/core";
import {MOCK_SUBJECTS} from "@/constants/mock_data.ts";

export const dataProvider: DataProviders = {
  getList: async <TData extends BaseRecord = BaseRecord>({resource}: GetListParams): Promise<GetListResponse<TData>> => {
    if (resource !== "subjects") return {data: [] as TData[], total: 0};

    return {
        data: MOCK_SUBJECTS as unknown as TData[],
        total: MOCK_SUBJECTS.length
    }
  },

  getOne: async () => {throw new Error("[getOne] This function is not present in mock")},
  create: async () => {throw new Error("[create] This function is not present in mock")},
  update: async () => {throw new Error("[update] This function is not present in mock")},
  deleteOne: async () => {throw new Error("[deleteOne] This function is not present in mock")},

    getApiUrl: () => "",
}
