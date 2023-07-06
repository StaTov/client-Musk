import { useState } from "react";


const AdminForm = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleAdmin = (e: React.SyntheticEvent) => {
        e.preventDefault()
    }

    return (
        <div>
            <form onSubmit={handleAdmin}>
                <div>
                    <input
                        placeholder="enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}>
                    </input>
                </div>
                <div>
                    <input
                        placeholder="enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}>
                    </input>
                </div>
                <div>
                    <button type="submit">
                        sumbit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AdminForm;