<template>
  <MainLayout>
    <template #main>
      <!-- Main content -->
      <section class="flex w-full bg-white min-h-dvh">
        <!-- left sidebar -->
        <aside
          class="flex flex-col items-center justify-around gap-3 overflow-auto min-w-72"
          :class="{'bg-rose-800': !pageScrolled, 'bg-orange-500': pageScrolled}"
        >
          <p
            @click="setCurrentComponent('HistoryComponent')"
            class="p-2 font-semibold bg-white cursor-pointer rounded-2xl"
            :class="{'text-rose-800': !pageScrolled, 'text-orange-500': pageScrolled}"
          >
            <i class="fa fa-book"></i> Historia
          </p>
          <p
            @click="setCurrentComponent('ScamersTypesComponent')"
            class="p-2 font-semibold bg-white cursor-pointer rounded-2xl"
            :class="{'text-rose-800': !pageScrolled, 'text-orange-500': pageScrolled}"
          >
            <i class="fa fa-users"></i> Tipos de estafadores
          </p>
          <p
            @click="setCurrentComponent('CommonCasesComponent')"
            class="p-2 font-semibold bg-white cursor-pointer rounded-2xl"
            :class="{'text-rose-800': !pageScrolled, 'text-orange-500': pageScrolled}"
          >
            <i class="fa fa-bug"></i> Casos Comunes
          </p>
          <p
            @click="setCurrentComponent('AvoidScamComponent')"
            class="p-2 font-semibold bg-white cursor-pointer rounded-2xl"
            :class="{'text-rose-800': !pageScrolled, 'text-orange-500': pageScrolled}"
          >
            <i class="fa fa-shield-alt"></i> Maneras de evitarlos
          </p>
          <p
            @click="setCurrentComponent('CommentsComponent')"
            class="p-2 font-semibold bg-white cursor-pointer rounded-2xl"
            :class="{'text-rose-800': !pageScrolled, 'text-orange-500': pageScrolled}"
          >
            <i class="fas fa-comments"></i> Comentarios
          </p>
        </aside>

        <!-- content based on selected component -->
        <article class="w-full overflow-y-scroll bg-slate-100 max-h-dvh">
          <HistoryComponent v-if="currentComponent === 'HistoryComponent'" />
          <ScamersTypesComponent v-if="currentComponent === 'ScamersTypesComponent'" />
          <CommonCasesComponent v-if="currentComponent === 'CommonCasesComponent'" />
          <AvoidScamComponent v-if="currentComponent === 'AvoidScamComponent'" />
          <CommentsComponent v-if="currentComponent === 'CommentsComponent'" />
        </article>
      </section>
    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';
import { uiValues } from '@/stores/uiValues';
import { computed, ref } from 'vue';

// Importing components normally
import HistoryComponent from '../components/async/HistoryComponent.vue';
import ScamersTypesComponent from '../components/async/ScamersTypesComponent.vue';
import CommonCasesComponent from '../components/async/CommonCasesComponent.vue';
import AvoidScamComponent from '../components/async/AvoidScamComponent.vue';
import CommentsComponent from '../components/async/CommentsComponent.vue';

const pageScrolled = computed(() => uiValues().getPageScrolled);

// component that'll change on user actions (when user clicks on a aside button)
const currentComponent = ref('HistoryComponent');

const setCurrentComponent = (component: string) => {
  currentComponent.value = component;
};
</script>

<style scoped>

</style>
