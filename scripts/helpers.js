console.log('helpers!');

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

const endpoint = '../data-origin.json';

secs = []

fetch(endpoint)
    .then(response => response.json())
    .then(data => {
        secs.push(...data.sections);
        // console.log(secs)
        const navItems = secs.map((sec, index) => {
            // return sec.header;
            // console.log(index);
            const comp = document.querySelector(".components");
            comp.innerHTML += '<li class="navigation_menu-item"><a class="navigation_menu-link" data-key="' + index + '" href="#/component/:' + index + '">' + sec.header + '</a></li>';
        });
    });

    


   
    // console.log(comp);
    // comp.innerHTML = sections;
    

    // const navItems = sections.map(function(inventor){
    //     return inventor.first + ' ' + inventor.last;
    //   });
    //   console.log(names);






// comp.innerHTML = "<li></li>";
// comp.innerHTML = data.sections;

// const cities = []
//1. get your data first
//doesn't return the data instead it returns a promise
// fetch(endpoint)
//     .then(blob => blob.json())
//     .then(data => cities.push(...data))