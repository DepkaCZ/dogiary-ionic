<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Dogiary</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <div class="min-h-full flex flex-col justify-center sm:px-6 lg:px-8">
        <h2 class="my-6 text-center text-3xl font-extrabold">
          Sign in to your account
        </h2>
        <div class="px-6">
          <ion-button expand="full" class="h-[60px]" @click="signIn">
            <ion-icon slot="start" :icon="ioniconsLogoGoogle"></ion-icon>
            Google
          </ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
const supabaseClient = useSupabaseClient()
const signIn = () => {
  supabaseClient.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: window.location.origin + '/confirm',
    }
  })
}
</script>