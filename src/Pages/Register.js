import React, { Fragment } from "react";

function Register(){
    return(
        <Fragment>
            <section class="before_login_page register_page remove_bg_image">
      <div class="form_div text-center">
        <img src="images/Logo.png" alt="" />
        <h4 class="common_head">Create Account</h4>
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
              placeholder="Name"
            />
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
             
            >
              <path
                d="M14.6667 15.5V13.8333C14.6667 12.9493 14.3155 12.1014 13.6904 11.4763C13.0653 10.8512 12.2174 10.5 11.3334 10.5H4.66671C3.78265 10.5 2.93481 10.8512 2.30968 11.4763C1.68456 12.1014 1.33337 12.9493 1.33337 13.8333V15.5"
                stroke="#9A9A9A"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.99996 7.16667C9.84091 7.16667 11.3333 5.67428 11.3333 3.83333C11.3333 1.99238 9.84091 0.5 7.99996 0.5C6.15901 0.5 4.66663 1.99238 4.66663 3.83333C4.66663 5.67428 6.15901 7.16667 7.99996 7.16667Z"
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
              placeholder="Email"
            />
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
             
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
              placeholder="Mobile Number"
            />

            <svg
             
              width="14"
              height="22"
              viewBox="0 0 14 22"
            >
              <defs>
                <clipPath id="clip-path">
                  <rect
                    id="Rectangle_2"
                    data-name="Rectangle 2"
                    width="14"
                    height="22"
                    transform="translate(468 364)"
                    fill="#fff"
                  />
                </clipPath>
              </defs>
              <g
                id="Mask_Group_1"
                data-name="Mask Group 1"
                transform="translate(-468 -364)"
                clip-path="url(#clip-path)"
              >
                <image
                  id="Rectangle_1"
                  data-name="Rectangle 1"
                  width="28"
                  height="28"
                  transform="translate(461 361)"
                  
                />
              </g>
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

          <div class="outer_field">
            <input
              type="email"
              class="form-control cus_form_control"
              id="exampleInputEmail1"
              placeholder="Confirm Password"
            />
            <svg
              width="16"
              height="18"
              viewBox="0 0 16 18"
              fill="none"
             
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
          <div class="outer_field">
            <select
              class="form-select cus_form_select"
              aria-label="Default select example"
            >
              <option selected>I am a</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
             
            >
              <g clip-path="url(#clip0_1757_7925)">
                <path
                  d="M6.75 8.99994C7.64002 8.99994 8.51005 8.73602 9.25007 8.24155C9.99009 7.74709 10.5669 7.04428 10.9075 6.22202C11.2481 5.39975 11.3372 4.49495 11.1635 3.62203C10.9899 2.74912 10.5613 1.9473 9.93198 1.31796C9.30264 0.688624 8.50082 0.260041 7.62791 0.0864072C6.75499 -0.0872263 5.85019 0.00188875 5.02792 0.342483C4.20566 0.683077 3.50285 1.25985 3.00839 1.99987C2.51392 2.7399 2.25 3.60993 2.25 4.49994C2.25119 5.69305 2.72568 6.83695 3.56934 7.68061C4.41299 8.52426 5.55689 8.99875 6.75 8.99994ZM6.75 1.49994C7.34334 1.49994 7.92336 1.67589 8.41671 2.00553C8.91006 2.33518 9.29458 2.80371 9.52164 3.35189C9.7487 3.90007 9.80811 4.50327 9.69236 5.08521C9.5766 5.66716 9.29088 6.2017 8.87132 6.62126C8.45176 7.04082 7.91721 7.32654 7.33527 7.4423C6.75333 7.55805 6.15013 7.49864 5.60195 7.27158C5.05377 7.04452 4.58524 6.66 4.25559 6.16665C3.92595 5.6733 3.75 5.09329 3.75 4.49994C3.75 3.70429 4.06607 2.94123 4.62868 2.37862C5.19129 1.81601 5.95435 1.49994 6.75 1.49994V1.49994Z"
                  fill="#9A9A9A"
                />
                <path
                  d="M15.7499 7.49951V5.24951H14.2499V7.49951H11.9999V8.99951H14.2499V11.2495H15.7499V8.99951H17.9999V7.49951H15.7499Z"
                  fill="#9A9A9A"
                />
                <path
                  d="M9.78225 10.5005H3.71775C2.73211 10.5017 1.78717 10.8938 1.09022 11.5907C0.393264 12.2877 0.00119087 13.2326 0 14.2182L0 18.0005H1.5V14.2182C1.5006 13.6302 1.73444 13.0665 2.15022 12.6507C2.566 12.2349 3.12975 12.0011 3.71775 12.0005H9.78225C10.3703 12.0011 10.934 12.2349 11.3498 12.6507C11.7656 13.0665 11.9994 13.6302 12 14.2182V18.0005H13.5V14.2182C13.4988 13.2326 13.1067 12.2877 12.4098 11.5907C11.7128 10.8938 10.7679 10.5017 9.78225 10.5005V10.5005Z"
                  fill="#9A9A9A"
                />
              </g>
              <defs>
                <clipPath id="clip0_1757_7925">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <button type="button" class="btn btn-primary cus_button">
            REGISTER NOW
          </button>
          <span class="other_option"
            >Already have an account ? <a href="">Log in</a>
          </span>
        </form>
      </div>
    </section>

    
        </Fragment>
    )
}

export default Register;