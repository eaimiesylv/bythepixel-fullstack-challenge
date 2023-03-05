<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <td>#</td>
          <td v-for="title in titles" :key="title.id">{{ toSentenceCase(title.key) }}</td>
          <td>View Weather</td>
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
import { onMounted, ref } from 'vue';
import { useUserStore } from '../stores';

export default {
  setup() {
    const userStore = useUserStore();
    const usersWithWeather = ref([]);

    // Fetch data after the component is mounted
    onMounted(async () => {
      try {
        await userStore.fetchData();
        usersWithWeather.value = userStore.usersWeather;
      } catch (e) {
        console.error(e);
      }
    });

    function toSentenceCase(str) {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    const titles = [
      { id: 1, key: 'name' },
      { id: 2, key: 'email' }
    ];

    return {
      usersWithWeather,
      titles,
      toSentenceCase
    };
  }
};
</script>
