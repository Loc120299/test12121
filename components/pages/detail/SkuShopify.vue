<template>
  <div class="flex flex-col gap-y-5">
    <div v-if="skus1">
      <div>
        <p class="option-name my-1"><b>{{ skus1.name }}:</b> <span class="option-value">{{ option1 }} </span></p>
        <div v-for="(items, i) in _.chunk(skus1.values, 4)" :key="i" class="flex flex-row">
<!--          <div v-if="skus1.name === 'Color'">-->
<!--            <div v-for="(value, j) in items" :key="j" :class="{-->
<!--              'btn-sp-active': option1 === value,-->
<!--            }" class="btn-sp-variant p-5 rounded-full border-2 border-gray-400 group relative inline-block"-->
<!--              :style="{ 'background-color': value.toLowerCase().replace(/ +/g, '') }" @click="onClickSku(value, 0)">-->
<!--              <div-->
<!--                class="opacity-0 bg-gray-700 text-white text-center text-xs py-2.5 absolute z-10 group-hover:opacity-100 bottom-full -left-9 px-4 pointer-events-none w-28 mb-3">-->
<!--                {{ value }}-->
<!--                <svg class="absolute text-gray-700 h-4 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255"-->
<!--                  xml:space="preserve">-->
<!--                  <polygon class="fill-current" points="0,0 127.5,127.5 255,0" />-->
<!--                </svg>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
          <div v-for="(value, j) in items" :key="j" :class="{
            'btn-sp-active': option1 === value,
          }" class="btn-sp-variant" @click="onClickSku(value, 0)">
            {{ value }}
          </div>
        </div>
      </div>
    </div>
    <div v-if="skus2">
      <div>
        <p class="option-name my-1"><b>{{ skus2.name }}:</b> <span class="option-value">{{ option2 }}</span></p>
        <div v-for="(items, i) in _.chunk(
          skus2.values,
          skus2.name === 'Size' ? 5 : 4
        )" :key="i" class="flex flex-row">
          <div v-if="skus2.name === 'Color'">
            <div v-for="(value, j) in items" :key="j" :class="{
              'btn-sp-active': option2 === value,
            }" class="btn-sp-variant p-5 rounded-full border-2 border-gray-400 group relative inline-block"
              :style="{ 'background-color': value.toLowerCase().replace(/ +/g, '') }" @click="onClickSku(value, 1)">
              <div
                class="opacity-0 bg-gray-700 text-white text-center text-xs py-2.5 absolute z-10 group-hover:opacity-100 bottom-full -left-9 px-4 pointer-events-none w-28 mb-3">
                {{ value }}
                <svg class="absolute text-gray-700 h-4 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255"
                  xml:space="preserve">
                  <polygon class="fill-current" points="0,0 127.5,127.5 255,0" />
                </svg>
              </div>
            </div>
          </div>
          <div v-for="(value, j) in items" v-else :key="j" :class="{
            'btn-sp-active': option2 === value,
          }" class="btn-sp-variant" @click="onClickSku(value, 1)">
            {{ value }}
          </div>
        </div>
      </div>
    </div>
    <div v-if="skus3">
      <div>
        <p class="option-name my-1"><b>{{ skus3.name }}:</b><span class="option-value"> {{ option3 }} </span></p>
        <div v-for="(items, i) in _.chunk(skus3.values, 4)" :key="i" class="flex flex-row">
          <div v-if="skus3.name === 'Color'">
            <div v-for="(value, j) in items" :key="j" :class="{
              'btn-sp-active': option3 === value,
            }" class="btn-sp-variant p-5 rounded-full border-2 border-gray-400 group relative inline-block"
              :style="{ 'background-color': value.toLowerCase().replace(/ +/g, '') }" @click="onClickSku(value, 2)">
              <div
                class="opacity-0 bg-gray-700 text-white text-center text-xs py-2.5 absolute z-10 group-hover:opacity-100 bottom-full -left-9 px-4 pointer-events-none w-28 mb-3">
                {{ value }}
                <svg class="absolute text-gray-700 h-4 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255"
                  xml:space="preserve">
                  <polygon class="fill-current" points="0,0 127.5,127.5 255,0" />
                </svg>
              </div>
            </div>
          </div>
          <div v-for="(value, j) in items" v-else :key="j" :class="{
            'btn-sp-active': option3 === value,
          }" class="btn-sp-variant" @click="onClickSku(value, 2)">
            {{ value }}
          </div>
        </div>
      </div>
    </div>
    <div v-if="skus4">
      <div>
        <p class="option-name my-1"><b>{{ skus4.name }}:</b> <span class="option-value">{{ option4 }} </span></p>
        <div v-for="(items, i) in _.chunk(skus4.values, 4)" :key="i" class="flex flex-row">
          <div v-if="skus4.name === 'Color'">
            <div v-for="(value, j) in items" :key="j" :class="{
              'btn-sp-active': option4 === value,
            }" class="btn-sp-variant p-5 rounded-full border-2 border-gray-400 group relative inline-block"
              :style="{ 'background-color': value.toLowerCase().replace(/ +/g, '') }" @click="onClickSku(value, 3)">
              <div
                class="opacity-0 bg-gray-700 text-white text-center text-xs py-2.5 absolute z-10 group-hover:opacity-100 bottom-full -left-9 px-4 pointer-events-none w-28 mb-3">
                {{ value }}
                <svg class="absolute text-gray-700 h-4 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255"
                  xml:space="preserve">
                  <polygon class="fill-current" points="0,0 127.5,127.5 255,0" />
                </svg>
              </div>
            </div>
          </div>
          <div v-for="(value, j) in items" v-else :key="j" :class="{
            'btn-sp-active': option4 === value,
          }" class="btn-sp-variant" @click="onClickSku(value, 3)">
            {{ value }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    selectVariant:{
      type: Object,
      default: () => {}
    },
    options: {
      type: Array,
      default() {
        return [];
      },
    },
    variants: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      skuOptions: [],
      option1: "",
      option2: "",
      option3: "",
      option4: "",
    };
  },
  computed: {
    skus1() {
      if (this.options.length > 0) {
        const values = [];
        this._.forEach(this.variants, (variant) => {
          values.push(variant.options[0]);
        });

        const sku = {
          name: this.options[0],
          values: this._.uniq(values),
        };
        return sku;
      }
      return null;
    },
    skus2() {
      if (this.options.length > 1) {
        const values = [];
        this._.forEach(this.variants, (variant) => {
          if (this.option1 === variant.options[0]) {
            values.push(variant.options[1]);
          }
        });
        const sku = {
          name: this.options[1],
          values: this._.uniq(values)
        };
        if (this.option2) {
          if (!this.isExited(values, this.option2)) {
            // this.option2 = values[0];
            this.onChangeVariant();
          }
        }
        return sku;
      }
      return null;
    },
    skus3() {
      if (this.options.length > 2) {
        const values = [];
        this._.forEach(this.variants, (variant) => {
          if (
            this.option1 === variant.options[0] &&
            this.option2 === variant.options[1]
          ) {
            values.push(variant.options[2]);
          }
        });
        const sku = {
          name: this.options[2],
          values: this._.uniq(values)
        };
        if (this.option3) {
          if (!this.isExited(values, this.option3)) {
            // this.option3 = values[0];
            this.onChangeVariant();
          }
        }
        return sku;
      }
      return null;
    },
    skus4() {
      if (this.options.length > 3) {
        const values = [];
        this._.forEach(this.variants, (variant) => {
          if (
            this.option1 === variant.options[0] &&
            this.option2 === variant.options[1] &&
            this.option3 === variant.options[2]
          ) {
            values.push(variant.options[3]);
          }
        });
        const sku = {
          name: this.options[3],
          values: this._.uniq(values)
        };
        if (this.option4) {
          if (!this.isExited(values, this.option4)) {
            // this.option4 = values[0];
            this.onChangeVariant();
          }
        }
        return sku;
      }
      return null;
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    isExited(values, option) {
      const index = this._.findIndex(values, (v) => {
        return option === v;
      });
      return index >= 0;
    },
    onChangeVariant() {
      const selectOptions = [];
      if (this.options.length > 0) {
        selectOptions.push(this.option1);
      }
      if (this.options.length > 1) {
        selectOptions.push(this.option2);
      }
      if (this.options.length > 2) {
        selectOptions.push(this.option3);
      }
      if (this.options.length > 3) {
        selectOptions.push(this.option4);
      }
      const selectVariant = this._.find(this.variants, (variant) => {
        return this._.isEqual(selectOptions, variant.options);
      });
      if (selectVariant) {
        this.$emit("onChangeVariant", selectVariant);
      }
    },
    init() {
      if (this.variants.length > 0) {
        const variant = this.variants[0];
        if (variant && variant.options) {
          const ops = variant.options;
          if (ops.length > 0) {
            this.option1 = ops[0];
          }
          if (ops.length > 1) {
            this.option2 = ops[1];
          }
          if (ops.length > 2) {
            this.option3 = ops[2];
          }
          if (ops.length > 3) {
            this.option4 = ops[3];
          }
        }
      }
    },
    onClickSku(value, index) {
      if (index === 0) {
        this.option1 = value;
      } else if (index === 1) {
        this.option2 = value;
      } else if (index === 2) {
        this.option3 = value;
      } else if (index === 3) {
        this.option4 = value;
      }
      this.onChangeVariant();
    },
  },
};
</script>
<style lang="scss">

</style>
