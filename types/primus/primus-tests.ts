import * as http from 'http';
import Primus from 'primus';

var server = http.createServer(/* request handler */)
  , primus = new Primus(server, {/* options */});
