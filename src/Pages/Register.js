// import React, { Fragment } from "react";

// function Register(){
//     return(
//         <Fragment>
//             <section class="before_login_page register_page remove_bg_image">
//       <div class="form_div text-center">
//         <img src="images/Logo.png" alt="" />
//         <h4 class="common_head">Create Account</h4>
//         <ol class="login_with">
//           <li>
//             <a href=""><img src="assets/images/google.png" alt="" /></a>
//           </li>
//           <li>
//             <a href=""><img src="assets/images/facebook.png" alt="" /></a>
//           </li>
//           <li>
//             <a href=""><img src="assets/images/linkedin.png" alt="" /></a>
//           </li>
//         </ol>
//         <p class="sub_line">or use your email for registration</p>
//         <form action="">
//           <div class="outer_field">
//             <input
//               type="email"
//               class="form-control cus_form_control"
//               id="exampleInputEmail1"
//               placeholder="Name"
//             />
//             <svg
//               width="16"
//               height="16"
//               viewBox="0 0 16 16"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M14.6667 15.5V13.8333C14.6667 12.9493 14.3155 12.1014 13.6904 11.4763C13.0653 10.8512 12.2174 10.5 11.3334 10.5H4.66671C3.78265 10.5 2.93481 10.8512 2.30968 11.4763C1.68456 12.1014 1.33337 12.9493 1.33337 13.8333V15.5"
//                 stroke="#9A9A9A"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               />
//               <path
//                 d="M7.99996 7.16667C9.84091 7.16667 11.3333 5.67428 11.3333 3.83333C11.3333 1.99238 9.84091 0.5 7.99996 0.5C6.15901 0.5 4.66663 1.99238 4.66663 3.83333C4.66663 5.67428 6.15901 7.16667 7.99996 7.16667Z"
//                 stroke="#9A9A9A"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               />
//             </svg>
//           </div>

//           <div class="outer_field">
//             <input
//               type="email"
//               class="form-control cus_form_control"
//               id="exampleInputEmail1"
//               placeholder="Email"
//             />
//             <svg
//               width="16"
//               height="16"
//               viewBox="0 0 16 16"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M2.07413 1.33337H13.926C14.7408 1.33337 15.4075 2.08337 15.4075 3.00004V13C15.4075 13.9167 14.7408 14.6667 13.926 14.6667H2.07413C1.25932 14.6667 0.592651 13.9167 0.592651 13V3.00004C0.592651 2.08337 1.25932 1.33337 2.07413 1.33337Z"
//                 stroke="#9A9A9A"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               />
//               <path
//                 d="M15.4075 3L8.00006 8.83333L0.592651 3"
//                 stroke="#9A9A9A"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               />
//             </svg>
//           </div>

//           <div class="outer_field">
//             <input
//               type="email"
//               class="form-control cus_form_control"
//               id="exampleInputEmail1"
//               placeholder="Mobile Number"
//             />

//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               xmlns:xlink="http://www.w3.org/1999/xlink"
//               width="14"
//               height="22"
//               viewBox="0 0 14 22"
//             >
//               <defs>
//                 <clipPath id="clip-path">
//                   <rect
//                     id="Rectangle_2"
//                     data-name="Rectangle 2"
//                     width="14"
//                     height="22"
//                     transform="translate(468 364)"
//                     fill="#fff"
//                   />
//                 </clipPath>
//               </defs>
//               <g
//                 id="Mask_Group_1"
//                 data-name="Mask Group 1"
//                 transform="translate(-468 -364)"
//                 clip-path="url(#clip-path)"
//               >
//                 <image
//                   id="Rectangle_1"
//                   data-name="Rectangle 1"
//                   width="28"
//                   height="28"
//                   transform="translate(461 361)"
//                   xlink:href="data:image/png;base64,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"
//                 />
//               </g>
//             </svg>
//           </div>

//           <div class="outer_field">
//             <input
//               type="email"
//               class="form-control cus_form_control"
//               id="exampleInputEmail1"
//               placeholder="Password"
//             />
//             <svg
//               width="16"
//               height="18"
//               viewBox="0 0 16 18"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M13.8333 8.16663H2.16667C1.24619 8.16663 0.5 8.91282 0.5 9.83329V15.6666C0.5 16.5871 1.24619 17.3333 2.16667 17.3333H13.8333C14.7538 17.3333 15.5 16.5871 15.5 15.6666V9.83329C15.5 8.91282 14.7538 8.16663 13.8333 8.16663Z"
//                 stroke="#9A9A9A"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               />
//               <path
//                 d="M3.83337 8.16663V4.83329C3.83337 3.72822 4.27236 2.66842 5.05376 1.88701C5.83516 1.10561 6.89497 0.666626 8.00004 0.666626C9.10511 0.666626 10.1649 1.10561 10.9463 1.88701C11.7277 2.66842 12.1667 3.72822 12.1667 4.83329V8.16663"
//                 stroke="#9A9A9A"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               />
//             </svg>
//           </div>

