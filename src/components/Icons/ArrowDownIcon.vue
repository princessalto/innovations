<template>
  <svg
    :height="height"
    :width="width"
    id="ArrowRight"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 106 163">
    <circle class="cls-1" fill="none" :stroke="primaryColor" stroke-miterlimit="10" stroke-width="10px" cx="54.7" cy="36.07" r="14.5"/><path class="cls-1" fill="none" :stroke="primaryColor" stroke-miterlimit="10" stroke-width="10px" d="M39.86,108.71l29.68.06a1.79,1.79,0,0,1,1.56,2.67L57,136.15a1.78,1.78,0,0,1-3.06.07L38.35,111.46A1.79,1.79,0,0,1,39.86,108.71Z"/><line class="cls-1" fill="none" :stroke="primaryColor" stroke-miterlimit="10" stroke-width="10px" x1="54.7" y1="47.57" x2="54.7" y2="108.57"/>
  </svg>
</template>

<script>
export default {

  props: {
    width: {
      type: [Number, String],
      default: 80
    },
    height: {
      type: [Number, String],
      default: 80
    },
    primaryColor: {
      type: String,
      default: '#2e0069'
    }
  }
}
</script>
