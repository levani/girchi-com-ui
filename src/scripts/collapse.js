$('[data-toggle="collapse"]').on('click', function () {
  const target = $(this)[0]
  if (!target.hasAttribute('href')) {
    const container = $(`#${target.getAttribute('aria-controls')}`)
    if (target.getAttribute('aria-expanded') === 'true') {
      container.collapse('hide')
      target.setAttribute('aria-expanded', false)
      $(target).parent().removeClass('expanded')
    } else {
      container.collapse('show')
      target.setAttribute('aria-expanded', true)
      $(target).parent().addClass('expanded')
    }
  }
})
