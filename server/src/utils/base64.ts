import { Base64 } from "js-base64";

export function base64ToObj(b: string) {
  return JSON.parse(Base64.decode(b));
}
