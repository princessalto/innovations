export default {
  name: 'sticky',
  inserted: function (el, bindings, vnode) {
    const target = bindings.value ? bindings.value.target : undefined

    if (typeof target !== 'undefined') {
      el = document.querySelector(target)
    }

    el.classList.add('sticky')
  }
}
