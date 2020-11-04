import { wrapGrid } from 'animate-css-grid'

const layoutContainer = document.querySelector('.layout-container');
wrapGrid(layoutContainer, {
  duration: 500,
  easing: 'easeInOut'
});

$(document).ready(() => {
  $('chat-messages').scrollTop($('chat-messages').scrollHeight);

  $('.chat-controls-close').click(() => {
    if ($('.layout-container').hasClass('over-thumbnails') && $('.layout-container').hasClass('without-thumbnails')) {
      $('.layout-container').removeClass('over-thumbnails');  
    }
    if ($('.layout-container').hasClass('fifty-chat')) {
      $('.layout-container').removeClass('fifty-chat');  
    }
    if ($('.layout-container').hasClass('without-thumbnails')) {
      $('.layout-container').addClass('without-thumbnails-and-chat');  
    }
    if ($('.layout-container').hasClass('over-thumbnails')) {
      $('.layout-container').removeClass('over-thumbnails');  
      $('.content-expand').removeClass('rotate'); 
    }
    $('.chat').toggleClass('hide');
    $('.layout-container').toggleClass('without-chat');
    $('.open-chat').toggleClass('hide');
  });

  $('.chat-controls-expand').click(() => {
    $('.layout-container').toggleClass('fifty-chat');
    $('.chat-controls-expand').toggleClass('rotate');
  });
  
  $('.open-chat').click(() => {
    $('.chat-controls-expand').removeClass('rotate');
    $('.chat').toggleClass('hide');
    $('.layout-container').toggleClass('without-chat');
    $('.layout-container').removeClass('without-thumbnails-and-chat');
    $('.open-chat').toggleClass('hide');
  });
});