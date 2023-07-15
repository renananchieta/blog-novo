<template>
    <v-container>
        <v-row>
          <v-col cols="12" md="8" >
            <v-card 
              v-for="(posts,n) in listaPosts"
              :key="n"
              :value="posts"
              class="mb-4"
            >
              <v-card-title 
                class="text-left text-h1 text-h4 font-weight-bold"
              >{{ posts.titulo_artigo }}
              </v-card-title>
              <v-card-text 
                class="font-weight-bold text-grey-darken-1"
                type="datetime-local"
              >{{ posts.data_postagem }}</v-card-text>
              <v-divider></v-divider>
              <v-card-text 
                v-if="showArtigo"
                class="text-left text-subtitle-2"
              >{{ posts.artigo_completo}}
              </v-card-text>
              <v-card-text 
                v-else="showResumo"
                class="text-left text-subtitle-2"
              >{{posts.resumo_artigo}}
              </v-card-text>
              <v-card-actions>
                <v-btn @click="leiaMais()">Leia mais >>></v-btn>
              </v-card-actions>
              <v-divider/>
              <v-card-text
                class="text-left text-subtitle-2"
              >Postado por:
                <v-btn 
                  variant="plain"
                  to="/sobre" > 
                  {{ posts.autor_artigo }}
                </v-btn>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card >
              <v-card-text class="d-flex align-center justify-center text-subtitle-2 text-left ">Se quiser contribuir para o café do Dev</v-card-text>
              <div class="d-flex align-center justify-center ma-3">
                <v-img 
                  src="@/assets/qrcode3.jpeg"
                  :width="110"
                  :height="202"
                >
                </v-img>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
</template>

<script setup lang="ts">
/**
 * Imports
 */
import axios from 'axios';
import { onMounted } from 'vue';
import { ref } from 'vue';

/**
 * Data
 */
const showResumo = ref(true);
const showArtigo = ref(false);
const listaPosts = ref([]);

/**
 * Methods
 */
const leiaMais = () => {
  showResumo.value = !showResumo.value;
  showArtigo.value = !showArtigo.value;
}

const carregarPostagens = () => {
  axios.get('http://localhost:8000/api/blog')
    .then((response) =>{
      listaPosts.value = response.data.reverse();
    })
    .catch((error) => {
      console.log(error);
    })
    .finally();
}

/**
 * Hooks
 */
onMounted(()=>{
  carregarPostagens();
});


</script>