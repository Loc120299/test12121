/* eslint-disable */
export default ({ app, store }, inject) => {
  if (process.client) {
    try {
      !function (e) {
        if (!window.pintrk)
          window.pintrk = function () {
            window.pintrk.queue.push(Array.prototype.slice.call(arguments))
          };
        var n = window.pintrk;
        n.queue = [], n.version = "3.0";
        var t = document.createElement("script");
        t.async = !0, t.src = e;
        var r = document.getElementsByTagName("script")[0];
        r.parentNode.insertBefore(t, r)
      }("https://s.pinimg.com/ct/core.js");
      window.pintrk('load', store.state.store.pinTrackId);
      window.pintrk('page');
      inject('pin', window.pintrk);
    }catch (e) {
      console.error('init pin tag', e)
    }
  }
}
