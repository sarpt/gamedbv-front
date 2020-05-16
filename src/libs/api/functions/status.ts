import { ajax } from "rxjs/ajax";

import { getLanguagesEndpoint, getRegionsEndpoint, getPlatformsEndpoint } from "./endpoints";
import { Language } from "../../common/models/Language";
import { Region } from "../../common/models/Region";
import { Platform } from "../../common/models/Platform";

export function getAvailableLanguages() {
  const url = getLanguagesEndpoint();
  const options: RequestInit = {
    method: 'GET',
  };

  return ajax.getJSON<{ languages: Language[] }>(url, options);
}

export function getAvailableRegions() {
  const url = getRegionsEndpoint();
  const options: RequestInit = {
    method: 'GET',
  };

  return ajax.getJSON<{ regions: Region[] }>(url, options);
}

export function getAvailablePlatforms() {
  const url = getPlatformsEndpoint();
  const options: RequestInit = {
    method: 'GET',
  };

  return ajax.getJSON<{ platforms: Platform[] }>(url, options);
}
