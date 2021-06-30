import Card from "../../components/card";
import Input from "../../components/form/input";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className="flex items-center justify-center h-screen">
      <Card>
        <div className="flex justify-center">
          <div className="absolute bg-gray-500 w-16 h-16 rounded-full -top-8 mx-auto" />
        </div>
        <div className="grid gap-4 mt-4">
          <Input title="Username" value={username} onChange={setUsername} />
          <Input
            title="Password"
            type="password"
            value={password}
            onChange={setPassword}
          />
        </div>
      </Card>
    </div>
  );
}
