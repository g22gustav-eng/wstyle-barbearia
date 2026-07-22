// animação simples ao carregar

window.addEventListener("scroll",()=>{

    let cards = document.querySelectorAll(".card");


    cards.forEach(card=>{

        let posicao = card.getBoundingClientRect().top;

        if(posicao < window.innerHeight - 100){

            card.style.opacity="1";
            card.style.transform="translateY(0)";

        }

    })

})