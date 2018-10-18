export default {
  name: 'hover',
  inserted: function (el, bindings, vnode) {
    const target = bindings.value ? bindings.value.target : undefined

    if (typeof target !== 'undefined') {
      el = document.querySelector(target)
    }

    el.addEventListener('mouseenter', function () {
      el.classList.remove('hidden-lg-and-down')
    })

    el.addEventListener('mouseleave', function () {
      el.classList.add('hidden-lg-and-down')
    })
  }
}
