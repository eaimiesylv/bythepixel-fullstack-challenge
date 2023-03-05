import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    users: [],
    usersWeather: []
  }),

  actions: {
    async fetchData() {
      try {
        const url = 'http://localhost/';
        const allusers = await fetch(url).then(response => response.json());
        
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
      const appId = 'c4b8deb1cf03d2f44edac9759de75ee0';
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`
        const resp = await fetch(url).then(response => response.json());
        return resp;
      } catch(e) {
        console.error(e);
        throw e;
      }
    }
  }
})
