<script>
export default {
  name: 'Error',
  props: {
    errors: Object,
    name: String,
    classes: String || null,
    limit: Number || null
  },
  data() {
    return {
      visible: false,
      messages: [],
    };
  },
  watch: {
    /**
     * Update the error list.
     *
     * @param {Object} first
     * @return {void}
     */
    errors(first) {
      this.setErrors(first);
    },
  },
  mounted() {
    /** set error list. */
    this.setErrors(this.errors);
  },
  methods: {
    /**
     * Set error list.
     *
     * @param {Object} list
     * @returns {void}
     */
    setErrors (list) {
      this.messages = list[this.name];
      this.visible  = this.messages && this.messages.length > 0;
    }
  }
};
</script>

<template>
  <div :class="classes" v-if="visible">
    <p v-for="(message, key) in messages.slice(0, limit)" :key="key">{{ message }}</p>
  </div>
</template>
