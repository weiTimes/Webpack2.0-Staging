import HeaderComponent from '../components/header.html';

import '../../lib/css/normaluse.scss';
import '../scss/about.scss';
$('.public-nav').append(HeaderComponent);
require('./public.js');

console.log('关于我们');