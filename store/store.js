export const state = () => ({
  topBarText: '',
  storeName: '',
  email: '',
  phone: '',
  address: '',
  logo: '',
  iam: '',
  bingSiteVerification: '',
  googleSiteVerification: '',
  googleTagId: '',
  stripePublicKey: '',
  paypalEnv: '',
  paypalClientId: '',
  costOverShipping: 0,
  ggConversionId: '',
  ggConversionLabel: '',
  adRollAdvId: '',
  adRollPixId: '',
  isCustomPayment: false,
  customPaymentDomain: '',
  customMeta: '',
  customDescProduct: '',
  domain: '',
  banner: '',
  category1: '',
  category2: '',
  category3: '',
  category4: '',
  category5: '',
  category6: '',
  trendingKeywords: '',
  menus: '',
  saleOffTabs: '',
  pinTrackId: '',
  ggAnalyticsId: '',
  pinUsername: '',
  favicon: '',
  customFeatureProduct: '',
  linkCustomCss: '',
  trustDomain: ''

})
export const mutations = {
  saveStoreConfig(
    state,
    {
      topBarText,
      storeName,
      email,
      phone,
      address,
      logo,
      iam,
      bingSiteVerification,
      googleSiteVerification,
      googleTagId,
      stripePublicKey,
      paypalEnv,
      paypalClientId,
      costOverShipping,
      ggConversionId,
      ggConversionLabel,
      adRollAdvId,
      adRollPixId,
      isCustomPayment,
      customPaymentDomain,
      customMeta,
      customDescProduct,
      domain,
      banner,
      category1,
      category2,
      category3,
      category4,
      category5,
      category6,
      trendingKeywords,
      menus,
      saleOffTabs,
      pinTrackId,
      ggAnalyticsId,
      pinUsername,
      favicon,
      linkCustomCss,
      customFeatureProduct,
      isFakeCheckout,
      trustDomainPayment
    }
  ) {
    state.topBarText = topBarText
    state.storeName = storeName
    state.email = email
    state.phone = phone
    state.address = address
    state.logo = logo
    state.iam = iam
    state.bingSiteVerification = bingSiteVerification
    state.googleSiteVerification = googleSiteVerification
    state.googleTagId = googleTagId
    state.stripePublicKey = stripePublicKey
    state.paypalEnv = paypalEnv
    state.paypalClientId = paypalClientId
    state.costOverShipping = costOverShipping
    state.ggConversionId = ggConversionId
    state.ggConversionLabel = ggConversionLabel
    state.adRollAdvId = adRollAdvId
    state.adRollPixId = adRollPixId
    state.isCustomPayment = isCustomPayment
    state.customPaymentDomain = customPaymentDomain
    state.customMeta = customMeta
    state.customDescProduct = customDescProduct
    state.domain = domain
    state.banner = banner
    state.category1 = category1
    state.category2 = category2
    state.category3 = category3
    state.category4 = category4
    state.category5 = category5
    state.category6 = category6
    state.trendingKeywords = trendingKeywords
    state.menus = menus
    state.saleOffTabs = saleOffTabs
    state.pinTrackId = pinTrackId
    state.ggAnalyticsId = ggAnalyticsId
    state.pinUsername = pinUsername
    state.favicon = favicon
    state.customFeatureProduct = customFeatureProduct
    state.linkCustomCss = linkCustomCss
    state.isFakeCheckout = isFakeCheckout
    state.trustDomain= trustDomainPayment
  }
}

export const getters = {
  getCategories: (state) => {
    const categories = []
    categories.push(state.category1)
    categories.push(state.category2)
    categories.push(state.category3)
    categories.push(state.category4)
    categories.push(state.category5)
    categories.push(state.category6)
    return categories
  }
}
