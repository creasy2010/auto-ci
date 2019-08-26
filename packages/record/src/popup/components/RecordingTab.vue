<template>

</template>
<script>
  export default {
    name: 'RecordingTab',
    props: {
      isRecording: { type: Boolean, default: false },
      liveEvents: { type: Array, default: () => { return [] } }
    },
    methods: {
      parseEventValue (event) {
        if (event.action === 'viewport*') return `width: ${event.value.width}, height: ${event.value.height}`
        if (event.action === 'goto*') return event.href
        if (event.action === 'navigation*') return ''
      }
    }
  }
</script>
<style lang="scss" scoped>
</style>
