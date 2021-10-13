let inMemoryToken = null;
export class AuthToken {
  static set(token, rememberMe) {
    if (rememberMe) {
      localStorage.setItem("jwt", token || "");
    } else {
      inMemoryToken = token;
      localStorage.setItem("jwt", "");
    }
  }
  static get() {
    return inMemoryToken || localStorage.getItem("jwt") || null;
  }
}
