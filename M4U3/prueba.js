var moment = require('moment');
moment.locale('es');
console.log('Naci '+ moment('25/05/1988','DD/MM/YYYY').fromNow())