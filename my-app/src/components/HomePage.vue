<template>
    <div class="container">
      <div class="row">
        <div class="col s12 m6 offset-m3 center-align">
          <div class="card">
            <div class="card-content">
              <span class="card-title">Bem-vindo ao EstoqueJá!</span>
              <p>Esta é a página inicial do seu sistema de controle de estoque.</p>
            </div>
            <div class="card-action">
              <router-link to="/produtos" class="waves-effect waves-light btn">Ver Produtos</router-link>
              </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage'
  }
  </script>
  
  <style scoped>
  /* Estilos específicos para este componente, se necessário */
  .card-title {
    font-size: 2em;
    font-weight: bold;
    color: #26a69a; /* Cor primária do Materialize */
  }
  </style>