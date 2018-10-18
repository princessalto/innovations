export default {
  name: 'title',
  inserted: function (el, bindings) {
    if (el.querySelector('input')) {
      el.querySelector('input').classList.add('title--primary')
    }

    el.classList.add('title--primary')
  }
}
