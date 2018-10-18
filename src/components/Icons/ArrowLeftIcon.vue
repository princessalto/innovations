<template>
  <svg
    :height="height"
    :width="width"
    id="ArrowLeft"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 165 434">
    <circle class="cls-1" fill="none" :stroke="primaryColor" stroke-miterlimit="10" stroke-width="10px" cx="113.5" cy="33.5" r="14.5"/><path class="cls-1" fill="none" :stroke="primaryColor" stroke-miterlimit="10" stroke-width="10px" d="M96,33H60.89A18.89,18.89,0,0,0,42,51.89V378.11A18.89,18.89,0,0,0,60.89,397H99"/><path class="cls-1" fill="none" :stroke="primaryColor" stroke-miterlimit="10" stroke-width="10px" d="M99.69,381.25v29.68a1.79,1.79,0,0,0,2.67,1.56l24.73-14a1.79,1.79,0,0,0,.08-3.07l-24.73-15.66A1.79,1.79,0,0,0,99.69,381.25Z"/>
  </svg>
</template>

<script>
export default {

  props: {
    width: {
      type: [Number, String],
      default: 180
    },
    height: {
      type: [Number, String],
      default: 180
    },
    primaryColor: {
      type: String,
      default: '#2e0069'
    }
  }
}
</script>
