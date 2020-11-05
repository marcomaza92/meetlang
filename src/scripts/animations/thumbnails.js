import data from '../constants/data.js';

const peopleThumbnails = data.peopleThumbnails;

$(document).ready(() => {
  for (let i = 0; i < peopleThumbnails.length; i++) {
    $(`.control-mute.${peopleThumbnails[i]}`).click(() => {
      $(`.control-mute.${peopleThumbnails[i]}`).toggleClass('audio-off');
    });
  };

  for (let i = 0; i < peopleThumbnails.length; i++) {
    $(`.control-hide.${peopleThumbnails[i]}`).click(() => {
      $(`.control-hide.${peopleThumbnails[i]}`).toggleClass('video-off');
    });
  };

  $('.video-toggle-thumbnails').click(() => {
    if ($('.layout-container').hasClass('without-chat')) {
      $('.video-toggle-thumbnails').toggleClass('button-out');
      $('.layout-container').toggleClass('without-thumbnails');
      $('.layout-container').addClass('without-chat');
      $('.layout-container').toggleClass('without-thumbnails-and-chat');
      $('.content-expand').toggleClass('rotate');
    } else if ($('.layout-container').hasClass('without-thumbnails') && $('.layout-container').hasClass('fifty-chat')) {
      $('.video-toggle-thumbnails').toggleClass('button-out');
      $('.layout-container').toggleClass('without-thumbnails');
    } else if ($('.layout-container').hasClass('over-thumbnails') && $('.content-expand').hasClass('rotate')) {
      $('.video-toggle-thumbnails').toggleClass('button-out');
      $('.layout-container').toggleClass('without-thumbnails');
    } else if ($('.layout-container').hasClass('without-thumbnails') && $('.content-expand').hasClass('rotate')) {
      $('.content-expand').removeClass('rotate');
    } else {
      $('.video-toggle-thumbnails').toggleClass('button-out');
      $('.layout-container').toggleClass('without-thumbnails');
      $('.content-expand').toggleClass('rotate');
    }
  });

});