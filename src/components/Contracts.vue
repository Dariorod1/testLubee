<template>
    <div class="container">
      <div class="formu">
        <form @submit.prevent="consultarContrato">
          <label>Ingrese el id del contrato a consultar:</label>
          <input type="text" v-model="id">
          <button type="submit" class="btn btn-success">Consultar</button>
        </form>
      </div>
      <div v-if="contract" class="contractDetail">
        <table class="table table-dark">
            <thead class="table-primary">
                <tr>
                <th scope="col" colspan="2" class="text-center">{{ "Detalles del contrato #" + id }}</th>
                </tr>
            </thead>
            <tbody>
            <tr>
              <td><strong>Código de curso:</strong></td>
              <td>{{ this.contract.codigoCurso }}</td>
            </tr>
            <tr>
              <td><strong>Fecha de alta:</strong></td>
              <td>{{ contract.fechaAlta }}</td>
            </tr>
            <tr>
              <td><strong>Colegio:</strong></td>
              <td>{{ contract.colegioNombre }}</td>
            </tr>
            <tr>
              <td><strong>Nivel:</strong></td>
              <td>{{ contract.colegioNivel }}</td>
            </tr>
            <tr>
              <td><strong>Curso:</strong></td>
              <td>{{ contract.colegioCurso }}</td>
            </tr>
            <tr>
              <td><strong>Localidad:</strong></td>
              <td>{{ contract.localidad }}</td>
            </tr>
            <tr>
              <td><strong>Pedido:</strong></td>
              <td>
                <ul>
                  <li v-for="item in pedido">{{ item }}</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><strong>Total:</strong></td>
              <td>{{ contract.total }}</td>
            </tr>
            <tr>
              <td><strong>Fecha de entrega:</strong></td>
              <td>{{ contract.fechaEntrega }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-if="!contract">
            <h5>No hay contratos con el ID ingresado</h5>
    </div>
    </div>
  </template>
  
  <script>
  import { onMounted } from 'vue';
  import axios from 'axios';
  
  export default {
    data() {
      return {
        contract: null,
        id: '',
        pedido: null
      }
    },
    methods: {
      consultarContrato() {
        axios.get('https://localhost:7174/contrato/mostrarContrato?idContrato=' + this.id)
          .then(response => {
            this.contract = response.data.contrato[0]
            this.pedido = this.contract.pedido.split(",")
          })
          .catch(error => {
            console.log(error)
          });
      }
    }
  }
  </script>
  
  <style scoped>
  .container{
        padding: 10px;
        display: flex;
        justify-content: space-around;
    }
  
  .formu {
    margin-bottom: 10px;
  }
  
  form {
        display: grid;
        justify-content: space-between;
  }
  
  button {
        border-radius: 10px;
        margin-top: 5px;
    }
    input {
        margin-top:5px;
        border-radius: 10px;
    }
  
  .contractDetail {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
  }
  
  table {
  border-collapse: collapse;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}
h5{
    text-align:center;
}
th,
td {
  padding: 0.5rem;
}

th {
  font-weight: bold;
  background-color: #e9ecef;
}

tbody tr:nth-child(even) {
  background-color: #2d5d8e;
}
.table-dark {
  background-color: #757e8d; /* negro */
}

.table-primary {
  background-color: #05386e; /* azul */
}
</style>
  