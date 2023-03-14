import Vue from 'vue'

export function showError(msg) {
  Vue.prototype.$toast.error(msg)
}

export function showSuccess(msg = 'Success') {
  Vue.prototype.$toast.success(msg)
}

export function errorHandle(error) {
  try {
    showError(error.response.data.message)
  } catch (err) {
    showError('Something went wrong')
  }
}

export function isNumber(evt) {
  evt = evt || window.event
  const charCode = evt.which ? evt.which : evt.keyCode
  if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
    evt.preventDefault()
  } else {
    return true
  }
}

export function uuid() {
  let d = Vue.prototype._.now()
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (d + Vue.prototype._.random(16)) % 16 | 0
    d = Math.floor(d / 16)
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
  })
}

export function validateEmail(email) {
  return /.+@.+\..+/.test(email)
}

export function isEmpty(str) {
  return !str || str.length === 0
}

export function slug(str) {
  str = str.replace(/^\s+|\s+$/g, '') // trim
  str = str.toLowerCase()

  // remove accents, swap ñ for n, etc
  const from = 'ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;'
  const to = 'aaaaaeeeeeiiiiooooouuuunc------'
  for (let i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
  }

  str = str
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-') // collapse dashes

  return str
}

export function buildAdroll(scripts, store) {
  if (store.adRollAdvId && store.adRollAdvId.length > 3 && store.adRollPixId && store.adRollPixId.length > 3) {
    const js = `
    adroll_adv_id = "${store.adRollAdvId}";
    adroll_pix_id = "${store.adRollPixId}";
    adroll_version = "2.0";

    (function(w, d, e, o, a) {
        w.__adroll_loaded = true;
        w.adroll = w.adroll || [];
        w.adroll.f = [ 'setProperties', 'identify', 'track' ];
        var roundtripUrl = "https://s.adroll.com/j/" + adroll_adv_id
                + "/roundtrip.js";
        for (a = 0; a < w.adroll.f.length; a++) {
            w.adroll[w.adroll.f[a]] = w.adroll[w.adroll.f[a]] || (function(n) {
                return function() {
                    w.adroll.push([ n, arguments ])
                }
            })(w.adroll.f[a])
        }

        e = d.createElement('script');
        o = d.getElementsByTagName('script')[0];
        e.async = 1;
        e.src = roundtripUrl;
        o.parentNode.insertBefore(e, o);
    })(window, document);
    adroll.track("pageView");
    `
    scripts.push({
      innerHTML: js
    })
  }

  return scripts


}

export function awConversionTrackingCodeJS(conversionId) {
  return `window.dataLayer = window.dataLayer || [];

  function gtag(){dataLayer.push(arguments);}

  gtag('js', new Date());

  gtag('config', 'AW-${conversionId}');`
}

export function metaNameCustom(customTag) {
  if (customTag) {
    const tags = customTag.split('|')
    if (tags && tags.length > 0) {
      return tags[0]
    }
  }
  return ''
}

export function metaContentCustom(customTag) {
  if (customTag) {
    const tags = customTag.split('|')
    if (tags && tags.length > 1) {
      return tags[1]
    }

  }
  return ''
}

export function seoProduct(productDetail, storeName) {
  const metas = []
  metas.push({
    hid: 'description',
    property: 'description',
    content: productDetail.title
  })
  if (productDetail.json_data === 'generated') {
    const seoPrice = productDetail.variants[0].price
    const seoImage = productDetail.images[0].src

    metas.push({
      hid: 'og:price:amount',
      property: 'og:price:amount',
      content: seoPrice
    })
    metas.push({
      hid: 'product:price:amount',
      property: 'product:price:amount',
      content: seoPrice
    })
    metas.push({
      hid: 'og:image',
      property: 'og:image',
      content: seoImage
    })
    metas.push({
      hid: 'og:image:secure_url',
      property: 'og:image:secure_url',
      content: seoImage
    })

  }
  metas.push(
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'product'
    }
  )
  metas.push(
    {
      hid: 'og:price:currency',
      property: 'og:price:currency',
      content: 'USD'
    }
  )
  metas.push(
    {
      hid: 'product:price:currency',
      property: 'product:price:currency',
      content: 'USD'
    }
  )


  metas.push(
    {
      hid: 'og:site_name',
      property: 'og:site_name',
      content: `${storeName}`
    }
  )

  metas.push(
    {
      hid: 'twitter:title',
      property: 'twitter:title',
      content: productDetail.title
    }
  )
  metas.push(
    {
      hid: 'og:title',
      property: 'og:title',
      content: productDetail.title
    }
  )
  metas.push(
    {
      hid: 'og:availability',
      property: 'og:availability',
      content: 'instock'
    }
  )
  return metas
}


