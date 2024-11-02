import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password'
import { FloatLabel } from 'primereact/floatlabel';
import "./MockLogin.css";

export default function MockLogin({onLogin}) {

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin();
    }

    return (
        <body class="body">
            <h1 style="font-family:Kaisei Tokumin;font-size:">HerdHarmony</h1>

            <div>
                <h3 class="welcomeText">Welcome</h3>
                    <div class="logInForm">
                    <h4 class="logInText">Log In</h4>
                    <form>
                        <FloatLabel class="username">
                            <InputText id="username" />
                            <label class="usernameLabel" htmlFor="username">Username</label>
                        </FloatLabel>
                        <FloatLabel class="password">
                            <Password id="password" />
                            <label htmlFor="password">Password</label>
                        </FloatLabel>
                        <Button class="submit" label="Submit" onClick={(e) => handleSubmit()}/>
                    </form>
                </div>
            </div>
        </body>
    )
}