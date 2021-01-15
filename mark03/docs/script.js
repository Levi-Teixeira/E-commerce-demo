const Filmes = document.querySelector('.maispopulares');
const melhoresFilmes = document.querySelector('.topfilmes');


fetch('https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?language=pt-BR')
    .then((resposta)=>{
        return resposta.json()
    })
    .then((respostaJson)=>{
        console.log(respostaJson.results)
        const filmes = respostaJson.results;
        filmes.map((filme, x)=>{

           //- Definindo informações dos filmes

            const titulo = respostaJson.results[x].title;
            const fundo = respostaJson.results[x].poster_path;
            const nota = respostaJson.results[x].vote_average;
            const preço = respostaJson.results[x].price;
            let qt = 1;
           
           //- Construindo os itens

            const item = document.createElement('div');
            const itemTitulo = document.createElement('p');
            const itemNota = document.createElement('p');
            const itemBotão = document.createElement('div');
            const itemEstrela = document.createElement('img');
            const botãoComprar = document.createElement('p');
            const botãoPreço = document.createElement('p');
            const itemSacola = document.createElement('div');
            const tituloSacola = document.createElement('p');
            const preçoSacola = document.createElement('p');
            const posterSacola = document.createElement('img');
            const painelSacola = document.createElement('div');
            const maisSacola = document.createElement('img');
            const quantidadeSacola = document.createElement('p');
            const menosSacola = document.createElement('img');
            

            //-Juntando os elementos nos itens

            Filmes.append(item)
            item.append(itemTitulo);
            item.append(itemNota);
            item.append(itemBotão);
            item.append(itemEstrela);
            itemBotão.append(botãoComprar);
            itemBotão.append(botãoPreço);
            itemSacola.append(tituloSacola,preçoSacola,posterSacola);
            itemSacola.append(painelSacola);
            painelSacola.append(maisSacola,quantidadeSacola,menosSacola)

            //- Setando os elemento com as informações
           
            itemTitulo.innerHTML = titulo;
            itemNota.innerHTML = nota;
            botãoComprar.innerHTML = 'Comprar';
            botãoPreço.innerHTML = `U$ ${preço}`;
            item.style.backgroundImage = `url(${fundo})`;
            tituloSacola.innerHTML = titulo;
            preçoSacola.innerHTML = `U$ ${preço}`;
            posterSacola.style.backgroundImage = `url(${fundo})`;
            quantidadeSacola.innerHTML = qt;
             

            //- Setando atributos

            item.setAttribute('class', 'item');
            item.setAttribute('carrinho', false);
            itemTitulo.setAttribute('class', 'itemTítulo');
            itemBotão.setAttribute('class', 'botão');
            itemEstrela.setAttribute('src', 'estrela2.png');
            itemNota.setAttribute('class', 'itemNota');
            posterSacola.setAttribute('class','posterSacola');
            preçoSacola.setAttribute('class','preçoSacola');
            tituloSacola.setAttribute('class','tituloSacola');
            painelSacola.setAttribute('class', 'painelSacola');
            maisSacola.setAttribute('src', 'add.png');
            maisSacola.setAttribute('class', 'add');
            menosSacola.setAttribute('class', 'delete');
            menosSacola.setAttribute('src', 'delete.png');

            //- Adicionando a lógica da compra

            const display = document.querySelector('.display');
            display.setAttribute('vazio', true);
            itemSacola.setAttribute('class', 'itemSacola');

    

            itemBotão.addEventListener('click', ()=>{
                if(display.getAttribute('vazio') == 'true'){
                    display.innerHTML = ''
                    display.append(itemSacola);

                    //botões do painel de quantidade

                    const botõesMais = itemSacola.querySelector('.add');
                    let qt = 1;

                    botõesMais.addEventListener('click',()=>{
                        qt += 1;
                        quantidadeSacola.innerHTML = qt;
                        menosSacola.setAttribute('src', 'menos.png');
                        
                    });

                    const botõesMenos = itemSacola.querySelector('.delete');

                    botõesMenos.addEventListener('click',()=>{
                        qt -= 1;
                        quantidadeSacola.innerHTML = qt;

                        if(qt == 1){
                            menosSacola.setAttribute('src', 'delete.png');
                            
                        }else if(qt < 1 ){
                            itemSacola.remove();
                            qt = 1;
                            quantidadeSacola.innerHTML = qt;
                            if(display.innerHTML == ''){
                                display.innerHTML = ` <p>Sua sacola está vazia</p>
                                                      <p>Adicione filmes agora</p>
                                                      <img class="icone" src="aguardando1.png">`
                                display.setAttribute('vazio', true);    
                            }    
                        }

                    });

                    if(display.innerHTML != ''){
                        display.setAttribute('vazio', false)
                    }
                    
                }else{
                    display.append(itemSacola);
                    
                    const botõesMais = itemSacola.querySelector('.add');
                    let qt = 1;

                    botõesMais.addEventListener('click',()=>{
                        qt += 1;
                        quantidadeSacola.innerHTML = qt;
                        menosSacola.setAttribute('src', 'menos.png');
                        
                    });

                    const botõesMenos = itemSacola.querySelector('.delete');

                    botõesMenos.addEventListener('click',()=>{
                        qt -= 1;
                        quantidadeSacola.innerHTML = qt;

                        if(qt == 1){
                            menosSacola.setAttribute('src', 'delete.png');
                            
                        }else if(qt < 1 ){
                            itemSacola.remove();
                            qt = 1;
                            quantidadeSacola.innerHTML = qt;
                            if(display.innerHTML == ''){
                                display.innerHTML = ` <p>Sua sacola está vazia</p>
                                                      <p>Adicione filmes agora</p>
                                                      <img class="icone" src="aguardando1.png">`
                                display.setAttribute('vazio', true);
                            }    
                        }

                    });

                    if(display.innerHTML != ''){
                        display.setAttribute('vazio', false)
                    }
                    
                }
            })

            
        })

        

    })



