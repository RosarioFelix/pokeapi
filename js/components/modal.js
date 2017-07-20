'use strict';

const Modal = () => {
    const modal  = $('<div id="modal1" class="modal">');
    const containerModal  = $('<div class="container"></div>');
    const rowModal  = $('<div class="row"></div>');
    const colDoceModal = $('<div class="col s12"></div>');
    const contentDetail   = $('<div class="modal-content">');
    const modalFooter = $('<div class="modal-footer">');
    const modalClose = $('<a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">X</a>');

    modal.append(contentDetail);
    contentDetail.append(containerModal);
    containerModal.append(rowModal);
    rowModal.append(colDoceModal);
    modal.append(modalFooter);
    modalFooter.append(modalClose);

    modalClose.on('click', _ =>{
        $('.modal-content').empty();
    });
    return modal;
  };

  const DetallesPokemon = (duplicarImagen, namePokemom, imgNum) => {
  const container  = $('<div class="container"></div>');
  const row     = $('<div class="row"></div>');
  const colDoce = $('<div class="col m12"></div>');
  const titleModal  = $('<h2 class="center-align title">'+namePokemom+'</h2>');
  const rowDos    = $('<div class="row"></div>');
  const imgColumn   = $('<div class="col s12 m4"></div>');
  const detailsColumn = $('<div class="col s12 m8"></div>');
  const introPokemon  = $('<p class = "text">'+state.selectedStation.flavor_text_entries[1].flavor_text+'</p>');
  console.log(state.selectedStation.flavor_text_entries);


  container.append(row);
  row.append(colDoce);
  colDoce.append(titleModal);
  container.append(rowDos);
  rowDos.append(imgColumn);
  imgColumn.append(duplicarImagen);

  rowDos.append(detailsColumn);
  detailsColumn.append(introPokemon);


  return container;
};
