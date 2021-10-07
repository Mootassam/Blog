import authAxios from "src/modules/shared/axios/authAxios";

export default class ContactService {
  static async update(id, data) {
    const body = {
      id,
      data,
    };

    const response = await authAxios.put(
      `/tenant/615f3b4e4ca08f6d8056f95c/contact/${id}`,
      body
    );

    return response.data;
  }

  static async destroyAll(ids) {
    const params = {
      ids,
    };

    const response = await authAxios.delete(
      `/tenant/615f3b4e4ca08f6d8056f95c/contact`,
      {
        params,
      }
    );

    return response.data;
  }

  static async create(data) {
    const body = {
      data,
    };

    const response = await authAxios.post(
      `/tenant/615f3b4e4ca08f6d8056f95c/contact`,
      body
    );

    return response.data;
  }

  static async import(values, importHash) {
    const body = {
      data: values,
      importHash,
    };

    const response = await authAxios.post(
      `/tenant/615f3b4e4ca08f6d8056f95c/contact/import`,
      body
    );

    return response.data;
  }

  static async find(id) {
    const response = await authAxios.get(
      `/tenant/615f3b4e4ca08f6d8056f95c/contact/${id}`
    );

    return response.data;
  }

  static async list() {
    const response = await authAxios.get(
      `/tenant/615f3b4e4ca08f6d8056f95c/contact`
    );

    return response.data;
  }

  // static async listAutocomplete(query, limit) {
  //   const params = {
  //     query,
  //     limit,
  //   };

  //   const response = await authAxios.get(
  //     `/tenant/615f3b4e4ca08f6d8056f95c/contact/autocomplete`,
  //     {
  //       params,
  //     }
  //   );

  //   return response.data;
  // }
}