export function pinTracking(scripts, store) {
  if (store.pinTrackId && store.pinTrackId.length >= 3) {
    const js = ` !function(e){if(!window.pintrk){window.pintrk = function () {
    window.pintrk.queue.push(Array.prototype.slice.call(arguments))};var
    n=window.pintrk;n.queue=[],n.version="3.0";var
    t=document.createElement("script");t.async=!0,t.src=e;var
    r=document.getElementsByTagName("script")[0];
    r.parentNode.insertBefore(t,r)}}("https://s.pinimg.com/ct/core.js");
    pintrk('load', '${store.pinTrackId}', {em: '<user_email_address>'});
    pintrk('page');`
    scripts.push({
      innerHTML: js
    })
  }
  return scripts
}

export function pinHomeTracking(store, pinProductId, title) {
  const scripts = []
  if (store.pinTrackId && store.pinTrackId.length >= 3) {
    scripts.push({
      innerHTML: `
        pintrk('track', 'checkout', {
        value: 100,
        order_quantity: 1,
        currency: 'USD',
        order_id: 'X-15148',
        line_items: [
          {
            product_name: '${title}',
            product_id: '${pinProductId}'
          }
        ]
      });
        `
    })
    scripts.push({
      innerHTML: `
        pintrk('track', 'addtocart', {
        value: 100,
        order_quantity: 1,
        currency: 'USD',
        order_id: 'X-15148',
        line_items: [
          {
            product_name: '${title}',
            product_id: '${pinProductId}'
          }
        ]
      });
        `
    })
    scripts.push({
      innerHTML: `
        pintrk('track', 'pagevisit',
        {
          value: 100,
          order_quantity: 1,
          currency: 'USD',
          order_id: 'X-15148',
          line_items: [
            {
              product_name: '${title}',
              product_id: '${pinProductId}'
            }
          ]
        });
        `
    })
    scripts.push({
      innerHTML: `
        pintrk('track', 'lead', {
        lead_type: 'Newsletter'
        });
        `
    })
    scripts.push({
      innerHTML: `
        pintrk('track', 'search', {
        search_query: 'boots'
        });
        `
    })
    scripts.push({
      innerHTML: `
        pintrk('track', 'viewcategory',
        {
          value: 100,
          line_items: [
            {
              product_category: 'Shoes'
            }
          ]
        });
        `
    })
    scripts.push({
      innerHTML: `
        pintrk('track', 'user_defined_event_name');
        `
    })
  }
  return scripts
}

export function googleTracking(scripts, store, path) {

  if (store.ggAnalyticsId && store.ggAnalyticsId.length >= 3 && store.ggConversionId && store.ggConversionId.length >= 3) {
    scripts.push({
      src: `https://www.googletagmanager.com/gtag/js?id=${store.ggAnalyticsId}`,
      async: true
    })
    const js = `
        window.dataLayer = window.dataLayer || [ ] ;
        function gtag(){dataLayer.push(arguments);}

        gtag( 'js', new Date () ) ;

        gtag( 'config', '${store.ggAnalyticsId}');

        gtag( 'config', '${store.ggConversionId}');
        `
    scripts.push({
      innerHTML: js
    })
    return scripts

  } else if (store.ggConversionId && store.ggConversionId.length >= 3) {
    scripts.push({
      src: `https://www.googletagmanager.com/gtag/js?id=${store.ggConversionId}`,
      async: true
    })
    const js = `
        window.dataLayer = window.dataLayer || [];

        function gtag(){dataLayer.push(arguments);}

        gtag('js', new Date());

        gtag('config', '${store.ggConversionId}');
        `
    scripts.push({
      innerHTML: js
    })
    return scripts
  }else if (store.ggAnalyticsId && store.ggAnalyticsId.length >= 3) {
    scripts.push({
      src: `https://www.googletagmanager.com/gtag/js?id=${store.ggAnalyticsId}`,
      async: true
    })
    const js = `
       window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${store.ggAnalyticsId}');
    `
    scripts.push({
      innerHTML: js
    })
    return scripts
  }
  return scripts

}

export function googleTagManager(scripts, store) {
  if (store.googleTagId && store.googleTagId.length > 3) {
    const js = `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${store.googleTagId}');
    `
    scripts.push({
      innerHTML: js
    })
  }
  return scripts
}

export function initScripts3rd(store, path) {
  const scripts = []
  if (store.googleTagId) {
    scripts.push({src: `https://www.googletagmanager.com/gtag/js?id=${store.googleTagId}`, async: true})
  }
  return scripts
}

export function detectKeywords(alias) {
  const params = {
    keyword: alias,
    page: 1
  }
  try {
    const index = alias.lastIndexOf('-')
    if (index >= 0) {
      const num = alias.substring(index + 1, alias.length)
      if (parseInt(num)) {
        params.page = parseInt(num)
        params.keyword = alias.substring(0, index)
      }
    }
  } catch (e) {
  }
  return params
}
