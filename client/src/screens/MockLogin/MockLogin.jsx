import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password'
import { FloatLabel } from 'primereact/floatlabel';
import { useNavigate } from 'react-router-dom';

export default function MockLogin() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/dashboard");
    }

    return (
        <div>
            <h3>Welcome</h3>
            <div>
                <h4>Log In</h4>
                <form onSubmit={handleSubmit}>
                    <FloatLabel>
                        <InputText id="username"/>
                        <label htmlFor="username">Username</label>
                    </FloatLabel>
                    <FloatLabel>
                        <Password id="password"/>
                        <label htmlFor="password">Password</label>
                    </FloatLabel>
                    <Button label="Submit" type="submit" url="/dashboard"/>
                </form>
            </div>
        </div>
    )
}