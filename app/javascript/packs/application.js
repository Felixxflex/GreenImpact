// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// require social-share-button
// require social-share-button/wechat # if you need use WeChat
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
//
//*= require mapbox-gl
//= require_tree .
//= require jquery
//= require bootstrap-sprockets
// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------
// require('@zxing/library').start(.)
// External imports
import "bootstrap";
import "@fortawesome/fontawesome-free/js/all";
import { initMapbox } from '../plugins/init_mapbox';

import { BrowserQRCodeReader } from '@zxing/library';
import Rails from '@rails/ujs'; // Use to make an ajax post request to Rails
// Internal imports, e.g:
// import { initSelect2 } from '../components/init_select2';

document.addEventListener('turbolinks:load', () => {
    initMapbox();
    // Call your functions here, e.g:
    // initSelect2();
});