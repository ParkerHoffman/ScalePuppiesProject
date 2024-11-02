import { useNavigate } from "react-router-dom";

export default function MockLogin({onLogin}) {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin();
    }

    return (
        <div></div>
    )
}