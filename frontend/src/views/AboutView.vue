<script setup lang="ts">
import LayoutComponent from "@/components/AppLayout.vue";

</script>

<template>
  <layout-component>
      This is a wheather application that does  the following
      <ol>
        <li> Show a list of users and their current weather.</li>
        <li>Clicking a user opens a modal or screen which shows that users detailed weather report.</li>
        <li>Weather update will not be no older than 1 hour.</li>
        <li>Internal API request(s) to retrieve weather data will not take no longer than 500ms.</li>
      </ol>
  </layout-component>
</template>
