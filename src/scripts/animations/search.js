$(document).ready(() => {
  const contentTypes = [
    {
      searchButton: 'search-photos',
      contentType: 'photos'
    },
    {
      searchButton: 'search-videos',
      contentType: 'videos'
    },
    {
      searchButton: 'search-web',
      contentType: 'web'
    },
    {
      searchButton: 'search-favorites',
      contentType: 'favorites'
    }
  ];
  
  for (let i = 0; i < contentTypes.length; i++) {
    $(`.${contentTypes[i].searchButton}`).click(() => {
      $('.search-button').removeClass('selected');
      $(`.search-button.${contentTypes[i].searchButton}`).addClass('selected');
      $('.content-container').addClass('hide');
      $(`.content-container.${contentTypes[i].contentType}`).removeClass('hide');
      $(`.content-container.${contentTypes[i].contentType} .content-item`).removeClass('hide');
      $(`.content-item-view`).addClass('hide');
      $(`.search-back`).addClass('hide');
      $('.search-input').css('width', 'calc(100% - (4 * (40px + 0.5rem)))');
    });
  };

  for (let i = 0; i < contentTypes.length - 2; i++) {
    $(`.content-container.${contentTypes[i].contentType} .content-item`).click(() => {
      $(`.content-container.${contentTypes[i].contentType} .content-item`).toggleClass('hide');
      $(`.content-item-view.${contentTypes[i].contentType}`).removeClass('hide');
      $(`.search-back`).removeClass('hide');
      $('.search-input').css('width', 'calc(100% - (5 * (40px + 0.5rem)))');
    });
  };

  for (let i = 0; i < contentTypes.length - 2; i++) {
    $(`.search-back`).click(() => {
      $(`.search-back`).addClass('hide');
      $(`.content-container.${contentTypes[i].contentType} .content-item`).toggleClass('hide');
      $(`.content-item-view.${contentTypes[i].contentType}`).addClass('hide');
      $('.search-input').css('width', 'calc(100% - (4 * (40px + 0.5rem)))');
    });
  };
});