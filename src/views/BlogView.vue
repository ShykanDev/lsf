<template>
  <MainLayout>
    <template #main>
      <!-- Main content -->
      <section class="flex w-full bg-white min-h-dvh">
        <!-- left sidebar -->
        <aside class="flex flex-col items-center justify-around gap-3 px-2 md:min-w-72 max-w-32"
          :class="{ 'bg-rose-800': !pageScrolled, 'bg-orange-500': pageScrolled }">
          <p @click="setCurrentComponent(HistoryComponent)"
            class="p-2 font-semibold bg-white cursor-pointer rounded-2xl"
            :class="{ 'text-rose-800': !pageScrolled, 'text-orange-500': pageScrolled }"><i class="fa fa-book"></i>
            Historia</p>
          <p @click="setCurrentComponent(ScamersTypesComponent)"
            class="p-2 font-semibold bg-white cursor-pointer rounded-2xl"
            :class="{ 'text-rose-800': !pageScrolled, 'text-orange-500': pageScrolled }"><i class="fa fa-users"></i>
            Tipos de estafadores</p>
          <p @click="setCurrentComponent(CommonCasesComponent)"
            class="p-2 font-semibold bg-white cursor-pointer rounded-2xl"
            :class="{ 'text-rose-800': !pageScrolled, 'text-orange-500': pageScrolled }"><i class="fa fa-bug"></i> Casos
            Comunes</p>
          <p @click="setCurrentComponent(AvoidScamComponent)"
            class="p-2 font-semibold bg-white cursor-pointer rounded-2xl"
            :class="{ 'text-rose-800': !pageScrolled, 'text-orange-500': pageScrolled }"><i
              class="fa fa-shield-alt"></i>
            Maneras de evitarlos</p>
          <p @click="setCurrentComponent(CommentsComponent)"
            class="p-2 font-semibold bg-white cursor-pointer rounded-2xl"
            :class="{ 'text-rose-800': !pageScrolled, 'text-orange-500': pageScrolled }"><i class="fas fa-comments"></i>
            Comentarios</p>
        </aside>
        <!-- content based on async component -->
        <article class="w-full overflow-y-scroll bg-slate-100 max-h-dvh">
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