fetch('https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?language=pt-BR')
    .then((resposta)=>{
        return resposta.json()
    })
    .then((respostaJson)=>{
        const topFilmes = respostaJson.results.slice(0, 5);
        topFilmes.map((filme, x)=>{

            //- Definindo informações dos filmes
 
             const titulo = respostaJson.results[x].title;
             const fundo = respostaJson.results[x].poster_path;
             const nota = respostaJson.results[x].vote_average;
             const preço = respostaJson.results[x].price;
             let qt = 1;
            
            //- Construindo os itens
 
             const item = document.createElement('div');
             const itemTitulo = document.createElement('p');
             const itemNota = document.createElement('p');
             const itemBotão = document.createElement('div');
             const itemEstrela = document.createElement('img');
             const botãoComprar = document.createElement('p');
             const botãoPreço = document.createElement('p');
             const itemSacola = document.createElement('div');
             const tituloSacola = document.createElement('p');
             const preçoSacola = document.createElement('p');
             const posterSacola = document.createElement('img');
             const painelSacola = document.createElement('div');
             const maisSacola = document.createElement('img');
             const quantidadeSacola = document.createElement('p');
             const menosSacola = document.createElement('img');
 
             //-Juntando os elementos nos itens
 
             melhoresFilmes.append(item)
             item.append(itemTitulo);
             item.append(itemNota);
             item.append(itemBotão);
             item.append(itemEstrela);
             itemBotão.append(botãoComprar);
             itemBotão.append(botãoPreço);
             itemSacola.append(tituloSacola,preçoSacola,posterSacola);
             itemSacola.append(painelSacola);
             painelSacola.append(maisSacola,quantidadeSacola,menosSacola)
 
             //- Setando os elemento com as informações
            
             itemTitulo.innerHTML = titulo;
             itemNota.innerHTML = nota;
             botãoComprar.innerHTML = 'Comprar';
             botãoPreço.innerHTML = `U$ ${preço}`;
             item.style.backgroundImage = `url(${fundo})`;
             tituloSacola.innerHTML = titulo;
             preçoSacola.innerHTML = `U$ ${preço}`;
             posterSacola.style.backgroundImage = `url(${fundo})`;
             quantidadeSacola.innerHTML = qt;
              
 
             //- Setando atributos
 
             item.setAttribute('class', 'item');
             item.setAttribute('carrinho', false);
             itemTitulo.setAttribute('class', 'itemTítulo');
             itemBotão.setAttribute('class', 'botão');
             itemEstrela.setAttribute('src', 'estrela2.png');
             itemNota.setAttribute('class', 'itemNota');
             posterSacola.setAttribute('class','posterSacola');
             preçoSacola.setAttribute('class','preçoSacola');
             tituloSacola.setAttribute('class','tituloSacola');
             painelSacola.setAttribute('class', 'painelSacola');
             maisSacola.setAttribute('src', 'add.png');
             maisSacola.setAttribute('class', 'add');
             menosSacola.setAttribute('class', 'delete');
             menosSacola.setAttribute('src', 'delete.png');
 
             //- Adicionando a lógica da compra
 
             const display = document.querySelector('.display');
             display.setAttribute('vazio', true);
             itemSacola.setAttribute('class', 'itemSacola');
 
     
 
             itemBotão.addEventListener('click', ()=>{
                 if(display.getAttribute('vazio') == 'true'){
                     display.innerHTML = ''
                     display.append(itemSacola);
 
                     //botões do painel de quantidade
 
                     const botõesMais = itemSacola.querySelector('.add');
                     let qt = 1;
 
                     botõesMais.addEventListener('click',()=>{
                         qt += 1;
                         quantidadeSacola.innerHTML = qt;
                         menosSacola.setAttribute('src', 'menos.png');
                         
                     });
 
                     const botõesMenos = itemSacola.querySelector('.delete');
 
                     botõesMenos.addEventListener('click',()=>{
                         qt -= 1;
                         quantidadeSacola.innerHTML = qt;
 
                         if(qt == 1){
                             menosSacola.setAttribute('src', 'delete.png');
                             
                         }else if(qt < 1 ){
                             itemSacola.remove();
                             qt = 1;
                             quantidadeSacola.innerHTML = qt;
                             if(display.innerHTML == ''){
                                 display.innerHTML = ` <p>Sua sacola está vazia</p>
                                                       <p>Adicione filmes agora</p>
                                                       <img class="icone" src="aguardando1.png">`
                                 display.setAttribute('vazio', true);    
                             }    
                         }
 
                     });
 
                     if(display.innerHTML != ''){
                         display.setAttribute('vazio', false)
                     }
                     
                 }else{
                     display.append(itemSacola);
                     
                     const botõesMais = itemSacola.querySelector('.add');
                     let qt = 1;
 
                     botõesMais.addEventListener('click',()=>{
                         qt += 1;
                         quantidadeSacola.innerHTML = qt;
                         menosSacola.setAttribute('src', 'menos.png');
                         
                     });
 
                     const botõesMenos = itemSacola.querySelector('.delete');
 
                     botõesMenos.addEventListener('click',()=>{
                         qt -= 1;
                         quantidadeSacola.innerHTML = qt;
 
                         if(qt == 1){
                             menosSacola.setAttribute('src', 'delete.png');
                             
                         }else if(qt < 1 ){
                             itemSacola.remove();
                             qt = 1;
                             quantidadeSacola.innerHTML = qt;
                             if(display.innerHTML == ''){
                                 display.innerHTML = ` <p>Sua sacola está vazia</p>
                                                       <p>Adicione filmes agora</p>
                                                       <img class="icone" src="aguardando1.png">`
                                 display.setAttribute('vazio', true);
                             }    
                         }
 
                     });
 
                     if(display.innerHTML != ''){
                         display.setAttribute('vazio', false)
                     }
                     
                 }
             })
 
             
         })     
    })



