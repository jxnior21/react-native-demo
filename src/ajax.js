const apiHost = 'http://192.168.0.11:3000/api/events';

export default {
  async fetchInitialEvents(){
    try {
      let response = await fetch(apiHost);
      let responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  }
};
