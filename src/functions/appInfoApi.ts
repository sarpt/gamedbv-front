import { ajax } from "rxjs/ajax";

import { getLanguagesEndpoint } from "./endpoints";

export function getAvailableLanguages() {
  const url = getLanguagesEndpoint();
  const options: RequestInit = {
    method: 'GET'
  };

  return ajax.getJSON<string[]>(url, options);
}