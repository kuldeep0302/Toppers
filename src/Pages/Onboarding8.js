import React, { Fragment } from "react";

function Onboarding8(){
    return(
        <Fragment>
            <section
      class="before_login_page onboarding_page onboarding_page_8 remove_bg_image"
    >
      <div class="onboarding_div onboarding_div_1">
        <img src="assets/images/Logo.png" alt="" />
        <h4 class="common_head">Select your Industry</h4>
        <p class="sub_head_onboard">Choose your best field</p>
        <ul class="city_icon">
          <li class="active_city">
            <img src="assets/images/doctor.png" alt="" /> Doctor
          </li>
          <li><img src="assets/images/avaition.png" alt="" /> Aviation</li>
          <li><img src="assets/images/electrial.png" alt="" /> Electrical</li>
          <li><img src="assets/images/constr.png" alt="" /> Construction</li>
        </ul>
        <div class="outer_field">
          <select class="form-select" aria-label="Default select example">
            <option selected>Select industry</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <button type="button" class="btn btn-primary cus_button">Next</button>
      </div>
    </section>

    <script src="js/bootstrap.bundle.min.js"></script>
        </Fragment>
    )
}

export default Onboarding8;