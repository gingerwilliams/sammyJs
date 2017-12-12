
// const exphbs = require('express-handlebars');
// const handlebars = require('handlebars');
// // const helpers = require('handlebars-helpers');

// const dataFile = require('./builder/data.json');
// // console.log(dataFile.sections);

// const data = dataFile.sections;

// //Console Code Testing Area
// var components = "Components";
// for(var i=0; i < data.length; i++ ){
//     var id = data.indexOf(data[i]);
//     var ref = data[i].reference;
//     var link = ref.substr(ref.indexOf('.')+1);

//     if(ref.includes(components) === true){
//         // console.log(link);
//         // console.log(id);

//     }
// }

// //Console Code Testing Area End

// handlebars.registerHelper( "helpername", function ( ){
//     return 'FOO!'; 
// });

// handlebars.registerHelper("printComponents", function(block) {
//     var components = "Components";
//     var item = '<div>';

//     for(var i=0; i < data.length; i++ ){
//         var id = data.indexOf(data[i]);
//         var ref = data[i].reference;
//         var link = ref.substr(ref.indexOf('.')+1);
        
//         if(ref.includes(components) === true){
            
//             item += '<li class="navigation_menu-item"><a class="navigation_menu-link" href="/components/' + id + '">' + link + '</a></li>';
//         }
//     }
//     return item += '</div>';
// });

// handlebars.registerHelper("printMarkup", function(block) {
//     var markupblocks = "Markup Blocks";
//     var item = '<div>';

//     for(var i=0; i < data.length; i++ ){
//         var id = data.indexOf(data[i]);
//         var ref = data[i].reference;
//         var link = ref.substr(ref.indexOf('.')+1);
        
//         if(ref.includes(markupblocks) === true){
            
//             item += '<li class="navigation_menu-item"><a class="navigation_menu-link" href="/markupblocks/' + id + '">' + link + '</a></li>';
//         }
//     }
//     return item += '</div>';
// });