//           <div class="outer_field">
//             <input
//               type="email"
//               class="form-control cus_form_control"
//               id="exampleInputEmail1"
//               placeholder="Confirm Password"
//             />
//             <svg
//               width="16"
//               height="18"
//               viewBox="0 0 16 18"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M13.8333 8.16663H2.16667C1.24619 8.16663 0.5 8.91282 0.5 9.83329V15.6666C0.5 16.5871 1.24619 17.3333 2.16667 17.3333H13.8333C14.7538 17.3333 15.5 16.5871 15.5 15.6666V9.83329C15.5 8.91282 14.7538 8.16663 13.8333 8.16663Z"
//                 stroke="#9A9A9A"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               />
//               <path
//                 d="M3.83337 8.16663V4.83329C3.83337 3.72822 4.27236 2.66842 5.05376 1.88701C5.83516 1.10561 6.89497 0.666626 8.00004 0.666626C9.10511 0.666626 10.1649 1.10561 10.9463 1.88701C11.7277 2.66842 12.1667 3.72822 12.1667 4.83329V8.16663"
//                 stroke="#9A9A9A"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               />
//             </svg>
//           </div>
//           <div class="outer_field">
//             <select
//               class="form-select cus_form_select"
//               aria-label="Default select example"
//             >
//               <option selected>I am a</option>
//               <option value="1">One</option>
//               <option value="2">Two</option>
//               <option value="3">Three</option>
//             </select>
//             <svg
//               width="18"
//               height="18"
//               viewBox="0 0 18 18"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <g clip-path="url(#clip0_1757_7925)">
//                 <path
//                   d="M6.75 8.99994C7.64002 8.99994 8.51005 8.73602 9.25007 8.24155C9.99009 7.74709 10.5669 7.04428 10.9075 6.22202C11.2481 5.39975 11.3372 4.49495 11.1635 3.62203C10.9899 2.74912 10.5613 1.9473 9.93198 1.31796C9.30264 0.688624 8.50082 0.260041 7.62791 0.0864072C6.75499 -0.0872263 5.85019 0.00188875 5.02792 0.342483C4.20566 0.683077 3.50285 1.25985 3.00839 1.99987C2.51392 2.7399 2.25 3.60993 2.25 4.49994C2.25119 5.69305 2.72568 6.83695 3.56934 7.68061C4.41299 8.52426 5.55689 8.99875 6.75 8.99994ZM6.75 1.49994C7.34334 1.49994 7.92336 1.67589 8.41671 2.00553C8.91006 2.33518 9.29458 2.80371 9.52164 3.35189C9.7487 3.90007 9.80811 4.50327 9.69236 5.08521C9.5766 5.66716 9.29088 6.2017 8.87132 6.62126C8.45176 7.04082 7.91721 7.32654 7.33527 7.4423C6.75333 7.55805 6.15013 7.49864 5.60195 7.27158C5.05377 7.04452 4.58524 6.66 4.25559 6.16665C3.92595 5.6733 3.75 5.09329 3.75 4.49994C3.75 3.70429 4.06607 2.94123 4.62868 2.37862C5.19129 1.81601 5.95435 1.49994 6.75 1.49994V1.49994Z"
//                   fill="#9A9A9A"
//                 />
//                 <path
//                   d="M15.7499 7.49951V5.24951H14.2499V7.49951H11.9999V8.99951H14.2499V11.2495H15.7499V8.99951H17.9999V7.49951H15.7499Z"
//                   fill="#9A9A9A"
//                 />
//                 <path
//                   d="M9.78225 10.5005H3.71775C2.73211 10.5017 1.78717 10.8938 1.09022 11.5907C0.393264 12.2877 0.00119087 13.2326 0 14.2182L0 18.0005H1.5V14.2182C1.5006 13.6302 1.73444 13.0665 2.15022 12.6507C2.566 12.2349 3.12975 12.0011 3.71775 12.0005H9.78225C10.3703 12.0011 10.934 12.2349 11.3498 12.6507C11.7656 13.0665 11.9994 13.6302 12 14.2182V18.0005H13.5V14.2182C13.4988 13.2326 13.1067 12.2877 12.4098 11.5907C11.7128 10.8938 10.7679 10.5017 9.78225 10.5005V10.5005Z"
//                   fill="#9A9A9A"
//                 />
//               </g>
//               <defs>
//                 <clipPath id="clip0_1757_7925">
//                   <rect width="18" height="18" fill="white" />
//                 </clipPath>
//               </defs>
//             </svg>
//           </div>
//           <button type="button" class="btn btn-primary cus_button">
//             REGISTER NOW
//           </button>
//           <span class="other_option"
//             >Already have an account ? <a href="">Log in</a>
//           </span>
//         </form>
//       </div>
//     </section>

//     <script src="js/bootstrap.bundle.min.js"></script>
//         </Fragment>
//     )
// }

// export default Register;