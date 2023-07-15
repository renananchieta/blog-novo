<template>
  <v-container >
    <v-card>
      <v-card-title>Cadastrar Postagem</v-card-title>
      <v-divider/>
      <v-form class="ma-5" @submit.prevent="salvar">
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field 
              v-model="form.autor_artigo"
              variant="outlined"
              :rules="[required]"
              label="Autor"/>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="form.data_postagem"
              type="datetime-local"
              :rules="[required]"
              label="Data da postagem"
              variant="outlined"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="form.titulo_artigo"
              variant="outlined"
              :rules="[required]"
              label="Título do Artigo"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="12">
            <v-textarea
              v-model="form.resumo_artigo"
              variant="outlined"
              :rules="[required]"
              label="Resumo"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="12">
            <v-textarea
              v-model="form.artigo_completo"
              variant="outlined"
              :rules="[required]"
              label="Artigo Completo"/>
          </v-col>
        </v-row>
        <v-card-actions>
          <v-spacer/>
            <v-btn
              color="primary" 
              type="submit"
              class="mt-2">Enviar
            </v-btn>
        </v-card-actions>
      </v-form>

      <v-dialog
        transition="dialog-bottom-transition"
        v-model="dialog"
        width="auto"
      >
        <v-card>
          <v-card-title class="text-center">Erro</v-card-title>
          <v-card-text>Não foi possível cadastrar sua postagem. Verifique as informações inseridas e tente novamente.</v-card-text>
          <v-card-actions>
            <v-btn 
              color="error" 
              block 
              @click="dialog = false"
            >Fechar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
  import axios from 'axios';
  import { ref } from 'vue';


  /**
   * Data
   */
  const dialog = ref(false);
  const form = ref({
    autor_artigo:'',
    data_postagem:'',
    titulo_artigo:'',
    resumo_artigo:'',
    artigo_completo:'',
  })  

  /**
   * Methods
   */
  const salvar = () => {
    axios.post('http://localhost:8000/api/blog', form.value)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        dialog.value = true;
      })
      .finally();
  }

  const required = (value:string) => {
  return !!value ||'Campo obrigatório';

 }
</script>
