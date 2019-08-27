<template>
    <div class="bcgrd-light main-heade main_div">
    <!-- <div class="bcgrd-light main-heade main_div">
        <div style="width: 40%;" >
            <div class="mrgn_bttm"><u>発売号</u></div>
            <div class="mrgn_bttm left_contain" style="">２０１９年０４月１２日号</div>
            <div class="mrgn_bttm bg-light left_contain " style="height: 250px;">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat no...
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat no...
            </div>
            <div>
                <nav class="navbar navbar-light bcgrd-light" style="margin-left: 1%;">
                    <b-button class="btn btn-sm size_button" type="button" style="width: 10%;">次</b-button>
                </nav>
            </div>
        </div>
        <div class="image">
            <b-img src="https://picsum.photos/1024/400/?image=41" fluid alt="Responsive image"></b-img>
        </div>
        <div> -->
        <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="4000"
            controls
            indicators
            img-width="1024"
            img-height="300"
            style="color: black;"
        >
        <!-- Text slides with image -->
        <b-carousel-slide class="image">
            <div style="width:65%;" >
                <div class="mrgn_bttm"><u>発売号</u></div>
                <div class="mrgn_bttm left_contain" style="">２０１９年０４月１２日号</div>
                <div class="mrgn_bttm bg-light left_contain " style="height: 250px;">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat no...
                </div>
                <div>
                    <nav class="navbar navbar-light bcgrd-light" style="margin-left: 1%;">
                        <b-button class="btn btn-sm size_button" type="button" style="width: 10%;">次</b-button>
                    </nav>
                </div>
            </div>
            <img
                style="margin-left: 67%"
                slot="img"
                class="d-block img-fluid w-100 image"
                src="https://picsum.photos/1024/480/?image=55"
                alt="image slot"
            >     
        </b-carousel-slide>

        <b-carousel-slide class="image">
            <div style="width:65%;" >
                <div class="mrgn_bttm"><u>発売号</u></div>
                <div class="mrgn_bttm left_contain" style="">２０１９年０４月１２日号</div>
                <div class="mrgn_bttm bg-light left_contain " style="height: 250px;">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat no...
                </div>
                <div>
                    <nav class="navbar navbar-light bcgrd-light" style="margin-left: 1%;">
                        <b-button class="btn btn-sm size_button" type="button" style="width: 10%;">次</b-button>
                    </nav>
                </div>
            </div>
            <img
                style="margin-left: 67%"
                slot="img"
                class="d-block img-fluid w-100 image"
                src="https://picsum.photos/1024/480/?image=55"
                alt="image slot"
            >     
        </b-carousel-slide>

        </b-carousel>
    </div>
</template>
<style lang="scss">
    @import './../assets/scss/release.scss';
</style>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
    }
  }
</script>
