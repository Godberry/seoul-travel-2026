const BASE_PATH = "/seoul-travel-2026";

export function withBasePath(path: string) {
  if (!path.startsWith("/")) {
    return path;
  }

  return `${BASE_PATH}${path}`;
}
