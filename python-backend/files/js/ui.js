function switchView(view_name) {
  hideAllViews();
  $('#app-view-' + view_name).show();
};

function hideAllViews() {
  $('.app-view').hide();
};

$(document).ready(function () {
  hideAllViews();
});
