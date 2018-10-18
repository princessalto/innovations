<template>
  <body onload="typewriter();">
    <particles class="error__page--gradient">
      <div class="wrapper">
        <div class="terminal">
          <div class="terminal__head">
            <div class="head__circle head__circle--close"></div>
            <div class="head__circle head__circle--turn"></div>
            <div class="head__circle head__circle--expand"></div>
          </div>
          <div class="terminal__text" id="typedtext"></div>
        </div>
      </div>
    </particles>
  </body>
</template>

<style lang="stylus" scoped>
  .error--container {
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    display: block;
  }

  //terminalWindow
  .wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .terminal{
    width: 90%;
    font-family: 'Poppins', sans-serif;
    max-width: 900px;
    height: 40%;
    min-height: 400px;
    background: #263238;
    border-radius: 7px 7px;
    transition: box-shadow .3s linear;
    backdrop-filter: blur(6px);
    z-index: 999;
  }

  .terminal:active {
    cursor:move;
    box-shadow:0px 2px 6px 0px rgba(0,0,0,0.05);
  }

  .terminal__head {
    width: 100%;
    height: 1.875rem;
    background: #E0E8F0;
    border-radius: 7px 7px 0 0;
    display: flex;
    justify-content: start;
    align-items: center;
  }

  .terminal__text__span {
    font-size: 20px;
  }

  .terminal__text__span:before {
    content: '$ ';
    color: #52a563;
    margin-right: 10px;
  }

  .head__circle {
    position: relative;
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-left: 4px;
    font-size: 0;
    font-weight: 700;
    border-radius: 10px;
  }

  .head__circle--close {
    background: #3BB662;
    margin-left: 7px;
  }

  .head__circle--turn {
    background: #E5C30F;
  }

  .head__circle--expand {
    background: #E75448;
  }
</style>

<script>
export default {
  name: 'Error404',

  mounted () {
    this.typewriter()
  },

  methods: {
    typewriter () {
      /* eslint-disable */
      var aText = new Array(
        "<span class='terminal__text__span'>The page you're looking for doesn't exist.</span>",
        "<span class='terminal__text__span'>Go back to <a href='/'>Home</a> page instead.",
      );
      var iSpeed = 50;
      var iIndex = 0;
      var iArrLength = aText[0].length;
      var iScrollAt = 20;

      var iTextPos = 0;
      var sContents = '';
      var iRow;

      function typewriter() {
        sContents =  ' ';
        iRow = Math.max(0, iIndex-iScrollAt);
        var destination = document.getElementById("typedtext");

        while ( iRow < iIndex ) {
          sContents += aText[iRow++] + '<br />';
        }
        destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
        if ( iTextPos++ == iArrLength ) {
          iTextPos = 0;
          iIndex++;
          if ( iIndex != aText.length ) {
            iArrLength = aText[iIndex].length;
            setTimeout("typewriter()", 100);
          }
        }
        else {
          setTimeout("typewriter()", iSpeed);
        }
      }
    }
  }
}
</script>
