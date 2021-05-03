<template>
  <footer class="text-gray-200 p-4">
    <div class="footer-section-1 flex flex-row flex-wrap flex-shrink-0 p-4">
      <div class="footer-col col-1 md:mx-2 ">
        <div class="nav flex flex-col">
          <p class="font-bold text-lg my-2">Calender</p>
          <router-link to="/" class="my-2 hover:text-gray-300"
            ><a>Gregorian</a></router-link
          >
          <router-link to="/" class="my-2 hover:text-gray-300"
            ><a>Hijri</a></router-link
          >
          <router-link to="/" class="my-2 hover:text-gray-300"
            ><a>Ramadan</a></router-link
          >
        </div>
      </div>
      <div class="footer-col col-2  md:mx-2 flex flex-col">
        <p class="font-bold text-lg my-2">Site</p>
        <router-link to="/" class="my-2 hover:text-gray-300"
          ><a>Home</a></router-link
        >
        <router-link to="/" class="my-2 hover:text-gray-300"
          ><a>Prayer Timings</a></router-link
        >
        <router-link to="/" class="my-2 hover:text-gray-300"
          ><a>Quran</a></router-link
        >
      </div>
      <div class="footer-col col-3  md:mx-2 flex flex-col">
        <p class="font-bold text-lg my-2">About</p>
        <router-link to="/" class="my-2 hover:text-gray-300"
          ><a>Contact</a></router-link
        >
        <router-link to="/" class="my-2 hover:text-gray-300"
          ><a>Portfolio</a></router-link
        >
        <router-link to="/" class="my-2 hover:text-gray-300"
          ><a>About</a></router-link
        >
      </div>
      <div class="footer-col col-4  md:mx-2 flex flex-col">
        <p class="font-bold text-lg my-2">Extra</p>
        <router-link to="/" class="my-2 hover:text-gray-300"
          ><a>Resources</a></router-link
        >
        <router-link to="/" class="my-2 hover:text-gray-300"
          ><a>Apis</a></router-link
        >
        <router-link to="/" class="my-2 hover:text-gray-300"
          ><a>Guides</a></router-link
        >
      </div>
      <div class="footer-col-logo col-5  md:mx-2 flex flex-col">
        <img src="../assets/images/logo.png" />
      </div>
    </div>
    <hr class="h-1 my-4" />
    <div
      class="footer-section-2 p-4 flex flex-row justify-between items-center"
    >
      <div class="newsletter-text">
        <p class="text-lg font-bold leading-tight tracking-wide">
          Subscribe to our newletter
        </p>
        <p class="text-base">
          latest news , articles , and resources , sent to your inbox weekly
        </p>
      </div>
      <div class="newsletter-form">
        <input
          type="text"
          class=" w-80 rounded-md py-2 outline-none border focus:border-gray-600 text-gray-800 px-2"
          placeholder="Email"
        />
        <button class="px-4 mx-2 bg-blue-500 hover:bg-blue-600 py-2 rounded-md">
          Subscribe
        </button>
      </div>
    </div>
    <hr class="h-1 my-4" />
    <div
      class="footer-section-3 p-4 flex flex-row justify-between items-center"
    >
      <div class="copyrights ">
        <div
          class="omair inline font-bold text-left leading-tight tracking-wide text-base"
        >
          @OmairMedia
        </div>
        <div class="rights inline">
          All Right Reserved
        </div>
      </div>
      <div class="social-icons">
        <a
          href="https://www.facebook.com/omair.sohail.961/"
          class="mx-2"
          target="_blank"
        >
          <i
            class="fab fa-facebook fa-1x fill-current text-blue-500 transform scale-100 hover:scale-110"
          ></i>
        </a>
        <!-- <a href="" class="mx-2" target="_blank">
          <i
            class="fab fa-google-plus-g fa-1x fill-current text-red-500 transform scale-100 hover:scale-110"
          ></i>
        </a> -->
        <a href="https://twitter.com/OmairSohail2" class="mx-2" target="_blank">
          <i
            class="fab fa-twitter fa-1x fill-current text-blue-400 transform scale-100 hover:scale-110"
          ></i>
        </a>
        <a
          href="https://www.instagram.com/omairsohail/"
          class="mx-2"
          target="_blank"
        >
          <i
            class="fab fa-instagram fa-1x fill-current bg-gradient-to-t from-red-500 to-purple-500 rounded-lg transform scale-100 hover:scale-110"
          ></i>
        </a>
        <a
          href="https://www.linkedin.com/in/omair-sohail-810764202/"
          class="mx-2"
          target="_blank"
        >
          <i
            class="fab fa-linkedin-in fa-1x fill-current text-blue-600 transform scale-100 hover:scale-110"
          ></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "footerElement",
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  footer {
    background-color: #252f3f;
  }
  .footer-col {
    min-width: 200px;
  }
  .footer-col-logo {
    min-width: 200px;
    width: 200px;
    max-width: 400px;
  }
</style>
