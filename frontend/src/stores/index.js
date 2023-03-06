import { defineStore } from 'pinia'
import { ALL_USERS_URL,getUserWeatherUrl} from './url.js';

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    users: [],
    usersWeather: []
  }),

  actions: {
    async fetchData() {
      try {
       
        const allusers = await fetch(ALL_USERS_URL).then(response => response.json());
        
        const userWeather = [];
        
        for (const user of Object.values(allusers.users)) {
          const weather = await this.fetchUserWeather(user.latitude, user.longitude);
          user.weather = weather;
          userWeather.push(user);
        }
    
        this.usersWeather = userWeather;
        this.users = allusers.users;
      } catch(e) {
        console.error(e);
        throw e;
      }
    },

    async fetchUserWeather(lat, lon) {
      try {
        const url =getUserWeatherUrl(lat,lon)
        const resp = await fetch(url).then(response => response.json());
        return resp;
      } catch(e) {
        console.error(e);
        throw e;
      }
    }
  }
})
