"use client";

import { useState } from "react";
import { CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";

import TextField from "@/components/auth/input-field";
import { Button } from "@/components/layout/common/button";
import Logo from "@/components/layout/logo";
import Card, { CardTitle } from "@/components/layout/common/card";
import Checkbox from "@/components/layout/common/checkbox";
import { Background } from "@/components/layout/common/background";
import Tabs, {
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/layout/common/tabs";
import { Alert } from "@/components/layout/common/alert";
import { login, register } from "../../../utils/services/authService";
import { useRouter } from "next/navigation";


export default function AuthPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
    rememberMe: false,
    isTermsAccepted: false,
  });
  const [activeTab, setActiveTab] = useState("login");
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCheckboxChange = (name, checked) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await login(formData);
      setAlert({
        variant: "success",
        title: "Login Successful",
        description: "You have been logged in successfully.",
      });
      router.push("/dashboard")
    } catch (error) {
      setAlert({
        variant: "destructive",
        title: "Login Failed",
        description: error.message || "An error occurred during login.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!formData.isTermsAccepted) {
      setAlert({
        variant: "destructive",
        title: "Registration Failed",
        description: "Please accept the Terms and Conditions",
      });
      return;
    }
    setIsLoading(true);
    try {
      await register(formData);
      setAlert({
        variant: "success",
        title: "Registration Successful",
        description: "Your account has been created successfully.",
      });
      router.push(`/auth/verification?email=${encodeURIComponent(formData.email)}`);
    } catch (error) {
      setAlert({
        variant: "destructive",
        title: "Registration Failed",
        description: error.message || "An error occurred during registration.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Background>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-md relative z-10"
      >
        <Card>
          <CardHeader className="space-y-4 pb-8 text-center items-center">
            <Logo />
            <CardTitle>Admin Dashboard</CardTitle>
            <p className="text-muted-foreground text-base">
              {`Welcome! Please sign in or create an account`}
            </p>
          </CardHeader>
          <CardContent className="px-8">
            {alert && <Alert {...alert} />}

            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="space-y-6"
            >
              <TabsList className=" grid-cols-2 gap-2 ">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>

              <TabsContent value="login" className="space-y-6" tabIndex="-1">
                <form className="space-y-6" onSubmit={handleLogin}>
                  <TextField
                    label="Email"
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />

                  <TextField
                    label="Password"
                    type="password"
                    name="password"
                    required
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />

                  <Checkbox
                    id="rememberMe"
                    name="rememberMe"
                    label="Remember me"
                    checked={formData.rememberMe}
                    onChange={(checked) =>
                      handleCheckboxChange("rememberMe", checked)
                    }
                  />

                  <Button
                    type="submit"
                    isLoading={isLoading}
                    loadingText="Signing In..."
                    label={"Sign In"}
                  />
                </form>
              </TabsContent>

              <TabsContent value="register" className="space-y-6" tabIndex="-1">
                <form className="space-y-6" onSubmit={handleRegister}>
                  <TextField
                    label="Name"
                    type="text"
                    name="name"
                    required
                    placeholder="Choose a name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  <TextField
                    label="Email"
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  <TextField
                    label="Password"
                    type="password"
                    name="password"
                    required
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />

                  <Checkbox
                    id="isTermsAccepted"
                    name="isTermsAccepted"
                    label="I accept the Terms of Service and Privacy Policy"
                    checked={formData.isTermsAccepted}
                    onChange={(checked) =>
                      handleCheckboxChange("isTermsAccepted", checked)
                    }
                    required
                  />

                  <Button
                    type="submit"
                    isLoading={isLoading}
                    loadingText=" Creating Account..."
                    label={"Create Account"}
                  />
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4 px-8 pb-8">
            <p className="text-muted-foreground text-sm">
              Protected by reCAPTCHA and subject to our Privacy Policy and Terms
              of Service
            </p>
          </CardFooter>
        </Card>
      </motion.div>
    </Background>
  );
}
