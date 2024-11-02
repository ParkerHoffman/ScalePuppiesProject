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

         <div class="screen">
             {/*Header code*/}
            <div class="header">
            <h1 class="headerText">HerdHarmony</h1>
            <p class="motto">Created to create harmony in and between your herds</p>
            </div>

            {/*Section of code containing the Welcome, and log in form */}
            <div class="welcomeAndLogIn">
                <div>
                    <h3 class="welcomeText">Welcome</h3> 
                </div>
                <div class="logInForm"> {/*log in form*/}
                    <h4 class="logInText">Log In</h4>
                    <form class="logInFields">
                        {/*<FloatLabel class="farmName">
                            <InputText id="farmName"/>
                            <label htmlFor="farmName">Farm Name:</label>
                        </FloatLabel>
                        <FloatLabel class="username">
                            <InputText id="username" />
                            <label htmlFor="username">Username:</label>
                        </FloatLabel>
                        <FloatLabel class="password">
                            <Password id="password"/>
                            <label htmlFor="password">Password:</label>
                        </FloatLabel>
                        */}
                        <div class="farmName">
                            <label class="farmNameLabel" htmlFor="farmName">Farm Name:</label>
                            <InputText class="farmNameInput" id="farmName" placeholder="Farm Name" />
                        </div>
                        <div class="username">
                            <label class="usernameLabel" htmlFor="username">Username:</label>
                            <InputText class="usernameInput" id="username" placeholder="Username" />
                        </div>
                        <div class="password">
                            <label class="passwordLabel" htmlFor="password">Password:</label>
                            <Password class="passwordInput" id="password" placeholder="Password"/>   
                        </div>
                        <Button class="submit" label="Submit" onClick={(e) => handleSubmit()}/>
                    </form>
                </div>
            </div>
        </div>
    )
}