<?php
include_once "header.php";
?>
<body>
    <div class="wrapper">
        <section class="form login">
            <header>Chat App</header>
            <form action="#">
                <div class="error-text">This is an error message</div>
                <div class="field input">
                    <label>Email address</label>
                    <input type="text" name="email" placeholder="Enter your email">
                </div>
                <div class="field input">
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Enter your password">
                    <i class="fas fa-eye"></i>
                </div>
                
                <div class="field button">
                   
                    <input type="submit" name="submit" value="continues to chat">
                </div>
               
            </form>
            <div class="link">Not yet Signed up? <a href="index.php">Sign up!</a></div>
        </section>
    </div>
    <script src="javascript/pass-show-hide.js"></script>
    <script src="javascript/login.js"></script>
</body>

</html>