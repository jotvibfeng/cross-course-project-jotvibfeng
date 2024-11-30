# coss-course-project
This is the first major project we worked on for a school assignment. We used a design we made on Figma in a previous course that we used as inspiration. You chose them based on your design like a movie site, a site that sells outdoor clothing, and a site for selling video games which is the one I picked because of my interest in that.

# What is the project purpose 
The purpose of the project was to make a user-friendly e-commerce site with a product page to purchase a detail page to get more information about the product, an easy-to-navigate menu, and a contact form to submit, an about page with info about the company capable of using HTML and CSS and see if we could replicate our design from Figma in the development process. I also attempted to use CASS a CSS framework but it became a little too difficult to use for me at a time so I went back to using vanilla CSS again. Since this was my first project assignment there was a lot of trouble but I think that is the same case for every Front-end developer`s first project, as you can see in the example under HTML here I definitely could done this differently with the structure of it which I have taken with me further and improved it. But the biggest problem I had in this course was CSS I had so much wired styling that made no sense instead of using width 100% on the background color on my header I used the width I had on the screen I was working on which was a nightmare to do in responsive design on but I found out the problem which a main component in the work field find the problem and solve it.         

<div class="title-shopping">
        <h1>Shopping Cart</h1>
      </div>
      <div class="title-order">
        <h2>Your Order</h2>
      </div>
      <div class="order-container">
        <div class="order-image">
          <img
            src="images/PingPong-image.jpeg"
            class="ping-pong-order"
            alt="Picture of cover to Ping Pong"
          />
        </div>
        <div class="order-dis">
          <h4 class="game-title">Ping Pong</h4>
          <h6 class="console-order">Playbox</h6>
          <h6 class="del-time">Delivery time 1-2 days</h6>
          <h5 class="order-price">10.99$</h5>
          <input type="number" class="number" inputmode="numeric" />
          <svg
            class="bin"
            viewBox="0 0 41 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="20.5" cy="19" rx="20.5" ry="19" fill="#D9D9D9" />
            <path
              d="M28 16.3337L26.9562 18.1462L14.2944 10.8125L15.3382 9L18.5115 10.8334L19.9311 10.4458L24.4509 13.065L24.8372 14.5003L28 16.3337ZM13 26.9047V14.3326H18.2923L25.5261 18.5233V26.9047C25.5261 27.4604 25.3061 27.9933 24.9146 28.3863C24.5231 28.7792 23.9921 29 23.4384 29H15.0877C14.534 29 14.003 28.7792 13.6115 28.3863C13.22 27.9933 13 27.4604 13 26.9047Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      <div class="checkout-container">
        <h6 class="item-cart">Items in the shopping cart</h6>
        <h6 class="cost-cart">Cost of freight</h6>
        <h6 class="price-item">10.99$</h6>
        <h6 class="price-cost">0$</h6>
        <h5 class="total">Total Amount</h5>
        <h5 class="total-price">10.99$</h5>
        <a href="checkout.html" class="hero-checkout"
          ><h5 class="check-price">Check out</h5></a
        >
      </div>
      
# How to run the project
Clone the repo: git clone git@github.com:jotvibfeng/Project_Exam1.git
Install the dependencies:npm install
To run the app, run the following commands: npm run start
Install the dependencies: npm install If you running into an error during installation make sure you have downloaded node_module on your computer. you can use this link for how to download node_module: https://nodejs.org/en/learn/getting-started/how-to-install-nodejs

# How to use the site
The first thing you should do is try to purchase a product and test payment checkout which I think you will see is pretty well made. 
