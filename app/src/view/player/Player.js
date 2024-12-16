function Player() {
    return (
        <section class="login_box">
        <div>
            <label class="login_label" for="username">Username</label>
            {/* <input type="text" name="username" value="" placeholder="username"> */}
        </div>
        <div>
            <label class="login_label" for="password">Password</label>
            {/* <input type="text" name="password" value="" placeholder="password"> */}
        </div>
        <button class="add_button">Sign In</button>
        <button class="add_button">Sign Up</button>
    </section>
    );
  }
  
  export default Player;