// FUNCIONAMENTO DO BOTÕES ------

//Ação 

const botãoAção = document.querySelector('#ação');

botãoAção.addEventListener('click', ()=>{
    
    Filmes.innerHTML = '';
    fetch('https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?language=pt-BR')
        .then((resposta)=>{
            return resposta.json()
        })
        .then((respostaJson)=>{
            const filmes = respostaJson.results;
            const filmesAção = filmes.filter((item)=>{
                
                return item.genre_ids.includes(28);
            
            })
            filmesAção.map((filme, x)=>{

                //- Definindo informações dos filmes
     
                 const titulo = filme.title;
                 const fundo = filme.poster_path;
                 const nota = filme.vote_average;
                 const preço = filme.price;
                 let qt = 1;
                
                //- Construindo os itens
     
                 const item = document.createElement('div');
                 const itemTitulo = document.createElement('p');
                 const itemNota = document.createElement('p');
                 const itemBotão = document.createElement('div');
                 const itemEstrela = document.createElement('img');
                 const botãoComprar = document.createElement('p');
                 const botãoPreço = document.createElement('p');
                 const itemSacola = document.createElement('div');
                 const tituloSacola = document.createElement('p');
                 const preçoSacola = document.createElement('p');
                 const posterSacola = document.createElement('img');
                 const painelSacola = document.createElement('div');
                 const maisSacola = document.createElement('img');
                 const quantidadeSacola = document.createElement('p');
                 const menosSacola = document.createElement('img');
     
                 //-Juntando os elementos nos itens
                 
                 Filmes.append(item);
                 item.append(itemTitulo);
                 item.append(itemNota);
                 item.append(itemBotão);
                 item.append(itemEstrela);
                 itemBotão.append(botãoComprar);
                 itemBotão.append(botãoPreço);
                 itemSacola.append(tituloSacola,preçoSacola,posterSacola);
                 itemSacola.append(painelSacola);
                 painelSacola.append(maisSacola,quantidadeSacola,menosSacola)
     
                 //- Setando os elemento com as informações
                
                 itemTitulo.innerHTML = titulo;
                 itemNota.innerHTML = nota;
                 botãoComprar.innerHTML = 'Comprar';
                 botãoPreço.innerHTML = `U$ ${preço}`;
                 item.style.backgroundImage = `url(${fundo})`;
                 tituloSacola.innerHTML = titulo;
                 preçoSacola.innerHTML = `U$ ${preço}`;
                 posterSacola.style.backgroundImage = `url(${fundo})`;
                 quantidadeSacola.innerHTML = qt;
                  
     
                 //- Setando atributos
     
                 item.setAttribute('class', 'item');
                 item.setAttribute('carrinho', false);
                 itemTitulo.setAttribute('class', 'itemTítulo');
                 itemBotão.setAttribute('class', 'botão');
                 itemEstrela.setAttribute('src', 'estrela2.png');
                 itemNota.setAttribute('class', 'itemNota');
                 posterSacola.setAttribute('class','posterSacola');
                 preçoSacola.setAttribute('class','preçoSacola');
                 tituloSacola.setAttribute('class','tituloSacola');
                 painelSacola.setAttribute('class', 'painelSacola');
                 maisSacola.setAttribute('src', 'add.png');
                 maisSacola.setAttribute('class', 'add');
                 menosSacola.setAttribute('class', 'delete');
                 menosSacola.setAttribute('src', 'delete.png');
     
                 //- Adicionando a lógica da compra
     
                 const display = document.querySelector('.display');
                //  display.setAttribute('vazio', true);                
                 itemSacola.setAttribute('class', 'itemSacola');
     
         
     
                 itemBotão.addEventListener('click', ()=>{
                     if(display.getAttribute('vazio') == 'true'){
                         display.innerHTML = ''
                         display.append(itemSacola);
     
                         //botões do painel de quantidade
     
                         const botõesMais = itemSacola.querySelector('.add');
                         let qt = 1;
     
                         botõesMais.addEventListener('click',()=>{
                             qt += 1;
                             quantidadeSacola.innerHTML = qt;
                             menosSacola.setAttribute('src', 'menos.png');
                             
                         });
     
                         const botõesMenos = itemSacola.querySelector('.delete');
     
                         botõesMenos.addEventListener('click',()=>{
                             qt -= 1;
                             quantidadeSacola.innerHTML = qt;
     
                             if(qt == 1){
                                 menosSacola.setAttribute('src', 'delete.png');
                                 
                             }else if(qt < 1 ){
                                 itemSacola.remove();
                                 qt = 1;
                                 quantidadeSacola.innerHTML = qt;
                                 if(display.innerHTML == ''){
                                     display.innerHTML = ` <p>Sua sacola está vazia</p>
                                                           <p>Adicione filmes agora</p>
                                                           <img class="icone" src="aguardando1.png">`
                                     display.setAttribute('vazio', true);    
                                 }    
                             }
     
                         });
     
                         if(display.innerHTML != ''){
                             display.setAttribute('vazio', false)
                         }
                         
                     }else{
                         display.append(itemSacola);
                         
                         const botõesMais = itemSacola.querySelector('.add');
                         let qt = 1;
     
                         botõesMais.addEventListener('click',()=>{
                             qt += 1;
                             quantidadeSacola.innerHTML = qt;
                             menosSacola.setAttribute('src', 'menos.png');
                             
                         });
     
                         const botõesMenos = itemSacola.querySelector('.delete');
     
                         botõesMenos.addEventListener('click',()=>{
                             qt -= 1;
                             quantidadeSacola.innerHTML = qt;
     
                             if(qt == 1){
                                 menosSacola.setAttribute('src', 'delete.png');
                                 
                             }else if(qt < 1 ){
                                 itemSacola.remove();
                                 qt = 1;
                                 quantidadeSacola.innerHTML = qt;
                                 if(display.innerHTML == ''){
                                     display.innerHTML = ` <p>Sua sacola está vazia</p>
                                                           <p>Adicione filmes agora</p>
                                                           <img class="icone" src="aguardando1.png">`
                                     display.setAttribute('vazio', true);
                                 }    
                             }
     
                         });
     
                         if(display.innerHTML != ''){
                             display.setAttribute('vazio', false)
                         }
                         
                     }
                 })
     
                 
             })
            
        })

})

