import React, { Fragment } from "react";
import {Link} from 'react-router-dom';

function Login(){
    return(
        <Fragment>
            <section class="before_login_page login_page remove_bg_image">
      <div class="form_div text-center">
        <img src="assets/images/Logo.png" alt="" />
        <h4 class="common_head">Log in your Account</h4>
        <ol class="login_with">
          <li>
            <a href=""><img src="assets/images/google.png" alt="" /></a>
          </li>
          <li>
            <a href=""><img src="assets/images/facebook.png" alt="" /></a>
          </li>
          <li>
            <a href=""><img src="assets/images/linkedin.png" alt="" /></a>
          </li>
        </ol>
        <p class="sub_line">or use your email for registration</p>
        <form action="">
          <div class="outer_field">
            <input
              type="email"
              class="form-control cus_form_control"
              id="exampleInputEmail1"
              placeholder="Email or Mobile Number"
            />
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.07413 1.33337H13.926C14.7408 1.33337 15.4075 2.08337 15.4075 3.00004V13C15.4075 13.9167 14.7408 14.6667 13.926 14.6667H2.07413C1.25932 14.6667 0.592651 13.9167 0.592651 13V3.00004C0.592651 2.08337 1.25932 1.33337 2.07413 1.33337Z"
                stroke="#9A9A9A"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.4075 3L8.00006 8.83333L0.592651 3"
                stroke="#9A9A9A"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div class="outer_field">
            <input
              type="email"
              class="form-control cus_form_control"
              id="exampleInputEmail1"
              placeholder="Password"
            />
            <svg
              width="16"
              height="18"
              viewBox="0 0 16 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.8333 8.16663H2.16667C1.24619 8.16663 0.5 8.91282 0.5 9.83329V15.6666C0.5 16.5871 1.24619 17.3333 2.16667 17.3333H13.8333C14.7538 17.3333 15.5 16.5871 15.5 15.6666V9.83329C15.5 8.91282 14.7538 8.16663 13.8333 8.16663Z"
                stroke="#9A9A9A"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.83337 8.16663V4.83329C3.83337 3.72822 4.27236 2.66842 5.05376 1.88701C5.83516 1.10561 6.89497 0.666626 8.00004 0.666626C9.10511 0.666626 10.1649 1.10561 10.9463 1.88701C11.7277 2.66842 12.1667 3.72822 12.1667 4.83329V8.16663"
                stroke="#9A9A9A"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <button type="button" class="btn btn-primary cus_button">
            Log in
          </button>
          <div class="remember_div">
            <div class="row justify-content-between align-items-center">
              <div class="col-auto">
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label
                    class="form-check-label form_check_label_cus"
                    for="exampleCheck1"
                    >Remember me</label
                  >
                </div>
              </div>
              <div class="col-auto">
                <Link
                  to="/forgot-password"
                  class="forgot_password_link"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  >Forget Password ?</Link>
                
              </div>
            </div>
          </div>
          
          <span class="other_option"
          
            >New to Toppers United ? <Link to="/Register"> Register Now</Link> 
          </span> 
        </form> 
      </div>
    </section>

   
    <div
      class="modal fade cus_modal"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered cus_modal_width">
        <div class="modal-content cus_modal_content">
          <div class="modal-body text-center">
            <div>
              <h3>Forget Password</h3>
              <p>
                Please enter your email or mobile number registered with us to
                reset your password
              </p>
              <form action="">
                <div class="outer_field">
                  <input
                    type="email"
                    class="form-control cus_form_control"
                    id="exampleInputEmail1"
                    placeholder="Email or Mobile Number"
                  />
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.07413 1.33337H13.926C14.7408 1.33337 15.4075 2.08337 15.4075 3.00004V13C15.4075 13.9167 14.7408 14.6667 13.926 14.6667H2.07413C1.25932 14.6667 0.592651 13.9167 0.592651 13V3.00004C0.592651 2.08337 1.25932 1.33337 2.07413 1.33337Z"
                      stroke="#9A9A9A"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.4075 3L8.00006 8.83333L0.592651 3"
                      stroke="#9A9A9A"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <button type="button" class="btn btn-primary cus_button">
                  Continue
                </button>
              </form>
            </div>
            <div class="otp_div">
              <p>
                Please enter the code that we’ve just sent to your E-mail or
                Mobile No.
              </p>
              <ul>
                <li>
                  <input type="text" class="form-control" id="exampleCheck1" />
                </li>
                <li>
                  <input type="text" class="form-control" id="exampleCheck1" />
                </li>
                <li>
                  <input type="text" class="form-control" id="exampleCheck1" />
                </li>
                <li>
                  <input type="text" class="form-control" id="exampleCheck1" />
                </li>
              </ul>
              <button
                type="button"
                class="btn btn-primary cus_button cus_proceed_btn"
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <script src="js/bootstrap.bundle.min.js"></script>
        </Fragment>
    )
}

export default Login;