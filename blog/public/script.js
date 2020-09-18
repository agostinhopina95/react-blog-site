(function () {
  html_articles = function (e) {
    return (
      '<div class="col-6 mb-4">' +
      '<div class="card h-100">' +
      '<h4 class="card-header">' +
      e.title +
      "</h4>" +
      '<div class="card-body">' +
      '<p class="card-text">' +
      e.body +
      "</p>" +
      "</div>" +
      "</div>"
    );
  };

  setTimeout(function () {
    const api_selector = document.querySelector(".api-selector");
    const api_search_field = document.querySelector(".input_search");
    const api_search_button = document.querySelector(".search_button");

    const api_eventClear = document.querySelectorAll(".ev-clear");
    const api_clickClear = document.querySelector(".clk-clear");

    request = function (url, params, method) {
      var http = new XMLHttpRequest();
      http.open(method, url, true);
      http.setRequestHeader(
        "Content-type",
        "application/x-www-form-urlencoded"
      );
      http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 200) {
          resp = http.responseText;
          api_selector.innerHTML = "";
          obj = JSON.parse(resp);
          obj.forEach((element) => {
            var title = element.title.toLowerCase().trim();
            var search_query = api_search_field.value.toLowerCase();
            if (search_query.length > 0) {
              if (title.search(search_query) > -1) {
                api_selector.innerHTML += html_articles({
                  title: element.title,
                  body: element.body,
                });
              }
            }
          });
        }
      };
      http.send(params);
    };

    api_search_button.addEventListener(
      "click",
      function () {
        request("/api/articles/", api_search_field.value, "GET");
      },
      false
    );

    api_clickClear.addEventListener(
      "click",
      function () {
        for (i = 0; i < api_eventClear.length; i++) {
          api_eventClear[i].value = "";
        }
      },
      false
    );
  }, 100);
})();
