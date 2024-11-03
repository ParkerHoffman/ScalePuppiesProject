import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password'
import { FloatLabel } from 'primereact/floatlabel';
import { useNavigate } from 'react-router-dom';
import "./MockLogin.css";
import { useState, useContext } from 'react';
import { RegisterFarm } from '../../Services/LoginService';
import { GlobalDataContext } from "../../context/GlobalDataContext";

export default function FarmRegister() {
    const navigate = useNavigate();
    const { setFarmID,toast, setIsOwner } = useContext(GlobalDataContext);
const [farmName, setFarmName] = useState("");
const [userName, setUserName] = useState("");
const [password, setPassword] = useState("");
const [farmTitle, setFarmTitle] = useState("");


    async function Register() {
        var invalid = 0;
        //Vetting password
        invalid = (password.match(/ /g) || []).length;
        invalid += (password.match(/\//g) || []).length;
        invalid += (password.match(/&/g) || []).length;
        invalid += (password.match(/:/g) || []).length;
        invalid += (password.match(/,/g) || []).length;
        invalid += (password.match(/%/g) || []).length;

        invalid += (farmName.match(/ /g) || []).length;
        invalid += (farmName.match(/\//g) || []).length;
        invalid += (farmName.match(/&/g) || []).length;
        invalid += (farmName.match(/:/g) || []).length;
        invalid += (farmName.match(/,/g) || []).length;
        invalid += (farmName.match(/%/g) || []).length;

        invalid += (userName.match(/ /g) || []).length;
        invalid += (userName.match(/\//g) || []).length;
        invalid += (userName.match(/&/g) || []).length;
        invalid += (userName.match(/:/g) || []).length;
        invalid += (userName.match(/,/g) || []).length;
        invalid += (userName.match(/%/g) || []).length;


        if(invalid === 0){

            var lowerU = userName.toLowerCase();
            var lowerF = farmName.toLowerCase();
            var response = await RegisterFarm(farmTitle, lowerF, lowerU, password);

        
            if(response === true){
                setFarmID(response.userID);
                setIsOwner(true);
                navigate("/dashboard");
            } else {
                toast('error', 'Error Logging In', 'Please try again later')
            }
        } else {
            toast('warn', 'No Special Characters', 'No special Characters are allowed in either username or Password. This includes spaces')
        }
    }

    function ReturntoLogIn(){
        navigate("/");
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
                    <h4 class="logInText">Register</h4>
                    <div class="logInFields">
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
                            <label class="farmNameLabel" htmlFor="farmName">Farm Username:</label>
                            <InputText class="farmNameInput" id="farmName" placeholder="Farm Name" value={farmName} onChange={(e) => setFarmName(e.target.value)} />
                        </div>
                        <div class="farmName">
                            <label class="farmNameLabel" htmlFor="farmTitle">Farm Name:</label>
                            <InputText class="farmNameInput" id="farmTitle" placeholder="Farm Name" value={farmTitle} onChange={(e) => setFarmTitle(e.target.value)} />
                        </div>
                        <div class="username">
                            <label class="usernameLabel" htmlFor="username">Username:</label>
                            <InputText class="usernameInput" id="username" placeholder="Username" value={userName} onChange ={(e) => setUserName(e.target.value)} />
                        </div>
                        <div class="password">
                            <label class="passwordLabel" htmlFor="password">Password:</label>
                            <Password class="passwordInput" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>   
                        </div>
                        <Button class="submit" label="Submit" onClick={(e) => Register()}/>
                            <div style={{marginTop:"-1.6em"}}>
                        <Button class="submit" label="Back" onClick={(e) => ReturntoLogIn()}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}