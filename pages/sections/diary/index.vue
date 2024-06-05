<template>
  <ion-page>
    <ion-content :fullscreen="true">
      diary contents
    </ion-content>
  </ion-page>
</template>

<script setup>
user = useSupabaseUser()

definePageMeta({
  title: 'Diary'
})
</script>