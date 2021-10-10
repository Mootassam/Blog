let inMemory = null;
export class AuthToken {
  static set(token, rememberMe) {
    if (rememberMe) {
      localStorage.setItem("jwt", token || "");
    } else {
      inMemory = token;
      localStorage.setItem("jwt", "");
    }
  }
  static get() {
    return inMemory || localStorage.getItem("jwt") || null;
  }
}
