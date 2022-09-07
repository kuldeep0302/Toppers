import React, { Fragment } from "react";

function Onboarding2(){
    return(
        <Fragment>
             <section
      class="before_login_page onboarding_page onboarding_page_2 remove_bg_image"
    >
      <div class="onboarding_div onboarding_div_2">
        <img src="assets/images/Logo.png" alt="" />
        <h4 class="common_head">I am a:</h4>
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
              Boy
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
              Girl
            </label>
          </div>
        </div>
        <h4 class="common_head age_head">My age is:</h4>
        <div class="outer_field">
          <select
            class="form-select select_design"
            aria-label="Default select example"
          >
            <option selected>Select your age</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
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

export default Onboarding2;