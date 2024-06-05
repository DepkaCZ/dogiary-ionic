<template>
  <ion-page>
    <ion-content :fullscreen="true">
      Trainings content
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
const user = useSupabaseUser()

definePageMeta({
  alias: ['/'],
  title: 'Trainings'
})
</script>