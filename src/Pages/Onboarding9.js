import React, { Fragment } from "react";

function Onboarding9(){
    return(
        <Fragment>
             <section
      class="before_login_page onboarding_page onboarding_athlete remove_bg_image"
    >
      <div class="onboarding_div onboarding_div_1">
        <img src="assets/images/Logo.png" alt="" />
        <h4 class="common_head">Which sports do you play?</h4>
        <p class="sub_head_onboard">You can select multiple options</p>
        <ul class="city_icon">
          <li class="active_city">
            <img src="assets/images/footbal.png" alt="" /> Football
          </li>
          <li><img src="assets/images/cricket.png" alt="" /> Cricket</li>
          <li><img src="assets/images/rugby.png" alt="" /> Rugby</li>
          <li><img src="assets/images/basket.png" alt="" /> Basketball</li>
        </ul>
        <div class="outer_field">
          <select class="form-select" aria-label="Default select example">
            <option selected>Select your sport</option>
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

export default Onboarding9;