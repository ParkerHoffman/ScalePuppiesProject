import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password'
import { FloatLabel } from 'primereact/floatlabel';
import { useNavigate } from 'react-router-dom';
import "./FarmRegister.css";
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
            <div class="registerBox">
                <div class="registerForm"> {/*log in form*/}
                    <div class="registerFields">
                        <h3>Register</h3>
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
                    <div className="farmName">
                            <label className="farmNameLabel" htmlFor="farmName">Farm Username:</label>
                            <InputText className="farmNameInput" id="farmName" placeholder="Farm Name" value={farmName} onChange={(e) => setFarmName(e.target.value)} />
                        </div>
                        <div className="farmName">
                            <label className="farmNameLabel" htmlFor="farmTitle">Farm Name:</label>
                            <InputText className="farmNameInput" id="farmTitle" placeholder="Farm Name" value={farmTitle} onChange={(e) => setFarmTitle(e.target.value)} />
                        </div>
                        <div className="username">
                            <label className="usernameLabel" htmlFor="username">Username:</label>
                            <InputText className="usernameInput" id="username" placeholder="Username" value={userName} onChange ={(e) => setUserName(e.target.value)} />
                        </div>
                        <div className="password">
                            <label className="passwordLabel" htmlFor="password">Password:</label>
                            <Password className="passwordInput" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>   
                        </div>
                        <Button className="submit" label="Submit" onClick={(e) => Register()}/>
                            <div style={{marginTop:"-1.6em"}}>
                        <Button className="backButton" label="Back" onClick={(e) => ReturntoLogIn()}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}