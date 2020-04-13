import { ajax } from "rxjs/ajax";

import { getLanguagesEndpoint, getRegionsEndpoint } from "./endpoints";
import { Language } from "../models/Language";
import { Region } from "../models/Region";

export function getAvailableLanguages() {
  const url = getLanguagesEndpoint();
  const options: RequestInit = {
    method: 'GET'
  };

  return ajax.getJSON<{ languages: Language[] }>(url, options);
}

export function getAvailableRegions() {
  const url = getRegionsEndpoint();
  const options: RequestInit = {
    method: 'GET'
  };

  return ajax.getJSON<{ regions: Region[] }>(url, options);
}
