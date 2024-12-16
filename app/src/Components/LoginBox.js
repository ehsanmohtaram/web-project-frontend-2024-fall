import '../App.css';

function LoginBox() {
    return (
        <section class="login_box">
            <div>
                <label className="login_label" htmlFor="username">Username </label>
                <input type="text" name="username" placeholder="username" defaultValue="" />
            </div>
            <div>
                <label class="login_label" for="password">Password </label>
                <input type="text" name="password" defaultValue="" placeholder="password" />
            </div>
            <button class="add_button">Sign In</button>
            <button class="add_button">Sign Up</button>
        </section>
    );
}

export default LoginBox;
