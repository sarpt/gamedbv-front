import { ajax } from 'rxjs/ajax';

import { getLanguagesEndpoint, getRegionsEndpoint, getPlatformsEndpoint } from './endpoints';
import { Language } from '../../common/models/language';
import { Region } from '../../common/models/region';
import { Platform } from '../../common/models/platform';

export function getAvailableLanguages() {
  const url = getLanguagesEndpoint();
  const options: RequestInit = {
    method: 'GET',
  };

  return ajax.getJSON<{ languages: Language[] }>(url.href, options);
}

export function getAvailableRegions() {
  const url = getRegionsEndpoint();
  const options: RequestInit = {
    method: 'GET',
  };

  return ajax.getJSON<{ regions: Region[] }>(url.href, options);
}

export function getAvailablePlatforms() {
  const url = getPlatformsEndpoint();
  const options: RequestInit = {
    method: 'GET',
  };

  return ajax.getJSON<{ platforms: Platform[] }>(url.href, options);
}
