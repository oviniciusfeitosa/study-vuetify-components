<template>
  <v-container fluid>
      <v-toolbar color="primary" dark tabs dense card>
        <v-tabs
          centered
          color="primary"
          slot="extension"
          slider-color="yellow"
          v-model="model">
          <v-tab
            v-for="i in 3"
            :key="i"
            :href="`#tab-${i}`">
            Item {{ i }}
          </v-tab>
        </v-tabs>
      </v-toolbar>
      <v-tab-items v-model="model">
          <v-tab-item
          v-for="i in 3"
          :key="i"
          :id="`tab-${i}`" >
          <v-card flat>
            <v-card-text v-text="text"></v-card-text>
          </v-card>
        </v-tab-item>
      </v-tab-items>
  </v-container>
</template>
<script>
    export default {
        data () {
            return {
            model: 'tab-2',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            }
        }
    }
</script>