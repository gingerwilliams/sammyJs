var app = $.sammy('#main', function() {
    // include the plugin and alias handlebars() to hb()
      this.use('Handlebars', 'hbs');

      this.get('#/hello:name', function() {
        // set local vars
        this.title = 'Hello!'
        this.name = this.params.name;
        // render the template and pass it through handlebars
        this.partial('views/partials/test.hbs');
      });
      this.get('#/', function(context) {
        this.partial('views/home.hbs');
      });

      this.get('#/start', function(context) {
        this.partial('views/start.hbs');
      });

      this.get('#/deliverables', function(context) {
        this.partial('views/deliverables.hbs');
      });

      this.get('#/yo', function() {
        console.log('Yo yo yo');
      });

      this.get('#/components/:id', function(context) {
        this.load('data-origin.json')
            .then(function(items){
              console.log(items.sections);
            });
      });

      this.get('#/test/:id', function(context) {

        this.load('data-origin.json')
            .then(function(items, partial){
                

              $.each(items.sections, function(i, section){
                context.partial('./views/comp.hbs', {
                })
                id = i;
                // source: this.header
                // console.log(id);
                // console.log(this.source);
                console.log(this.header);
                // console.log(section);
                // console.log(i);
                
                // description:
                // markup:
                // console.log(header);
              });
              
             
            });  
        
        });

  });

  $(function() {
    app.run()
  }); 