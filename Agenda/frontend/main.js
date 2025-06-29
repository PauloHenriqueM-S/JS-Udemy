import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { Login, Cadastro } from './modules/Login';
import { Contato } from './modules/Contato';

const login = new Login('.form-login');
const cadastro = new Cadastro('.form-cadastro');

login.init();
cadastro.init();

const edit = new Contato('.form-edit');
const register = new Contato('.form-register');

edit.init();
register.init();