import authAxios from "src/modules/shared/axios/authAxios";
import AuthCurrentTenant from "src/modules/auth/authCurrentTenant";

export default class EducationService {
  static async update(id, data) {
    const body = {
      id,
      data,
    };

    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.put(
      `/tenant/${tenantId}/education/${id}`,
      body
    );

    return response.data;
  }

  static async destroyAll(ids) {
    const params = {
      ids,
    };

    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.delete(`/tenant/${tenantId}/education`, {
      params,
    });

    return response.data;
  }

  static async create(data) {
    const body = {
      data,
    };

    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.post(
      `/tenant/${tenantId}/education`,
      body
    );

    return response.data;
  }

  static async import(values, importHash) {
    const body = {
      data: values,
      importHash,
    };

    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.post(
      `/tenant/${tenantId}/education/import`,
      body
    );

    return response.data;
  }

  static async find(id) {
    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.get(`/tenant/${tenantId}/education/${id}`);

    return response.data;
  }

  static async list() {
    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.get(`/tenant/${tenantId}/education`);

    return response.data;
  }

  static async listAutocomplete(query, limit) {
    const params = {
      query,
      limit,
    };

    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.get(
      `/tenant/${tenantId}/education/autocomplete`,
      {
        params,
      }
    );

    return response.data;
  }
}
