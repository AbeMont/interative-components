'use strict';

console.log('Tabs');

var tabs = Array.from(document.querySelectorAll('[data-tab]'));
var tabsSections = Array.from(document.querySelectorAll('[data-tab-section]'));

tabs.forEach(function (tab) {
  tab.addEventListener('click', function () {

    var tabData = tab.dataset.tab;

    for (var i = 0; i < tabsSections.length; i++) {

      var tabSectionData = tabsSections[i].dataset.tabSection;

      if (tabSectionData === tabData) {
        tabsSections[i].classList.add('active');
      } else {
        tabsSections[i].classList.remove('active');
      }
    }
  });
});
//# sourceMappingURL=tabs.js.map
