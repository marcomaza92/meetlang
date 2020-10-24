import { wrapGrid } from 'animate-css-grid'

const layoutContainer = document.querySelector('.layout-container');
wrapGrid(layoutContainer, {
  duration: 500,
  easing: 'easeInOut'
});

$(document).ready(() => {
  $('chat-messages').scrollTop($('chat-messages').scrollHeight);

  $('.chat-controls-close').click(() => {
    $('.chat').toggleClass('hide');
    $('.layout-container').toggleClass('without-chat');
    $('.open-chat').toggleClass('hide');
  });

  $('.chat-controls-expand').click(() => {
    $('.layout-container').toggleClass('fifty-chat');
  });
  
  $('.open-chat').click(() => {
    $('.chat').toggleClass('hide');
    $('.layout-container').toggleClass('without-chat');
    $('.open-chat').toggleClass('hide');
  });
});