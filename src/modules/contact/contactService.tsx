import authAxios from "src/modules/shared/axios/authAxios";

export default class ContactService {
  static async update(id, data) {
    const body = {
      id,
      data,
    };

    const response = await authAxios.put(
      `/tenant/614634aa79ebbbc0b9c936b4/contact/${id}`,
      body
    );

    return response.data;
  }

  static async destroyAll(ids) {
    const params = {
      ids,
    };

    const response = await authAxios.delete(
      `/tenant/614634aa79ebbbc0b9c936b4/contact`,
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
      `/tenant/614634aa79ebbbc0b9c936b4/contact`,
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
      `/tenant/614634aa79ebbbc0b9c936b4/contact/import`,
      body
    );

    return response.data;
  }

  static async find(id) {
    const response = await authAxios.get(
      `/tenant/614634aa79ebbbc0b9c936b4/contact/${id}`
    );

    return response.data;
  }

  static async list(filter, orderBy, limit, offset) {
    const params = {
      filter,
      orderBy,
      limit,
      offset,
    };

    const response = await authAxios.get(
      `/tenant/614634aa79ebbbc0b9c936b4/contact`,
      {
        params,
      }
    );

    return response.data;
  }

  static async listAutocomplete(query, limit) {
    const params = {
      query,
      limit,
    };

    const response = await authAxios.get(
      `/tenant/614634aa79ebbbc0b9c936b4/contact/autocomplete`,
      {
        params,
      }
    );

    return response.data;
  }
}