// Romance

const botãoRomance = document.querySelector('#romance');

botãoRomance.addEventListener('click', ()=>{
    
    Filmes.innerHTML = '';
    fetch('https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?language=pt-BR')
        .then((resposta)=>{
            return resposta.json()
        })
        .then((respostaJson)=>{
            const filmes = respostaJson.results;
            const filmesRomance = filmes.filter((item)=>{
                
                return item.genre_ids.includes(10749);
            
            })
            filmesRomance.map((filme, x)=>{

                //- Definindo informações dos filmes
     
                 const titulo = filme.title;
                 const fundo = filme.poster_path;
                 const nota = filme.vote_average;
                 const preço = filme.price;
                 let qt = 1;
                
                //- Construindo os itens
     
                 const item = document.createElement('div');
                 const itemTitulo = document.createElement('p');
                 const itemNota = document.createElement('p');
                 const itemBotão = document.createElement('div');
                 const itemEstrela = document.createElement('img');
                 const botãoComprar = document.createElement('p');
                 const botãoPreço = document.createElement('p');
                 const itemSacola = document.createElement('div');
                 const tituloSacola = document.createElement('p');
                 const preçoSacola = document.createElement('p');
                 const posterSacola = document.createElement('img');
                 const painelSacola = document.createElement('div');
                 const maisSacola = document.createElement('img');
                 const quantidadeSacola = document.createElement('p');
                 const menosSacola = document.createElement('img');
     
                 //-Juntando os elementos nos itens
                 
                 Filmes.append(item);
                 item.append(itemTitulo);
                 item.append(itemNota);
                 item.append(itemBotão);
                 item.append(itemEstrela);
                 itemBotão.append(botãoComprar);
                 itemBotão.append(botãoPreço);
                 itemSacola.append(tituloSacola,preçoSacola,posterSacola);
                 itemSacola.append(painelSacola);
                 painelSacola.append(maisSacola,quantidadeSacola,menosSacola)
     
                 //- Setando os elemento com as informações
                
                 itemTitulo.innerHTML = titulo;
                 itemNota.innerHTML = nota;
                 botãoComprar.innerHTML = 'Comprar';
                 botãoPreço.innerHTML = `U$ ${preço}`;
                 item.style.backgroundImage = `url(${fundo})`;
                 tituloSacola.innerHTML = titulo;
                 preçoSacola.innerHTML = `U$ ${preço}`;
                 posterSacola.style.backgroundImage = `url(${fundo})`;
                 quantidadeSacola.innerHTML = qt;
                  
     
                 //- Setando atributos
     
                 item.setAttribute('class', 'item');
                 item.setAttribute('carrinho', false);
                 itemTitulo.setAttribute('class', 'itemTítulo');
                 itemBotão.setAttribute('class', 'botão');
                 itemEstrela.setAttribute('src', 'estrela2.png');
                 itemNota.setAttribute('class', 'itemNota');
                 posterSacola.setAttribute('class','posterSacola');
                 preçoSacola.setAttribute('class','preçoSacola');
                 tituloSacola.setAttribute('class','tituloSacola');
                 painelSacola.setAttribute('class', 'painelSacola');
                 maisSacola.setAttribute('src', 'add.png');
                 maisSacola.setAttribute('class', 'add');
                 menosSacola.setAttribute('class', 'delete');
                 menosSacola.setAttribute('src', 'delete.png');
     
                 //- Adicionando a lógica da compra
     
                 const display = document.querySelector('.display');
                //  display.setAttribute('vazio', true);
                 itemSacola.setAttribute('class', 'itemSacola');
     
         
     
                 itemBotão.addEventListener('click', ()=>{
                     if(display.getAttribute('vazio') == 'true'){
                         display.innerHTML = ''
                         display.append(itemSacola);
     
                         //botões do painel de quantidade
     
                         const botõesMais = itemSacola.querySelector('.add');
                         let qt = 1;
     
                         botõesMais.addEventListener('click',()=>{
                             qt += 1;
                             quantidadeSacola.innerHTML = qt;
                             menosSacola.setAttribute('src', 'menos.png');
                             
                         });
     
                         const botõesMenos = itemSacola.querySelector('.delete');
     
                         botõesMenos.addEventListener('click',()=>{
                             qt -= 1;
                             quantidadeSacola.innerHTML = qt;
     
                             if(qt == 1){
                                 menosSacola.setAttribute('src', 'delete.png');
                                 
                             }else if(qt < 1 ){
                                 itemSacola.remove();
                                 qt = 1;
                                 quantidadeSacola.innerHTML = qt;
                                 if(display.innerHTML == ''){
                                     display.innerHTML = ` <p>Sua sacola está vazia</p>
                                                           <p>Adicione filmes agora</p>
                                                           <img class="icone" src="aguardando1.png">`
                                     display.setAttribute('vazio', true);    
                                 }    
                             }
     
                         });
     
                         if(display.innerHTML != ''){
                             display.setAttribute('vazio', false)
                         }
                         
                     }else{
                         display.append(itemSacola);
                         
                         const botõesMais = itemSacola.querySelector('.add');
                         let qt = 1;
     
                         botõesMais.addEventListener('click',()=>{
                             qt += 1;
                             quantidadeSacola.innerHTML = qt;
                             menosSacola.setAttribute('src', 'menos.png');
                             
                         });
     
                         const botõesMenos = itemSacola.querySelector('.delete');
     
                         botõesMenos.addEventListener('click',()=>{
                             qt -= 1;
                             quantidadeSacola.innerHTML = qt;
     
                             if(qt == 1){
                                 menosSacola.setAttribute('src', 'delete.png');
                                 
                             }else if(qt < 1 ){
                                 itemSacola.remove();
                                 qt = 1;
                                 quantidadeSacola.innerHTML = qt;
                                 if(display.innerHTML == ''){
                                     display.innerHTML = ` <p>Sua sacola está vazia</p>
                                                           <p>Adicione filmes agora</p>
                                                           <img class="icone" src="aguardando1.png">`
                                     display.setAttribute('vazio', true);
                                 }    
                             }
     
                         });
     
                         if(display.innerHTML != ''){
                             display.setAttribute('vazio', false)
                         }
                         
                     }
                 })
     
                 
             })
            
        })
          
})

