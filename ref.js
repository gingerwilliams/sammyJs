//get query string parameter
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

//Custom Expression Helpers
Handlebars.registerHelper("formatName", function(property1, property2){
    return new Handlebars.SafeString("this reference number for <strong>" + property1 + "</strong> is <strong>" + property2 + "</strong>");
});

Handlebars.registerHelper("formatPhoneNumber", function(property){
    prop = String(property);
    return  "(" + prop.substring(0,3) + ") " + prop.substring(3,6) + "-" + prop.substring(6);
});

//Custom Block Helpers
Handlebars.registerHelper("makeBold", function(options){
    return new Handlebars.SafeString("<strong>" + options.fn(this) + "</strong>"); 
    //options.fn(this)
    //returns whatever appears in the starting and ending block
});

Handlebars.registerHelper("toLower", function(options){
    return options.fn(this).toLowerCase();
});

//Partials
// Handlebars.registerPartial(
//     'navPartial', 
//     document.getElementById("nav-partial").innerHTML
// );


$(document).ready(function(){
   
    // var listTemplate = document.getElementById("list-template").innerHTML;
    // var compiledListTemplate = Handlebars.compile(listTemplate);
    var onyxTemplate = document.getElementById("onyx-template").innerHTML;
    var compiledOnyxTemplate = Handlebars.compile(onyxTemplate);

    // var componentTemplate = document.getElementById("component-template").innerHTML;
    // var compiledComponentTemplate = Handlebars.compile(componentTemplate);

    var componentId = getParameterByName("id");
    // console.log(componentId);
    $.getJSON("data.json", function(data){
        // console.log(data);
        // console.log(listTemplate);
        // console.log(compiledListTemplate(
        //     data
        // ));
        document.getElementById("onyx").innerHTML = compiledOnyxTemplate(data);
        // document.getElementById("component").innerHTML = compiledComponentTemplate(data.sections[componentId]);

        
        
    });
    

    
    
    
    
});





