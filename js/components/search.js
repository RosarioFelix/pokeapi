'use strict';
const Detalles = (station, update) =>{
  const grid = $('<div></div>');
  const gridImg = $('<div class ="flex-img"></div>');
  const img   = $('<a class="waves-effect waves-light " href="#modal1"><img class = "img-poke" src="http://serebii.net/art/th/'+station.entry_number+'.png"></a>');
  const divWhite = $('<div class = "bg-img" ></div>')
  const divIcons = $('<div class = "img-icons" ></div>')
  const pokeball = $('<img class ="poke" src ="img/pokeball.png"/>')
  const heart = $('<img class ="poke" src ="img/heart.png"/>');
  const data = $('<img class ="poke" src ="img/data.png"/>')
  const title = $('<h6 class = "center-align">'+station.pokemon_species.name+'</h6 >');

 grid.append(gridImg);
 gridImg.append(img);
 grid.append(divWhite);
 divWhite.append(divIcons);
 divIcons.append(pokeball);
 divIcons.append(heart);
 divIcons.append(data);
 divWhite.append(title);

 return grid;

};

const Search = () =>{
  const search =$('<section></section');
  const container = $('<div class = "container" ></div>');
  const row = $('<div class = "row" ></div>');
  const col = $('<div class = "col m8 s8"></div>');
  const contSearch = $('<div class="flex"></div>')
  const icon = $('<i class="material-icons">search</i>');
  const input = $('<input type = "text" placeholder = "Escriba Nombre"></span>');
  const col4 = $('<div class = "col m4 s4"></div>')
  const az = $('<div class = "az"> A-Z </div>')
  const groupContainer = $('<div class="group-details"></div>')


  search.append(container);
  container.append(row);
  row.append(col);
  col.append(contSearch);
  contSearch.append(icon);
  contSearch.append(input);
  row.append(col4);
  col4.append(az);
  search.append(groupContainer);

  input.on("keyup", (e) => {
    e.preventDefault;
    const filterGas = filterByDistrict(state.stations.pokemon_entries, $(e.currentTarget).val());
    reRender(groupContainer,filterGas);
  });

  reRender(groupContainer, filterByDistrict(state.stations.pokemon_entries,""));

  return search;
};

const reRender = (groupContainer, filterGas) => {
  groupContainer.empty();
  filterGas.forEach(pokemonHola => {
    console.log(pokemonHola)
  groupContainer.append(Detalles(pokemonHola,_ =>{reRender(groupContainer, filterGas)}));
  });
};
