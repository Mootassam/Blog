export default class authCurrentTenant {
  static selectAndSaveOnStorageFor(currentUser) {
    if (!currentUser) {
      return null;
    }
    if (!currentUser.tenants) {
      return null;
    }
    const activeTenants = currentUser.tenants.filter(
      (tenantUser) => tenantUser.status === "active"
    );
    if (!activeTenants || !activeTenants.length) {
      return null;
    }
    const tenantId = this.get();
    let tenant;

    if (tenantId) {
      tenant = activeTenants
        .map((tenantUser) => tenantUser.tenant)
        .find((tenant) => tenant.id === tenantId);
    }
    tenant = tenant || activeTenants[0].tenant;
    this.set(tenant);
    return tenant;
  }

  static get() {
    const tenantASString = localStorage.getItem("tenant") || null;
    if (tenantASString) {
      return JSON.parse(tenantASString).id;
    }
  }
  static set(tenant) {
    if (!tenant) {
      return this.clear();
    }
    localStorage.setItem("tenant", JSON.stringify(tenant));
  }
  static clear() {
    localStorage.removeItem("tenant");
  }
}
