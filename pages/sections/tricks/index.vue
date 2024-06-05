<template>
  <ion-page>
    <ion-content :fullscreen="true" >
      <ion-modal ref="modal" trigger="open-modal">
        <ion-header>
          <ion-toolbar>
            <ion-buttons slot="start">
              <ion-button @click="cancel()">Cancel</ion-button>
            </ion-buttons>
            <ion-title>New trick / excercise</ion-title>
            <ion-buttons slot="end">
              <ion-button :strong="true">Confirm</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <ion-item>
            <ion-input
                label="Trick / Excersice name"
                label-placement="stacked"
                ref="name"
                type="text"
                placeholder="e.g. sit"
            ></ion-input>
          </ion-item>
          <ion-item>
            <ion-toggle ref="maintenance">Maintain mode</ion-toggle>
          </ion-item>
          <ion-item>
            <ion-textarea
                label-placement="floating"
                :auto-grow="true"
                label="Initial instructions"
                ref="instructions"
            >
            </ion-textarea>
          </ion-item>
        </ion-content>
      </ion-modal>
      <ion-fab slot="fixed" vertical="bottom" horizontal="end">
        <ion-fab-button id="open-modal" expand="block">
          <ion-icon :icon="ioniconsAdd"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script setup>
definePageMeta({
  title: 'Tricks / Excercises'
})
const modal = ref()
const cancel = () => modal.value.$el.dismiss(null, 'cancel');
</script>

<style lang="scss" scoped>

</style>