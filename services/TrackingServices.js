export default ($gtag, $store, $pin, $fb) => ({
  onViewItem({id, name, price}) {

    try {
      if($pin) {
        $pin('track', 'PageVisit', {
          line_items: [
            {
              'product_id': id,
              'product_name': name,
              'product_price': price,
              'product_category': 'Products'
            }
          ]
        })
      }
    } catch (e) {
      console.log('error', e)
    }
    try {
      if($gtag) {
        $gtag("event", "view_item", {
          currency: "USD",
          value: price,
          items: [
            {
              item_id: id,
              item_name: name,
              price,
              quantity: 1
            }
          ]
        })
      }
    } catch (e) {
      console.log('error', e)
    }

  },
  onAddToCart({id, name, price, quantity}) {
    try {
      const results = $store.getters['cart/getProductsCart']
      const subTotals = $store.getters['cart/subTotal']
      try {
        if($pin) {
          const items = results.map((item) => {
            const obj = {}
            obj.product_name = item.title
            obj.product_price = item.price
            obj.product_id = item.productId
            obj.product_quantity = item.quantity
            obj.product_category = 'Products'
            if (item.updateProductId && item.updateProductId.length > 0) {
              obj.product_id = item.updateProductId
            }
            return obj
          })
          $pin('track',
            'AddToCart',
            {
              value: subTotals,
              currency: 'USD',
              line_items: items
            })
        }
      } catch (e) {
        console.error(e)
      }
      try {
        if($gtag) {
          const items = results.map((item) => {
            const obj = {}
            obj.item_id = item.productId
            obj.item_name = item.title
            obj.price = item.price
            obj.quantity = item.quantity
            obj.item_category = 'Products'
            if (item.updateProductId && item.updateProductId.length > 0) {
              obj.item_id = item.updateProductId
            }
            return obj
          })

          $gtag("event", "add_to_cart", {
            currency: "USD",
            value: subTotals,
            items
          });
        }
      } catch (e) {
        console.error(e)
      }
    } catch (e) {
      console.error(e)
    }
  },
  initCheckout() {
    try {
      const subTotals = $store.getters['cart/subTotal']
      const results = $store.getters['cart/getProductsCart']
      const items = results.map((item) => {
        const obj = {}
        obj.item_id = item.productId
        obj.item_name = item.title
        obj.price = item.price
        obj.quantity = item.quantity
        obj.item_category = 'Products'
        if(item.updateProductId && item.updateProductId.length > 0){
          obj.item_id = item.updateProductId
        }
        return obj
      })
      $gtag("event", "begin_checkout", {
        currency: "USD",
        value: subTotals,
        items
      })

    } catch (e) {
      console.error(e)
    }

  },
  onPurchase({transaction_id: transactionId, shipping, value}) {
    try {
      const results = $store.getters['cart/getProductsCart']
      const subTotals = $store.getters['cart/subTotal']
      try {
        if($pin){
        if ($store.state.store.pinTrackId && $store.state.store.pinTrackId.length >= 3) {
          const orderId = 'ID' + (new Date()).getTime();
          const items = results.map((item) => {
            const obj = {}
            obj.product_name = item.title
            obj.product_price = item.price
            obj.product_id = item.productId
            obj.product_quantity = item.quantity
            obj.product_category = 'Products'
            if (item.updateProductId && item.updateProductId.length > 0) {
              obj.product_id = item.updateProductId
            }
            return obj
          })
          $pin('track',
            'Checkout',
            {
              order_id: orderId.toString(),
              value: subTotals,
              order_quantity: 1,
              currency: 'USD',
              line_items: items
            })
        }
        }
      } catch (e) {
        console.log('error', e)
      }

      try {
        if($gtag) {
          const itemsGg = results.map((item) => {
            const obj = {}
            obj.item_id = item.productId
            obj.item_name = item.title
            obj.price = item.price
            obj.quantity = item.quantity
            obj.item_category = 'Products'
            if (item.updateProductId && item.updateProductId.length > 0) {
              obj.item_id = item.updateProductId
            }
            return obj
          })
          $gtag("event", "purchase", {
            transaction_id: transactionId,
            value: subTotals,
            tax: 0.00,
            shipping,
            currency: "USD",
            items: itemsGg
          });
          if ($store.state.store.ggConversionId && $store.state.store.ggConversionId.length >= 3) {
            $gtag('event', 'conversion', {
              'send_to': `${$store.state.store.ggConversionId}/${$store.state.store.ggConversionLabel}`,
              'value': 1.0,
              'currency': 'USD',
              'transaction_id': transactionId
            });
          }
        }
      } catch (e) {
        console.log('error', e)
      }
    } catch (e) {
      console.error(e)
    }

  },
  onPinCheckout() {
    try {
      const results = $store.getters['cart/getProductsCart']
      const subTotals = $store.getters['cart/subTotal']
      try {
        if($pin) {
          const orderId = 'ID' + (new Date()).getTime()
          const items = results.map((item) => {
            const obj = {}
            obj.product_name = item.title
            obj.product_price = item.price
            obj.product_id = item.productId
            obj.product_quantity = item.quantity
            obj.product_category = 'Products'
            if (item.updateProductId && item.updateProductId.length > 0) {
              obj.product_id = item.updateProductId
            }
            return obj
          })
          $pin('track',
            'Checkout',
            {
              order_id: orderId.toString(),
              value: subTotals,
              order_quantity: 1,
              currency: 'USD',
              line_items: items
            })
        }
      } catch (e) {
        console.log('error', e)
      }
    } catch (e) {
      console.error(e)
    }

  },
  onInitCheckout() {
    try {
      const results = $store.getters['cart/getProductsCart']
      const subTotals = $store.getters['cart/subTotal']
      try {
        if($pin)  {
          const orderId = 'ID' + (new Date()).getTime()
          const items = results.map((item) => {
            const obj = {}
            obj.product_name = item.title
            obj.product_price = item.price
            obj.product_id = item.productId
            obj.product_quantity = item.quantity
            obj.product_category = 'Products'
            return obj
          })
          $pin('track',
            'InitiateCheckout',
            {
              order_id: orderId.toString(),
              value: subTotals,
              order_quantity: 1,
              currency: 'USD',
              line_items: items
            })
        }
      } catch (e) {
        console.log('error', e)
      }
    } catch (e) {
      console.error(e)
    }

  }
})
