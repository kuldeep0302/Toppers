import React, { Fragment } from "react";

function Onboarding6(){
    return(
        <Fragment>
         <section
      class="before_login_page onboarding_page onboarding_page_6 remove_bg_image"
    >
      <div class="onboarding_div onboarding_div_2 onboarding_div_6">
        <img src="assets/images/Logo.png" alt="" />
        <h4 class="common_head">I am a:</h4>
        <p class="sub_head_onboard">Select one that applies to you</p>
        <div class="outer_radio">
          <div class="form-check">
            <input
              class="form-check-input form_check_input_cus"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              checked
            />
            <label
              class="form-check-label form_check_label_cus"
              for="flexRadioDefault1"
            >
              Father
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input form_check_input_cus"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault11"
            />
            <label
              class="form-check-label form_check_label_cus"
              for="flexRadioDefault11"
            >
              Mother
            </label>
          </div>
        </div>

        <div class="outer_btns">
          <a href="" class="back_btn">Back</a>
          <a href="" class="next_btn">Next</a>
        </div>
      </div>
    </section>

    <script src="js/bootstrap.bundle.min.js"></script>
        </Fragment>
    )
}

export default Onboarding6;