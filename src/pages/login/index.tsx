import Card from "../../components/card";
import Input from "../../components/form/input";
import { useState } from "react";
import Button from "../../components/form/button";
import ErrorNotification from "../../components/notification/error-notification";
import { useAppContext } from "../../contexts/app.context";
import { UserInterface } from "../../interfaces/user.interface";

const isEmailValid = (email: string) => /\S+@\S+\.\S+/.test(email);

export default function Login() {
  const { authenticate } = useAppContext();
  const [name, setName] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [errors, setErrors] = useState<Array<string>>([]);

  const onSubmit = () => {
    const issues = [];

    if (name.length < 3) {
      issues.push("Name should have at least 3 characters");
    }

    if (lastname.length < 3) {
      issues.push("Lastname should have at least 3 characters");
    }

    if (!isEmailValid(email)) {
      issues.push("E-Mail format is invalid");
    }

    if (phoneNumber.length < 6 || isNaN(Number(phoneNumber))) {
      issues.push("Phone number is invalid");
    }

    setErrors(issues);

    if (issues.length === 0) {
      authenticate({
        name,
        lastname,
        email,
        phoneNumber: Number(phoneNumber),
      } as UserInterface);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen px-4">
        <Card>
          <div className="flex justify-center">
            <div className="absolute bg-gray-500 w-16 h-16 rounded-full -top-8 mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            <Input title="Name" value={name} onChange={setName} />
            <Input title="Lastname" value={lastname} onChange={setLastname} />
            <Input
              type="email"
              title="Email"
              className="sm:col-span-2"
              value={email}
              onChange={setEmail}
            />
            <Input
              title="Phone Number"
              type="number"
              className="sm:col-span-2"
              value={phoneNumber}
              onChange={setPhoneNumber}
            />
          </div>
          <div className="flex justify-center">
            <Button
              className="mt-8"
              size={96}
              title="Submit"
              onClick={onSubmit}
            />
          </div>
        </Card>
      </div>
      <ErrorNotification errors={errors} />
    </>
  );
}
