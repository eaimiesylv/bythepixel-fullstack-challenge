<template>
  <div>
    <div v-if="isLoading">Loading...</div>
    <table class="table" v-if="!isLoading">
      <thead>
        <tr>
          <td>#</td>
          <td v-for="title in titles" :key="title.id">{{ toSentenceCase(title.key) }}</td>
          <td>View Weather
           

          </td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in usersWithWeather" :key="user.id">
          <td>{{ index + 1 }}</td>
          <td v-for="title in titles" :key="title.id">{{ user[title.key] }}</td>
          <td>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="selectedWeather = user.weather">
              View Weather
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Button trigger modal -->
  <screen-view :weather="selectedWeather"></screen-view>

  <!-- Modal -->
</template>

<script>
import { onMounted, ref, computed } from 'vue';
import { useUserStore } from '../stores';
import ScreenView from '@/views/ScreenView.vue';

export default {
  components: { ScreenView },
  setup() {
    const userStore = useUserStore();
    const isLoading = ref(true);
    const selectedWeather = ref(null);

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
      isLoading,
      selectedWeather
    };
  }
};
</script>
