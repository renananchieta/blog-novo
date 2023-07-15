<template>
    <v-container>
        <v-row>
          <v-col cols="12" md="8" >
            <v-card>
              <v-card-title 
                class="text-left text-h1 text-h4 font-weight-bold"
              >{{ tituloArtigo }}
              </v-card-title>
              <v-card-text 
                class="font-weight-bold text-grey-darken-1"
              >{{ dataPostagem }}</v-card-text>
              <v-divider></v-divider>
              <v-card-text 
                v-if="showArtigo"
                class="text-left text-subtitle-2"
              >{{artigo}}
              </v-card-text>
              <v-card-text 
                v-else="showResumo"
                class="text-left text-subtitle-2"
              >{{resumo}}
              </v-card-text>
              <v-card-actions>
                <v-btn @click="leiaMais">Leia mais >>></v-btn>
              </v-card-actions>
              <v-divider/>
              <v-card-text
                class="text-left text-subtitle-2"
              >Postado por:
                <v-btn variant="text"> 
                  {{ autorArtigo }}
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
                  :width="222"
                  :height="250"
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
import { ref } from 'vue';

const showResumo = ref(true);
const showArtigo = ref(false);
const tituloArtigo = ref('Primeiro post de exemplo');
const resumo = ref('sobre o autor');
const artigo = ref('');
const autorArtigo = ref('Renan Anchieta');
const dataPostagem = ref('05/07/2023');


const leiaMais = () => {
  showResumo.value = !showResumo.value;
  showArtigo.value = !showArtigo.value;
}
</script>