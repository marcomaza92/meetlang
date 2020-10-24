$(document).ready(() => {
  const peopleThumbnails = [
    'thumbnail-01',
    'thumbnail-02',
    'thumbnail-03',
    'thumbnail-04',
    'thumbnail-05',
    'thumbnail-06',
    'thumbnail-07',
    'thumbnail-08',
    'thumbnail-09',
    'thumbnail-10',
  ];
  
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
    $('.layout-container').toggleClass('without-thumbnails');
  });

});