// Ficção Científica

const botãoFicção = document.querySelector('#ficção');

botãoFicção.addEventListener('click', ()=>{
    
    Filmes.innerHTML = '';
    fetch('https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?language=pt-BR')
        .then((resposta)=>{
            return resposta.json()
        })
        .then((respostaJson)=>{
            const filmes = respostaJson.results;
            const filmesFicção = filmes.filter((item)=>{
                
                return item.genre_ids.includes(878);
            
            })
            console.log(filmesFicção)
            filmesFicção.map((filme, x)=>{

                //- Definindo informações dos filmes
     
                 const titulo = filme.title;
                 const fundo = filme.poster_path;
                 const nota = filme.vote_average;
                 const preço = filme.price;
                 let qt = 1;
                
                //- Construindo os itens
     
                 const item = document.createElement('div');
                 const itemTitulo = document.createElement('p');
                 const itemNota = document.createElement('p');
                 const itemBotão = document.createElement('div');
                 const itemEstrela = document.createElement('img');
                 const botãoComprar = document.createElement('p');
                 const botãoPreço = document.createElement('p');
                 const itemSacola = document.createElement('div');
                 const tituloSacola = document.createElement('p');
                 const preçoSacola = document.createElement('p');
                 const posterSacola = document.createElement('img');
                 const painelSacola = document.createElement('div');
                 const maisSacola = document.createElement('img');
                 const quantidadeSacola = document.createElement('p');
                 const menosSacola = document.createElement('img');
     
                 //-Juntando os elementos nos itens
                 
                 Filmes.append(item);
                 item.append(itemTitulo);
                 item.append(itemNota);
                 item.append(itemBotão);
                 item.append(itemEstrela);
                 itemBotão.append(botãoComprar);
                 itemBotão.append(botãoPreço);
                 itemSacola.append(tituloSacola,preçoSacola,posterSacola);
                 itemSacola.append(painelSacola);
                 painelSacola.append(maisSacola,quantidadeSacola,menosSacola)
     
                 //- Setando os elemento com as informações
                
                 itemTitulo.innerHTML = titulo;
                 itemNota.innerHTML = nota;
                 botãoComprar.innerHTML = 'Comprar';
                 botãoPreço.innerHTML = `U$ ${preço}`;
                 item.style.backgroundImage = `url(${fundo})`;
                 tituloSacola.innerHTML = titulo;
                 preçoSacola.innerHTML = `U$ ${preço}`;
                 posterSacola.style.backgroundImage = `url(${fundo})`;
                 quantidadeSacola.innerHTML = qt;
                  
     
                 //- Setando atributos
     
                 item.setAttribute('class', 'item');
                 item.setAttribute('carrinho', false);
                 itemTitulo.setAttribute('class', 'itemTítulo');
                 itemBotão.setAttribute('class', 'botão');
                 itemEstrela.setAttribute('src', 'estrela2.png');
                 itemNota.setAttribute('class', 'itemNota');
                 posterSacola.setAttribute('class','posterSacola');
                 preçoSacola.setAttribute('class','preçoSacola');
                 tituloSacola.setAttribute('class','tituloSacola');
                 painelSacola.setAttribute('class', 'painelSacola');
                 maisSacola.setAttribute('src', 'add.png');
                 maisSacola.setAttribute('class', 'add');
                 menosSacola.setAttribute('class', 'delete');
                 menosSacola.setAttribute('src', 'delete.png');
     
                 //- Adicionando a lógica da compra
     
                 const display = document.querySelector('.display');
                //  display.setAttribute('vazio', true);
                 itemSacola.setAttribute('class', 'itemSacola');
     
         
     
                 itemBotão.addEventListener('click', ()=>{
                     if(display.getAttribute('vazio') == 'true'){
                         display.innerHTML = ''
                         display.append(itemSacola);
     
                         //botões do painel de quantidade
     
                         const botõesMais = itemSacola.querySelector('.add');
                         let qt = 1;
     
                         botõesMais.addEventListener('click',()=>{
                             qt += 1;
                             quantidadeSacola.innerHTML = qt;
                             menosSacola.setAttribute('src', 'menos.png');
                             
                         });
     
                         const botõesMenos = itemSacola.querySelector('.delete');
     
                         botõesMenos.addEventListener('click',()=>{
                             qt -= 1;
                             quantidadeSacola.innerHTML = qt;
     
                             if(qt == 1){
                                 menosSacola.setAttribute('src', 'delete.png');
                                 
                             }else if(qt < 1 ){
                                 itemSacola.remove();
                                 qt = 1;
                                 quantidadeSacola.innerHTML = qt;
                                 if(display.innerHTML == ''){
                                     display.innerHTML = ` <p>Sua sacola está vazia</p>
                                                           <p>Adicione filmes agora</p>
                                                           <img class="icone" src="aguardando1.png">`
                                     display.setAttribute('vazio', true);    
                                 }    
                             }
     
                         });
     
                         if(display.innerHTML != ''){
                             display.setAttribute('vazio', false)
                         }
                         
                     }else{
                         display.append(itemSacola);
                         
                         const botõesMais = itemSacola.querySelector('.add');
                         let qt = 1;
     
                         botõesMais.addEventListener('click',()=>{
                             qt += 1;
                             quantidadeSacola.innerHTML = qt;
                             menosSacola.setAttribute('src', 'menos.png');
                             
                         });
     
                         const botõesMenos = itemSacola.querySelector('.delete');
     
                         botõesMenos.addEventListener('click',()=>{
                             qt -= 1;
                             quantidadeSacola.innerHTML = qt;
     
                             if(qt == 1){
                                 menosSacola.setAttribute('src', 'delete.png');
                                 
                             }else if(qt < 1 ){
                                 itemSacola.remove();
                                 qt = 1;
                                 quantidadeSacola.innerHTML = qt;
                                 if(display.innerHTML == ''){
                                     display.innerHTML = ` <p>Sua sacola está vazia</p>
                                                           <p>Adicione filmes agora</p>
                                                           <img class="icone" src="aguardando1.png">`
                                     display.setAttribute('vazio', true);
                                 }    
                             }
     
                         });
     
                         if(display.innerHTML != ''){
                             display.setAttribute('vazio', false)
                         }
                         
                     }
                 })
     
                 
             })
            
        })
})

