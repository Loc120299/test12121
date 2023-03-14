import createPersistedState from 'vuex-persistedstate';
export default ({ store }) => {
  window.onNuxtReady(() => {
    createPersistedState({
      key: 'db_shipping',
      paths: ['shipping']
    })(store);
  });

};
