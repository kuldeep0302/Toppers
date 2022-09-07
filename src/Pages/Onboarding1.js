import React, { Fragment } from "react";


function Onboarding1(){
    return(
        <Fragment>
            <section
      class="before_login_page onboarding_page onboarding_page_1 remove_bg_image"
    >
      <div class="onboarding_div onboarding_div_1">
        <img src="assets/images/Logo.png" alt="" />
        <h4 class="common_head">Log in your Account</h4>
        <ul class="city_icon">
          <li class="active_city">
            <img src="assets/images/gate-of-india-2.png" alt="" /> Mumbai
          </li>
          <li><img src="assets/images/gate-of-india.png" alt="" /> Delhi</li>
          <li><img src="assets/images/chandigarh.png" alt="" /> Chandigarh</li>
          <li><img src="assets/images/hyderabad-charminar.png" alt="" /> Hyderabad</li>
        </ul>
        <div class="outer_field">
          <select class="form-select" aria-label="Default select example">
            <option selected>Select other cities</option>
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

export default Onboarding1;