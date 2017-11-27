var app = $.sammy('#main', function () {
  // include the plugin and alias handlebars() to hb()
  this.use('Handlebars', 'hbs');

  function getParameterByName(name, url) {
      if (!url) url = window.location.href;
      name = name.replace(/[\[\]]/g, "\\$&");
      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
          results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  this.get('#/hello:name', function () {
    // set local vars
    this.title = 'Hello!'
    this.name = this.params.name;
    // render the template and pass it through handlebars
    this.partial('views/partials/test.hbs');
  });
  this.get('#/', function (context) {
    this.partial('views/home.hbs');
  });

  this.get('#/start', function (context) {
    this.partial('views/start.hbs');
  });

  this.get('#/deliverables', function (context) {
    this.partial('views/deliverables.hbs');
  });

  this.get('#/component/:id', function (context) {
    // fetch handlebars-partial first
    this.load('data-origin.json')
      .then(function (items, partial) {
        const secs = items.sections;
        const url = document.location.href;
        var key = url.substring(url.lastIndexOf(":") + 1);

        // const key = this.getAttribute('data-key');
        context.header = items.sections[key].header;
        context.description = items.sections[key].description;
        context.markup = items.sections[key].markup;
        context.source = items.sections[key].header;

        // render the template and pass it through handlebars
        context.partial('views/comp.hbs');
      });  

    });

  });
  ///////////

  $(function () {
    app.run()
  }); 