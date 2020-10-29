import config from 'config';

const cookie = config.get<NS.Config.Cookie>('cookie');
console.log(cookie.name);