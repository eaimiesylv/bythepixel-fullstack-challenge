<template>
  <div>
    <div v-if="isLoading">Loading...</div>
    <table class="table" v-if="!isLoading">
      <thead>
        <tr>
          <td>#</td>
          <td v-for="title in titles" :key="title.id">{{ toSentenceCase(title.key) }}</td>
          <td>More Detail</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in usersWithWeather" :key="user.id">
          <td>{{ index + 1 }}</td>
          <td v-for="title in titles" :key="title.id">{{ user[title.key] }}</td>
          <td>{{ user.weather }} - {{ user.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { onMounted, ref, computed } from 'vue';
import { useUserStore } from '../stores';

export default {
  setup() {
    const userStore = useUserStore();
    const isLoading = ref(true);

    // Fetch data after the component is mounted
    onMounted(async () => {
      try {
        await userStore.fetchData();
      } catch (e) {
        console.error(e);
      } finally {
        isLoading.value = false;
      }
    });

    function toSentenceCase(str) {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    const titles = [
      { id: 1, key: 'name' },
      { id: 2, key: 'email' }
    ];

   
    const usersWithWeather = computed(() => {
      return userStore.usersWeather;
    });

    return {
      usersWithWeather,
      titles,
      toSentenceCase,
      isLoading
    };
  }
};
</script>