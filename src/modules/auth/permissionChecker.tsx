export default class PermissionChecker {
  currentUser;

  constructor(currentUser) {
    this.currentUser = currentUser;
  }

  get isAuthenticated() {
    return Boolean(this.currentUser) && Boolean(this.currentUser.id);
  }
}
