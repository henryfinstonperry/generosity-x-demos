$(document).ready(() => {
  let items = {}
  let amounts = () => {
    let total = [0, 0]
    $.each(items, (index, item) => {
      total[0] += parseInt((item['qty'] * item['amt']))
      total[1] += parseInt(item['qty'])
    })
    return total
  }

  $('.item-btn').each((index, button) => {
    let key = $(button).data('key')
    let amt = $(button).data('amt')
    items[key] = {'qty': 0, 'amt': amt}

    $(button).on('click', () => {
      items[key]['qty'] += 1
      $(button).text(items[key]['qty'])
      $(button).next('.change-amt').show()
      $('.give-btn').text('Give $' + new Intl.NumberFormat().format(amounts()[0]))
      $('.give-btn + span').show().text(amounts()[1].toString())
    })

    let less = $(button).next('.change-amt').find('.less')
    let more = $(button).next('.change-amt').find('.more')

    more.on('click', () => {
      items[key]['qty'] += 1
      $(button).text(items[key]['qty'])
      $('.give-btn').text('Give $' + new Intl.NumberFormat().format(amounts()[0]))
      $('.give-btn + span').show().text(amounts()[1].toString())
    })

    less.on('click', () => {
      items[key]['qty'] -= 1
      $(button).text(items[key]['qty'])
      $('.give-btn').text('Give $' + new Intl.NumberFormat().format(amounts()[0]))
      $('.give-btn + span').show().text(amounts()[1].toString())
      if (items[key]['qty'] < 1) {
        items[key]['qty'] = 0
        $(button).text('Add to Cart')
        $(button).next('.change-amt').hide()
        if (amounts()[1] < 1) {
          $('.give-btn').text('Choose Gifts')
          $('.give-btn + span').hide()
        }
      }
    })
  })

  $('.give-btn').on('click', () => {
    if (amounts()[1] < 1) {
      // show an error
    } else {
      let itemstr = () => {
        let str = ''
        $.each(Object.keys(items), (index, key) => {
          if (items[key]['qty'] > 0)
            str += key += items[key]['qty']
        })
        return str
      }
      Cookies.set('giftguide_itemstring', itemstr())
      window.location.href += '?form=FUNVXFBXGHY&amount=' + amounts()[0] + '&modifyAmount=no&recurring=once&designationId=' + itemstr() + '&modifyDesignation=no'
    }
  })

  FundraiseUp.on('donationComplete', () => {
    Cookies.remove('giftguide_itemstring')
  })

  // On page load
  const re = /([A-Z]+)([0-9]+)/g
  let cookie = Cookies.get('giftguide_itemstring')
  let match = cookie.matchAll(re)

  for (tuple of match) {
    items[tuple[1]]['qty'] = parseInt(tuple[2])

    $('.item-btn').each((index, button) => {
      if ($(button).data('key') == tuple[1]) {
        $(button).text(items[tuple[1]]['qty'])
        $(button).next('.change-amt').show()
      }
    })
  }
  $('.give-btn').text('Give $' + new Intl.NumberFormat().format(amounts()[0]))
  $('.give-btn + span').show().text(amounts()[1].toString())

})
