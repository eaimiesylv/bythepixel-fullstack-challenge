<template>
  <div>
    
    <table class="table">
      <thead>
        <tr>
          <td>#</td>
          <td v-for="title in titles" :key="title.id"> {{toSentenceCase(title.key)}}</td>
        </tr>
        <tr v-for="(user, index) in users" :key="user.id">
          <td>{{ index + 1}}</td>
          <td v-for="title in titles" :key="title.id">{{user[title.key]}}</td>
        </tr>
    </thead>
    </table>
  </div>
</template>

<script>

import { useUserStore } from '../stores';

export default {
  setup() {
    
    const userStore = useUserStore();
    userStore.fetchData();
    
    function toSentenceCase(str) {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
    

    return {
      users: userStore.users, // fix: useUserStore().usersWeather
      titles: [
        { id: 1, key: "name" },
        { id: 2, key: "email" },
        { id: 3, key: "latitude" },
        { id: 4, key: "longitude" },
      ],
      toSentenceCase,
    
    };
  },
};
</script>
