import authAxios from "src/modules/shared/axios/authAxios";
import authCurrentTenant from "../auth/authCurrentTenant";

export default class ContactService {
  static async update(id, data) {
    const body = {
      id,
      data,
    };
    const tenantId = authCurrentTenant.get();
    const response = await authAxios.put(
      `/tenant/${tenantId}/contact/${id}`,
      body
    );

    return response.data;
  }

  static async destroyAll(ids) {
    const params = {
      ids,
    };
    const tenantId = authCurrentTenant.get();
    const response = await authAxios.delete(`/tenant/${tenantId}/contact`, {
      params,
    });

    return response.data;
  }

  static async create(data) {
    const body = {
      data,
    };
    const tenantId = authCurrentTenant.get();
    const response = await authAxios.post(`/tenant/${tenantId}/contact`, body);

    return response.data;
  }

  static async import(values, importHash) {
    const body = {
      data: values,
      importHash,
    };
    const tenantId = authCurrentTenant.get();
    const response = await authAxios.post(
      `/tenant/${tenantId}/contact/import`,
      body
    );

    return response.data;
  }

  static async find(id) {
    const tenantId = authCurrentTenant.get();
    const response = await authAxios.get(`/tenant/${tenantId}/contact/${id}`);

    return response.data;
  }

  static async list() {
    const tenantId = authCurrentTenant.get();
    const response = await authAxios.get(`/tenant/${tenantId}/contact`);

    return response.data;
  }

  // static async listAutocomplete(query, limit) {
  //   const params = {
  //     query,
  //     limit,
  //   };

  //   const response = await authAxios.get(
  //     `/tenant/${tenantId}/contact/autocomplete`,
  //     {
  //       params,
  //     }
  //   );

  //   return response.data;
  // }
}
