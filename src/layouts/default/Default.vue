<template>
  <v-navigation-drawer 
    color="grey-darken-4"
    v-model="drawer"
  >
  <v-list>
    <v-list-item title="Postagens" @click="IrParaPostagens"/>
    <v-list-item title="Sobre o autor" @click="IrParaSobreOAutor"/>
    <v-list-item title="Faça uma postagem" @click="facaUmaPostagem"></v-list-item>

  </v-list>
  </v-navigation-drawer>
   <v-app-bar 
    flat 
    permanent
    color="grey-darken-4"
    class="border-b"
   >
     <v-app-bar-nav-icon 
      variant="text" 
      @click.stop="drawer = !drawer"
     >
    </v-app-bar-nav-icon>
  <v-app-bar-title>Blog do Estagiário 2.0</v-app-bar-title>
  </v-app-bar>
  <v-main class="gradiente">
    <router-view/>
  </v-main>
</template>

<script lang="ts" setup>
/**
 * Imports
 */
import router from '@/router';
import { ref } from 'vue';

/**
 * Data
 */
const drawer = ref(false);

/**
 * Methods
 */
const IrParaPostagens = () => {
  router.push('/');
}

const IrParaSobreOAutor = () =>{
  router.push('/sobre');
}

const facaUmaPostagem = () => {
  router.push('/faça-uma-postagem');
}

</script>
