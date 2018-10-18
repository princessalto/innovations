<template>
  <svg
    :height="height"
    :width="width"
    viewBox="0 0 600 600"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xmlns="http://www.w3.org/2000/svg"
    >
    <defs>
    <linearGradient id="linear-gradient" x1="492.19" y1="41.83" x2="-91.56" y2="542.49" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="red"/><stop offset="0.12" stop-color="#f20017"/><stop offset="0.37" stop-color="#d10054"/><stop offset="0.73" stop-color="#9c00b3"/><stop offset="1" stop-color="#7200ff"/></linearGradient><linearGradient id="linear-gradient-2" x1="175.35" y1="92.82" x2="105.18" y2="804.06" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#7c6fd6"/><stop offset="0.26" stop-color="#a097e1"/><stop offset="0.76" stop-color="#e4e2f7"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="linear-gradient-3" x1="192.38" y1="208.67" x2="59.62" y2="642.99" xlink:href="#linear-gradient-2"/></defs><title>innov-logo</title><g class="cls-1" isolation="isolate"><g id="Layer_1" data-name="Layer 1"><path class="cls-2" fill="url(#linear-gradient)" d="M513.8,214,178,22.5c-1.18-.67-2.37-1.32-3.56-1.94C91-22.85,7.26,79.52,64.49,154.18l81.57,106.43a65.09,65.09,0,0,1,0,79.18L64.49,446.22c-57.23,74.66,26.49,177,110,133.62,1.19-.62,2.38-1.27,3.56-1.94L513.8,386.39C580.56,348.32,580.56,252.08,513.8,214Z"/></g><g id="Layer_2" data-name="Layer 2"><path class="cls-3" mix-blend-mode="multiply" fill="url(#linear-gradient-2)" d="M146.06,260.61a65.09,65.09,0,0,1,0,79.18L64.49,446.22c-57.23,74.66,26.49,177,110,133.62,1.19-.62,2.38-1.27,3.56-1.94C309.44,430.5,146.06,260.61,146.06,260.61Z"/></g><g id="Layer_3" data-name="Layer 3"><path class="cls-4" fill="url(#linear-gradient-3)" mix-blend-mode="multiply" d="M103.27,584.3c163.94-190.37,42.79-323.69,42.79-323.69a65.09,65.09,0,0,1,0,79.18L64.49,446.22C24.37,498.55,53.51,564.49,103.27,584.3Z"/></g></g>
    </svg>
</template>

<script>
export default {
  name: 'LogoIcon',
  props: {
    width: {
      type: [Number, String],
      default: 40
    },
    height: {
      type: [Number, String],
      default: 40
    },
    iconColor: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>
