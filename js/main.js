 let tasks = [];

  $(function () {
    $('#Add').click(function () {
      const val = $('#Task').val().trim();
      if (!val) return;
      tasks.push(val);
      $('#Task').val('');
      if (!$('#message').length) {
        $('#field').prepend('<div id="message">Елемент додано</div>');
      }
      $('#message').stop(true, true).fadeIn(200).delay(2000).fadeOut(400);
    });
    $('#Show').click(function () {
  const list = $('<ul>');
  tasks.forEach(t => {
    list.append($('<li>').text(t));
  });
  $('#field').empty().append(list);
});
});