// Terror

const botãoTerror = document.querySelector('#terror');

botãoTerror.addEventListener('click', ()=>{
    
    Filmes.innerHTML = '';
    fetch('https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?language=pt-BR')
        .then((resposta)=>{
            return resposta.json()
        })
        .then((respostaJson)=>{
            const filmes = respostaJson.results;
            const filmesTerror = filmes.filter((item)=>{
                
                return item.genre_ids.includes(27);
            
            })
            filmesTerror.map((filme, x)=>{

                //- Definindo informações dos filmes
     
                 const titulo = filme.title;
                 const fundo = filme.poster_path;
                 const nota = filme.vote_average;
                 const preço = filme.price;
                 let qt = 1;
                
                //- Construindo os itens
     
                 const item = document.createElement('div');
                 const itemTitulo = document.createElement('p');
                 const itemNota = document.createElement('p');
                 const itemBotão = document.createElement('div');
                 const itemEstrela = document.createElement('img');
                 const botãoComprar = document.createElement('p');
                 const botãoPreço = document.createElement('p');
                 const itemSacola = document.createElement('div');
                 const tituloSacola = document.createElement('p');
                 const preçoSacola = document.createElement('p');
                 const posterSacola = document.createElement('img');
                 const painelSacola = document.createElement('div');
                 const maisSacola = document.createElement('img');
                 const quantidadeSacola = document.createElement('p');
                 const menosSacola = document.createElement('img');
     
                 //-Juntando os elementos nos itens
                 
                 Filmes.append(item);
                 item.append(itemTitulo);
                 item.append(itemNota);
                 item.append(itemBotão);
                 item.append(itemEstrela);
                 itemBotão.append(botãoComprar);
                 itemBotão.append(botãoPreço);
                 itemSacola.append(tituloSacola,preçoSacola,posterSacola);
                 itemSacola.append(painelSacola);
                 painelSacola.append(maisSacola,quantidadeSacola,menosSacola)
     
                 //- Setando os elemento com as informações
                
                 itemTitulo.innerHTML = titulo;
                 itemNota.innerHTML = nota;
                 botãoComprar.innerHTML = 'Comprar';
                 botãoPreço.innerHTML = `U$ ${preço}`;
                 item.style.backgroundImage = `url(${fundo})`;
                 tituloSacola.innerHTML = titulo;
                 preçoSacola.innerHTML = `U$ ${preço}`;
                 posterSacola.style.backgroundImage = `url(${fundo})`;
                 quantidadeSacola.innerHTML = qt;
                  
     
                 //- Setando atributos
     
                 item.setAttribute('class', 'item');
                 item.setAttribute('carrinho', false);
                 itemTitulo.setAttribute('class', 'itemTítulo');
                 itemBotão.setAttribute('class', 'botão');
                 itemEstrela.setAttribute('src', 'estrela2.png');
                 itemNota.setAttribute('class', 'itemNota');
                 posterSacola.setAttribute('class','posterSacola');
                 preçoSacola.setAttribute('class','preçoSacola');
                 tituloSacola.setAttribute('class','tituloSacola');
                 painelSacola.setAttribute('class', 'painelSacola');
                 maisSacola.setAttribute('src', 'add.png');
                 maisSacola.setAttribute('class', 'add');
                 menosSacola.setAttribute('class', 'delete');
                 menosSacola.setAttribute('src', 'delete.png');
     
                 //- Adicionando a lógica da compra
     
                 const display = document.querySelector('.display');
                //  display.setAttribute('vazio', true);
                 itemSacola.setAttribute('class', 'itemSacola');
     
         
     
                 itemBotão.addEventListener('click', ()=>{
                     if(display.getAttribute('vazio') == 'true'){
                         display.innerHTML = ''
                         display.append(itemSacola);
     
                         //botões do painel de quantidade
     
                         const botõesMais = itemSacola.querySelector('.add');
                         let qt = 1;
     
                         botõesMais.addEventListener('click',()=>{
                             qt += 1;
                             quantidadeSacola.innerHTML = qt;
                             menosSacola.setAttribute('src', 'menos.png');
                             
                         });
     
                         const botõesMenos = itemSacola.querySelector('.delete');
     
                         botõesMenos.addEventListener('click',()=>{
                             qt -= 1;
                             quantidadeSacola.innerHTML = qt;
     
                             if(qt == 1){
                                 menosSacola.setAttribute('src', 'delete.png');
                                 
                             }else if(qt < 1 ){
                                 itemSacola.remove();
                                 qt = 1;
                                 quantidadeSacola.innerHTML = qt;
                                 if(display.innerHTML == ''){
                                     display.innerHTML = ` <p>Sua sacola está vazia</p>
                                                           <p>Adicione filmes agora</p>
                                                           <img class="icone" src="aguardando1.png">`
                                     display.setAttribute('vazio', true);    
                                 }    
                             }
     
                         });
     
                         if(display.innerHTML != ''){
                             display.setAttribute('vazio', false)
                         }
                         
                     }else{
                         display.append(itemSacola);
                         
                         const botõesMais = itemSacola.querySelector('.add');
                         let qt = 1;
     
                         botõesMais.addEventListener('click',()=>{
                             qt += 1;
                             quantidadeSacola.innerHTML = qt;
                             menosSacola.setAttribute('src', 'menos.png');
                             
                         });
     
                         const botõesMenos = itemSacola.querySelector('.delete');
     
                         botõesMenos.addEventListener('click',()=>{
                             qt -= 1;
                             quantidadeSacola.innerHTML = qt;
     
                             if(qt == 1){
                                 menosSacola.setAttribute('src', 'delete.png');
                                 
                             }else if(qt < 1 ){
                                 itemSacola.remove();
                                 qt = 1;
                                 quantidadeSacola.innerHTML = qt;
                                 if(display.innerHTML == ''){
                                     display.innerHTML = ` <p>Sua sacola está vazia</p>
                                                           <p>Adicione filmes agora</p>
                                                           <img class="icone" src="aguardando1.png">`
                                     display.setAttribute('vazio', true);
                                 }    
                             }
     
                         });
     
                         if(display.innerHTML != ''){
                             display.setAttribute('vazio', false)
                         }
                         
                     }
                 })
     
                 
             })
            
        })

})

