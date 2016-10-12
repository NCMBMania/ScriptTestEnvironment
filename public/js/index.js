$(function() {
  $("button").on("click", function(e) {
    e.preventDefault();
    console.log(e);
    params = ['query', 'body']
    data = {
      query: [],
      body: []
    }
    for (i in params) {
      var key = params[i];
      var lines = $("#" + key).val().split(/\r\n|\r|\n/);
      for (index in lines) {
        var line = lines[index];
        if (line === "") {
          continue;
        }
        parts = line.split("=");
        if (parts.length === 2) {
          data[key].push(parts[0] + "=" + encodeURI(parts[1]))
        }
      }
    }
    console.log(data.body.join("&"));
    console.log($("form").serialize())
    // (data.body.length == 0 ? null : data.body.join("&"))
    $.ajax({
      type: $("#method").val(),
      url: "/script" + (data.query.length == 0 ? "" : "?" + data.query.join("&")),
      data: (data.body.length == 0 ? null : data.body.join("&")),
    }).then(function(data) {
      console.log(data);
      $("#result").val(JSON.stringify(data));
    })
  })
});
