export function checkBrowser() {
  if (typeof window !== undefined) return true;
  return false;
}