import { ajax } from "rxjs/ajax";

import { getLanguagesEndpoint } from "./endpoints";
import { Language } from "../models/Language";

export function getAvailableLanguages() {
  const url = getLanguagesEndpoint();
  const options: RequestInit = {
    method: 'GET'
  };

  return ajax.getJSON<{ languages: Language[] }>(url, options);
}