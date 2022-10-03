import { availableLangs } from './types/lang';
import { buildJson } from './utils/template';

import * as fs from 'fs';

availableLangs.forEach(lang => {
  const filename = lang === 'en' ? 'package.nls.json' : `package.nls.${lang}.json`;
  const json = buildJson(lang);

  fs.writeFile(filename, JSON.stringify(json, null, 2), 'utf8', () => {});
});

export {};
