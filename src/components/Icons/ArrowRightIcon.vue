<template>
  <svg
    :height="height"
    :width="width"
    id="ArrowRight"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 165 434">
    <circle class="cls-1" fill="none" :stroke="primaryColor" stroke-miterlimit="10" stroke-width="10px" cx="54.5" cy="46.5" r="14.5"/><path class="cls-1" fill="none" :stroke="primaryColor" stroke-miterlimit="10" stroke-width="10px" d="M72,46h35.11A18.89,18.89,0,0,1,126,64.89V391.11A18.89,18.89,0,0,1,107.11,410H69"/><path class="cls-1" fill="none" :stroke="primaryColor" stroke-miterlimit="10" stroke-width="10px" d="M68.31,394.25v29.68a1.79,1.79,0,0,1-2.67,1.56l-24.73-14a1.79,1.79,0,0,1-.08-3.07l24.73-15.66A1.79,1.79,0,0,1,68.31,394.25Z"/>
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
