<script setup lang="ts">
import { menuController } from '@ionic/vue'

const route = useRoute()
const user = useSupabaseUser()
const client = useSupabaseClient()

const logout = () => {
  client.auth.signOut()
  menuController.close()
  return navigateTo('/login')
}
const openMenu = () => {
  menuController.open()
}
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ route.meta.title }}</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="openMenu">
            <ion-chip v-if="user">
              <ion-label>{{ user.user_metadata.full_name }}</ion-label>
              <ion-avatar>
                <img alt="Silhouette of a person's head" :src="user.user_metadata.avatar_url" />
              </ion-avatar>
            </ion-chip>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-menu content-id="main-content" type="overlay" side="end">
      <ion-header>
        <ion-toolbar>
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <ion-list>
          <ion-item button @click="logout">
            Logout
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>
    <ion-content id="main-content">
      <ion-tabs>
        <ion-router-outlet />
        <ion-tab-bar slot="bottom">
          <ion-tab-button
              tab="training"
              href="/sections/training"
          >
            <ion-icon :icon="ioniconsPawOutline"></ion-icon>
            <ion-label>Trainings</ion-label>
          </ion-tab-button>
          <ion-tab-button
              tab="tricks"
              href="/sections/tricks/"
          >
            <ion-icon :icon="ioniconsListOutline" />
            <ion-label>Tricks</ion-label>
          </ion-tab-button>
          <ion-tab-button
              tab="diary"
              href="/sections/diary/"
          >
            <ion-icon :icon="ioniconsBookOutline" />
            <ion-label>Diary</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-content>
  </ion-page>
</template>
