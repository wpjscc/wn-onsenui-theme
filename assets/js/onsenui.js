ons.ready(function () {

  // ons.platform.select('android');
  ons.platform.select('ios');

  document.addEventListener('init', function (event) {
    console.log('This is a lifecycle event!', event.target);

    var page = event.target;
    if (page.matches('#helloworld-page')) {
      page.querySelector('ons-toolbar .center').innerHTML = 'My app';
      // page.querySelector('ons-button').onclick = function() {
      //  ons.notification.alert('Hello world!');
      // };
    }


    if (page.id === 'page1') {
      page.querySelector('#push-button').onclick = function () {
        document.querySelector('#myNavigator').pushPage('page2.html', { data: { title: 'Page 2' } });
      };
    } else if (page.id === 'page2') {
      page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
    }

    if (page.matches('#Tab1') || page.matches('#Tab2')) {
      Alpine.initTree(page)
    }


  });

  document.addEventListener('prechange', function (event) {
    document.querySelector('ons-toolbar .center')
      .innerHTML = event.tabItem.getAttribute('label');
  })
});
