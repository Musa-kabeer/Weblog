import { format, parseISO } from 'date-fns';
import { enGB, eo, ru } from 'date-fns/locale';

const locales = { enGB, eo, ru };

export const formatDate = (date, formatStr = 'PP') => {
  return format(parseISO(date), formatStr, {
    locale: locales[window.__localeId__],
  });
};
