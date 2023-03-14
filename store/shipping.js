import { getField, updateField } from 'vuex-map-fields'
import { validateEmail, isEmpty } from "@/common/AppUtils.js";
export const state = () => ({
  email: '',
  fristName: '',
  lastName: '',
  phoneNumber: '',
  address: '',
  address2: '',
  region: '',
  city: '',
  countryCode: 'US',
  zipCode: '',
  shippingId: 0
})


export const mutations = {
  updateField
}
export const getters = {
  getField,
  getShippingAddress: (state, getters, rootState, rootGetters) => {
    const coun = rootGetters["countrydata/getCountryByCode"](state.countryCode);
    if (coun) {
      return {
        email: state.email,
        fullName: state.fristName + ' ' + state.lastName,
        phoneNumber: state.phoneNumber,
        address: state.address,
        city: state.city,
        country: {
          code: coun.code,
          name: coun.name
        },
        region: state.region,
        zipCode: state.zipCode,
        shippingId: state.shippingId
      }
    } else {
      return {}
    }
  },
  isValid: (state) => {
    if (
      validateEmail(state.email) &&
      !isEmpty(state.fristName) &&
      !isEmpty(state.lastName) &&
      !isEmpty(state.address) &&
      !isEmpty(state.region) &&
      !isEmpty(state.city) &&
      !isEmpty(state.zipCode) &&
      !isEmpty(state.countryCode)
    ) {
      return true;
    }
    return false;
  }
}
