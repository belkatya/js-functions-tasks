import get from 'lodash/get.js';

const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
  'yahoo.com',
];

// BEGIN
export default (emails) => {
  if (emails.length === 0) {
    return {};
  }
  const domainCounts = {};

  for (const email of emails) {
    const domain = email.split('@')[1];
    if (freeEmailDomains.includes(domain)) {
      if (!Object.hasOwn(domainCounts, domain)) {
        domainCounts[domain] = 0;
      }
      domainCounts[domain] += 1;
    }
  }

  return domainCounts;
}
// END