console.log('helper!');

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
            const mb = document.querySelector(".markup-blocks");
            const ref = sec.reference;
           
            if(ref.includes("Components") === true){
                comp.innerHTML += '<li class="navigation_menu-item"><a class="navigation_menu-link" data-key="' + index + '" href="#/component/:' + index + '">' + sec.header + '</a></li>';
            }

            if(ref.includes("Markup Blocks") === true){
                mb.innerHTML += '<li class="navigation_menu-item"><a class="navigation_menu-link" data-key="' + index + '" href="#/markupblocks/:' + index + '">' + sec.header + '</a></li>';
            }
            
        });
    });