// Todos

const botãoTodos = document.querySelector('#todos');

botãoTodos.addEventListener('click', ()=>{
Filmes.innerHTML = '';    
fetch('https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?language=pt-BR')
.then((resposta)=>{
    return resposta.json()
})
.then((respostaJson)=>{
    console.log(respostaJson.results)
    const filmes = respostaJson.results;
    filmes.map((filme, x)=>{

       //- Definindo informações dos filmes

        const titulo = respostaJson.results[x].title;
        const fundo = respostaJson.results[x].poster_path;
        const nota = respostaJson.results[x].vote_average;
        const preço = respostaJson.results[x].price;
        let qt = 1;
       
       //- Construindo os itens

        const item = document.createElement('div');
        const itemTitulo = document.createElement('p');
        const itemNota = document.createElement('p');
        const itemBotão = document.createElement('div');
        const itemEstrela = document.createElement('img');
        const botãoComprar = document.createElement('p');
        const botãoPreço = document.createElement('p');
        const itemSacola = document.createElement('div');
        const tituloSacola = document.createElement('p');
        const preçoSacola = document.createElement('p');
        const posterSacola = document.createElement('img');
        const painelSacola = document.createElement('div');
        const maisSacola = document.createElement('img');
        const quantidadeSacola = document.createElement('p');
        const menosSacola = document.createElement('img');

        //-Juntando os elementos nos itens

        Filmes.append(item)
        item.append(itemTitulo);
        item.append(itemNota);
        item.append(itemBotão);
        item.append(itemEstrela);
        itemBotão.append(botãoComprar);
        itemBotão.append(botãoPreço);
        itemSacola.append(tituloSacola,preçoSacola,posterSacola);
        itemSacola.append(painelSacola);
        painelSacola.append(maisSacola,quantidadeSacola,menosSacola)

        //- Setando os elemento com as informações
       
        itemTitulo.innerHTML = titulo;
        itemNota.innerHTML = nota;
        botãoComprar.innerHTML = 'Comprar';
        botãoPreço.innerHTML = `U$ ${preço}`;
        item.style.backgroundImage = `url(${fundo})`;
        tituloSacola.innerHTML = titulo;
        preçoSacola.innerHTML = `U$ ${preço}`;
        posterSacola.style.backgroundImage = `url(${fundo})`;
        quantidadeSacola.innerHTML = qt;
         

        //- Setando atributos

        item.setAttribute('class', 'item');
        item.setAttribute('carrinho', false);
        itemTitulo.setAttribute('class', 'itemTítulo');
        itemBotão.setAttribute('class', 'botão');
        itemEstrela.setAttribute('src', 'estrela2.png');
        itemNota.setAttribute('class', 'itemNota');
        posterSacola.setAttribute('class','posterSacola');
        preçoSacola.setAttribute('class','preçoSacola');
        tituloSacola.setAttribute('class','tituloSacola');
        painelSacola.setAttribute('class', 'painelSacola');
        maisSacola.setAttribute('src', 'add.png');
        maisSacola.setAttribute('class', 'add');
        menosSacola.setAttribute('class', 'delete');
        menosSacola.setAttribute('src', 'delete.png');

        //- Adicionando a lógica da compra

        const display = document.querySelector('.display');
        // display.setAttribute('vazio', true);
        itemSacola.setAttribute('class', 'itemSacola');



        itemBotão.addEventListener('click', ()=>{
            if(display.getAttribute('vazio') == 'true'){
                display.innerHTML = ''
                display.append(itemSacola);

                //botões do painel de quantidade

                const botõesMais = itemSacola.querySelector('.add');
                let qt = 1;

                botõesMais.addEventListener('click',()=>{
                    qt += 1;
                    quantidadeSacola.innerHTML = qt;
                    menosSacola.setAttribute('src', 'menos.png');
                    
                });

                const botõesMenos = itemSacola.querySelector('.delete');

                botõesMenos.addEventListener('click',()=>{
                    qt -= 1;
                    quantidadeSacola.innerHTML = qt;

                    if(qt == 1){
                        menosSacola.setAttribute('src', 'delete.png');
                        
                    }else if(qt < 1 ){
                        itemSacola.remove();
                        qt = 1;
                        quantidadeSacola.innerHTML = qt;
                        if(display.innerHTML == ''){
                            display.innerHTML = ` <p>Sua sacola está vazia</p>
                                                  <p>Adicione filmes agora</p>
                                                  <img class="icone" src="aguardando1.png">`
                            display.setAttribute('vazio', true);    
                        }    
                    }

                });

                if(display.innerHTML != ' '){
                    display.setAttribute('vazio', false)
                }
                
            }else{
                display.append(itemSacola);
                
                const botõesMais = itemSacola.querySelector('.add');
                let qt = 1;

                botõesMais.addEventListener('click',()=>{
                    qt += 1;
                    quantidadeSacola.innerHTML = qt;
                    menosSacola.setAttribute('src', 'menos.png');
                    
                });

                const botõesMenos = itemSacola.querySelector('.delete');

                botõesMenos.addEventListener('click',()=>{
                    qt -= 1;
                    quantidadeSacola.innerHTML = qt;

                    if(qt == 1){
                        menosSacola.setAttribute('src', 'delete.png');
                        
                    }else if(qt < 1 ){
                        itemSacola.remove();
                        qt = 1;
                        quantidadeSacola.innerHTML = qt;
                        if(display.innerHTML == ''){
                            display.innerHTML = ` <p>Sua sacola está vazia</p>
                                                  <p>Adicione filmes agora</p>
                                                  <img class="icone" src="aguardando1.png">`
                            display.setAttribute('vazio', true);
                        }    
                    }

                });

                if(display.innerHTML != ' '){
                    display.setAttribute('vazio', false)
                }
                
            }
        })

        
    })

    

})

})


//===============Timer do cupom==================

const  minutoInicial = 5;
let tempo = minutoInicial * 60;

const contagem = document.querySelector('#contagem');



const timer = () =>{
    const minutos = `0${Math.floor(tempo / 60)}`;
    let segundos = tempo % 60;

    if(segundos < 10){
        segundos = `0${segundos}`;
    }

    contagem.innerHTML = `${minutos}:${segundos}`
    tempo--;

    if(contagem.innerHTML == '00:00'){
       const banner = document.querySelector(".banner");
       const tudo = document.querySelector('.filmes')
       const sacola = document.querySelector('.sacola')
       banner.remove();
       clearInterval(id);
       const titulo = document.querySelector('#titulo')
       titulo.style.marginTop = '40px'
       sacola.style.marginTop = '100px'
    }
}

const id = setInterval(timer, 1000);

const caixa1 = document.querySelector('.caixa1')
caixa1.addEventListener('click', ()=>{
    const placeCupom = document.querySelector('#addcupom')
    placeCupom.value = 'HTMLNAOELINGUAGEM'
    const banner = document.querySelector('.banner')
    banner.remove()
    titulo.style.marginTop = '40px'

    const sacola = document.querySelector('.sacola');
    sacola.style.marginTop = '100px'
})