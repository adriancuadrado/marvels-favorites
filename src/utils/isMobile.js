import { headers } from 'next/headers';

export default () =>
  headers()
    // Formato del header User-Agent:
    // User-Agent: Mozilla/5.0 (<system-information>) <platform> (<platform-details>) <extensions>
    // Ejemplos:
    // 1. Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36
    // 2. Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Mobile Safari/537.36
    // 3. Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1
    .get('User-Agent')
    // Quitamos (<system-information>) y (<platform-details>) para poder hacer split con el espacio
    .replace(/ \(.*\)/, '')
    .split(' ')
    // Y luego buscamos alguno que sea o bien 'Mobile' o 'Mobile/...'
    .some((e) => e.match(/^Mobile($|\/)/));
