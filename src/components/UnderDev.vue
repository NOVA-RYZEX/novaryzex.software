<template>
  <div class="canvas">
    <div class="streak"></div>
    <div class="text-container">
      <div class="nova-ryzex-container">
        <div class="n-green letter">N</div>
        <div class="o-orange letter">O</div>
        <div class="v-pink letter">V</div>
        <div class="a-mint letter">A</div>
        <div class="r-red letter">-</div>
        <div class="y-orange letter">R</div>
        <div class="z-blue letter">Y</div>
        <div class="e-purple letter">Z</div>
        <div class="x-yellow letter">E</div>
        <div class="x-yellow letter">X</div>
      </div>
      <div class="coming-soon-container">
        <div class="a-green letter">A</div>
        <div class="r-red letter">-</div>
        <div class="s-orange letter">S</div>
        <div class="o-pink letter">O</div>
        <div class="f-mint letter">F</div>
        <div class="t-red letter">T</div>
        <div class="w-orange letter">W</div>
        <div class="a-blue letter">A</div>
        <div class="r-purple letter">R</div>
        <div class="e-yellow letter">E</div>
        <div class="r-red letter">-</div>
        <div class="e-yellow letter"> </div>
        <div class="e-yellow letter">E</div>
        <div class="n-purple letter">N</div>
        <div class="g-blue letter">G</div>
        <div class="i-orange letter">I</div>
        <div class="n-mint letter">N</div>
        <div class="e-pink letter">E</div>
        <div class="e-yellow letter">E</div>
        <div class="r-red letter">R</div>
        <div class="i-purple letter">I</div>
        <div class="n-orange letter">N</div>
        <div class="g-yellow letter">G</div>
        <div class="r-red letter">-</div>
        <div class="f-blue letter">F</div>
        <div class="i-purple letter">I</div>
        <div class="r-mint letter">R</div>
        <div class="m-red letter">M</div>
      </div>
    </div>
  </div>
  <div id="fps" ref="fps"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { gsap, TimelineMax, TweenMax, Back, Elastic, Bounce } from 'gsap';

export default defineComponent({
  name: 'UnderDev',
  setup() {
    onMounted(() => {
      const novaRyzexArray = document.querySelectorAll('.nova-ryzex-container .letter');
      const comingSoonArray = document.querySelectorAll('.coming-soon-container .letter');
      const canvas = document.querySelector('.canvas') as HTMLElement;
      const canvasWidth = canvas.offsetWidth;
      const canvasHeight = canvas.offsetHeight;
      const streak = document.querySelector('.streak') as HTMLElement;

      const mtl = new TimelineMax({ repeat: -1, yoyo: true, repeatDelay: 5 });
      mtl.add(addNovaRyzex(), 'start')
        .add(shootingStar(), 'start+=.75')
        .add(addSoon());

      function addNovaRyzex() {
        const tl = new TimelineMax();
        tl.staggerFrom(
          novaRyzexArray,
          2,
          {
            opacity: 0,
            left: 0,
            scale: 0,
            ease: Back.easeOut
          },
          0.25
        );
        return tl;
      }

      function addSoon() {
        const tl = new TimelineMax({ delay: 1 });
        tl.staggerFrom(
          comingSoonArray,
          2,
          {
            opacity: 0,
            left: 0,
            scale: 0,
            ease: Back.easeOut
          },
          0.25
        );
        return tl;
      }

      function starField() {
        const maxStars = 1000;
        for (let i = 0; i < maxStars; i++) {
          const elem = document.createElement('div');
          const size = Math.floor(Math.random() * 4 + 1);
          elem.className = 'star';
          elem.style.cssText = `
            left: ${Math.floor(Math.random() * canvasWidth)}px;
            top: ${Math.floor(Math.random() * canvasHeight)}px;
            opacity: ${Math.random()};
            width: ${size}px;
            height: ${size}px;
          `;
          canvas.appendChild(elem);
        }
        const stars = document.querySelectorAll('.star');
        const stl = new TimelineMax({ yoyo: true });
        stl.add(
          TweenMax.staggerTo(
            Array.from(stars).slice(1, maxStars / 10),
            0.5,
            {
              autoAlpha: 0,
              scale: 0,
              yoyo: true,
              repeat: -1,
              repeatDelay: 1,
              ease: Bounce.easeOut
            },
            0.15
          )
        );
      }

      function shootingStar() {
        const tl = new TimelineMax();
        const scale = 1;
        TweenMax.set(streak, {
          left: canvasWidth / 2 + 140,
          top: 0,
          scale: 0
        });
        tl.fromTo(
          streak,
          scale,
          {
            left: canvasWidth / 2 + 300,
            top: -150,
            scale: scale,
            autoAlpha: 1,
            ease: 'slow'
          },
          {
            left: '-=750',
            top: '+=750',
            scale: 0,
            autoAlpha: 0,
            ease: 'slow'
          }
        );
        return tl;
      }

      starField();

    });

  }
});
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300');

$mainFont: 'Open Sans', sans-serif;

*,
*::before,
*::after {
  box-sizing: border-box;
}

body,
html {
  background: #111;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.canvas {
  width: 100%;
  height: 100%;
  clear: both;
  overflow: hidden;
  z-index: -1;
}

.star {
  position: absolute;
  opacity: 1;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #00f6ff;
  box-shadow: 0 0 5px rgba(0, 246, 255, .75);
}

.streak {
  width: 10px;
  height: 150px;
  background: #fff;
  border-radius: 100%;
  position: relative;
  top: 100px;
  left: 100px;
  box-shadow: 0 0 25px rgba(255, 255, 255, .75);
  transform: rotate(-135deg);
  background: linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.75) 25%, rgba(255, 255, 255, 0) 100%);
}

.nova-ryzex-container,
.coming-soon-container {
  position: relative;
  width: auto;
  /* Adjusted to auto to allow resizing */
  height: 97px;
  /* Centered horizontally with auto margin */
  display: flex;
  justify-content: center;
  /* Center align horizontally */
  align-items: center;
  /* Center align vertically */

  .letter {
    position: relative;
    /* Adjusted to relative */
    font-size: 5vw;
    /* Responsive font size based on viewport width */
    font-weight: bold;
    font-family: $mainFont;
    color: #fff;
  }

  .n-green {
    color: green;
  }

  .o-orange {
    color: orange;
  }

  .v-pink {
    color: pink;
  }

  .a-mint {
    color: mintcream;
  }

  .r-red {
    color: red;
  }

  .y-orange {
    color: orange;
  }

  .z-blue {
    color: blue;
  }

  .e-purple {
    color: purple;
  }

  .x-yellow {
    color: yellow;
  }

  .a-green {
    color: green;
  }

  .s-orange {
    color: orange;
  }

  .o-pink {
    color: pink;
  }

  .f-mint {
    color: mintcream;
  }

  .t-red {
    color: red;
  }

  .w-orange {
    color: orange;
  }

  .a-blue {
    color: blue;
  }

  .r-purple {
    color: purple;
  }

  .e-yellow {
    color: yellow;
  }

  .n-purple {
    color: purple;
  }

  .g-blue {
    color: blue;
  }

  .i-orange {
    color: orange;
  }

  .n-mint {
    color: mintcream;
  }

  .e-pink {
    color: pink;
  }

  .r-red {
    color: red;
  }

  .f-blue {
    color: blue;
  }

  .i-purple {
    color: purple;
  }

  .r-mint {
    color: mintcream;
  }

  .m-red {
    color: red;
  }
}
</style>
