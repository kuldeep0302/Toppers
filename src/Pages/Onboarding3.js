import React, { Fragment } from "react";

function Onboarding3(){
    return(
        <Fragment>
        <section
      class="before_login_page onboarding_page onboarding_page_3 remove_bg_image"
    >
      <div class="onboarding_div onboarding_div_2">
        <img src="assets/images/Logo.png" alt="" />
        <h4 class="common_head">Which class are you in?</h4>
        <div class="outer_radio outer_radio_onboard_3">
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
              Class 10 & above
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
              Class 5-9
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input form_check_input_cus"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault111"
            />
            <label
              class="form-check-label form_check_label_cus"
              for="flexRadioDefault111"
            >
              Class 1-4
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input form_check_input_cus"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1111"
            />
            <label
              class="form-check-label form_check_label_cus"
              for="flexRadioDefault1111"
            >
              KG/Prep
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

export default Onboarding3;