const endpoint = 'data-origin.json';


$.getJSON(endpoint, function (data) {
    const secs = data.sections

    for (var i = 0; i < secs.length; i++) {
        
        // return sec.header;
        // console.log(index);
        const comp = document.querySelector(".components");
        const mb = document.querySelector(".markup-blocks");
        const index =  i;
        const ref = secs[i].reference;

        if (ref.indexOf("Components") >= 0) {
            comp.innerHTML += '<li class="navigation_menu-item"><a class="navigation_menu-link" data-key="' + index + '" href="#/component/:' + index + '">' + secs[i].header + '</a></li>';
        }

        if (ref.indexOf("Markup Blocks") >= 0) {
            mb.innerHTML += '<li class="navigation_menu-item"><a class="navigation_menu-link" data-key="' + index + '" href="#/markupblocks/:' + index + '">' + secs[i].header + '</a></li>';
        }
    }
});









// fetch(endpoint)
//     .then(response => response.json())
//     .then(data => {
//         secs.push(...data.sections);
//         // console.log(secs)
//         const navItems = secs.map((sec, index) => {
//             // return sec.header;
//             // console.log(index);
//             const comp = document.querySelector(".components");
//             const mb = document.querySelector(".markup-blocks");
//             const ref = sec.reference;

//             if(ref.includes("Components") === true){
//                 comp.innerHTML += '<li class="navigation_menu-item"><a class="navigation_menu-link" data-key="' + index + '" href="#/component/:' + index + '">' + sec.header + '</a></li>';
//             }

//             if(ref.includes("Markup Blocks") === true){
//                 mb.innerHTML += '<li class="navigation_menu-item"><a class="navigation_menu-link" data-key="' + index + '" href="#/markupblocks/:' + index + '">' + sec.header + '</a></li>';
//             }

//         });
//     });



