<template>
  <MainLayout>
    <template #main>
      <!-- Main content -->
      <section class="flex flex-col w-full">
        <!-- left sidebar -->
        <VueTransition
  class=""
  name="fade"
  mode="out-in"
>
  <aside
    class="flex justify-around items-center px-4 py-1 w-full transition-all duration-300 ease-in-out"
    :class="{
      'bg-gradient-to-br from-indigo-950 to-indigo-900 shadow-xl': !pageScrolled,
      'bg-indigo-800/90 backdrop-blur-sm shadow-lg': pageScrolled
    }"
  >
    <!-- Logo o icono principal (opcional) -->
    <div class="flex-shrink-0 mb-6 md:mb-10">
      <i class="text-3xl text-white fas fa-shield-alt"></i>
    </div>

    <!-- Menú de navegación -->
    <nav class="flex gap-4 justify-between w-full">
      <button
        @click="setCurrentComponent(CommentsComponent)"
        class="flex gap-3 items-center px-4 py-3 text-white rounded-xl transition-all duration-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-900"
        :class="{
          'bg-white/10 shadow-sm': !pageScrolled,
          'bg-white/5 hover:bg-white/20': pageScrolled
        }"
      >
        <i class="text-lg fas fa-comments"></i>
        <span class="hidden font-medium text-white md:inline">
          Comentarios
        </span>
      </button>

      <button
        @click="setCurrentComponent(HistoryComponent)"
        class="flex gap-3 items-center px-4 py-3 text-white rounded-xl transition-all duration-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-900"
        :class="{
          'bg-white/10 shadow-sm': !pageScrolled,
          'bg-white/5 hover:bg-white/20': pageScrolled
        }"
      >
        <i class="text-lg fa fa-book"></i>
        <span class="hidden font-medium text-white md:inline">
          Historia
        </span>
      </button>

      <button
        @click="setCurrentComponent(ScamersTypesComponent)"
        class="flex gap-3 items-center px-4 py-3 text-white rounded-xl transition-all duration-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-900"
        :class="{
          'bg-white/10 shadow-sm': !pageScrolled,
          'bg-white/5 hover:bg-white/20': pageScrolled
        }"
      >
        <i class="text-lg fa fa-users"></i>
        <span class="hidden font-medium text-white md:inline">
          Tipos de estafadores
        </span>
      </button>

      <button
        @click="setCurrentComponent(CommonCasesComponent)"
        class="flex gap-3 items-center px-4 py-3 text-white rounded-xl transition-all duration-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-900"
        :class="{
          'bg-white/10 shadow-sm': !pageScrolled,
          'bg-white/5 hover:bg-white/20': pageScrolled
        }"
      >
        <i class="text-lg fa fa-bug"></i>
        <span class="hidden font-medium text-white md:inline">
          Casos Comunes
        </span>
      </button>

      <button
        @click="setCurrentComponent(AvoidScamComponent)"
        class="flex gap-3 items-center px-4 py-3 text-white rounded-xl transition-all duration-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-900"
        :class="{
          'bg-white/10 shadow-sm': !pageScrolled,
          'bg-white/5 hover:bg-white/20': pageScrolled
        }"
      >
        <i class="text-lg fa fa-shield-alt"></i>
        <span class="hidden font-medium text-white md:inline">
          Maneras de evitarlos
        </span>
      </button>
    </nav>

    <!-- Espacio para footer o usuario (opcional) -->
    <div class="hidden flex-shrink-0 mt-6 w-full">
      <div class="p-2 text-xs text-center text-white rounded-lg bg-white/10">
        <i class="fas fa-user-circle"></i>
        <span class="hidden ml-2 md:inline">Perfil</span>
      </div>
    </div>
  </aside>
</VueTransition>

        <!-- content based on async component -->
        <article class="overflow-y-scroll w-full bg-slate-100">
          <component :is="currentComponent"></component>
        </article>
      </section>
    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';
import { uiValues } from '@/stores/uiValues';
import { computed } from 'vue';
import { defineAsyncComponent } from 'vue';
import { shallowRef } from 'vue';

const pageScrolled = computed(() => uiValues().getPageScrolled);

const HistoryComponent = defineAsyncComponent(() => import('../components/async/HistoryComponent.vue'))
const ScamersTypesComponent = defineAsyncComponent(() => import('../components/async/ScamersTypesComponent.vue'))
const CommonCasesComponent = defineAsyncComponent(() => import('../components/async/CommonCasesComponent.vue'))
const AvoidScamComponent = defineAsyncComponent(() => import('../components/async/AvoidScamComponent.vue'))
const CommentsComponent = defineAsyncComponent(() => import('../components/async/CommentsComponent.vue'))

// component that'll change on user actions (when user clicks on a aside button)
const currentComponent = shallowRef(HistoryComponent);

const setCurrentComponent = (component: any) => {
  currentComponent.value = component;
}


</script>

<style scoped></style>
