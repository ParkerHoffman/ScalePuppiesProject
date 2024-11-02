import { useNavigate } from "react-router-dom";

export default function MockLogin({onLogin}) {
    const navigate = useNavitage();

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin();
    }

    return (
        <div></div>
    )
}