"use client";

import { useState, useEffect } from "react";
import { CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot
} from "@/components/ui/input-otp";

import { Button } from "@/components/layout/common/button";
import Logo from "@/components/layout/logo";
import Card, { CardTitle } from "@/components/layout/common/card";
import { Background } from "@/components/layout/common/background";
import { Alert } from "@/components/layout/common/alert";
import { otpVerification, resendOtp } from "@/utils/services/authService";
import { useSearchParams } from "next/navigation";

export default function OTPVerificationPage() {
  const searchParams = useSearchParams();
  const email = searchParams.get('email');


  const [otp, setOTP] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [resendTimer, setResendTimer] = useState(60);
  const [canResendOTP, setCanResendOTP] = useState(false);

  useEffect(() => {
    // Start the timer for OTP resend
    const timer = resendTimer > 0 && setInterval(() => {
      setResendTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    // Enable resend when timer reaches 0
    if (resendTimer === 0) {
      setCanResendOTP(true);
    }

    // Cleanup the interval
    return () => clearInterval(timer);
  }, [resendTimer]);

  const handleOTPChange = (value) => {
    setOTP(value);
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();

    // Validate OTP length
    if (otp.length !== 6) {
      setAlert({
        variant: "destructive",
        title: "Invalid OTP",
        description: "Please enter a 6-digit OTP."
      });
      return;
    }

    setIsLoading(true);
    try {
      await otpVerification(otp, email);
      setAlert({
        variant: "success",
        title: "Verification Successful",
        description: "Your account has been verified."
      });
      window.location.href = "/dashboard";
    } catch (error) {
      setAlert({
        variant: "destructive",
        title: "Verification Failed",
        description: error.message || "Invalid or expired OTP."
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOTP = async () => {
    if (!canResendOTP) return;

    setIsLoading(true);
    try {
      await resendOtp();
      setAlert({
        variant: "success",
        title: "OTP Resent",
        description: "A new OTP has been sent to your email."
      });
      // Reset timer
      setResendTimer(60);
      setCanResendOTP(false);
    } catch (error) {
      setAlert({
        variant: "destructive",
        title: "Resend Failed",
        description: error.message || "Unable to resend OTP."
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
          <CardHeader className="space-y-4 pb-6 text-center items-center">
            <Logo className="mb-2" />
            <CardTitle>Verify Your Account</CardTitle>
            <p className="text-muted-foreground text-sm">
              Enter the 6-digit OTP sent to
            </p>
            <p className="text-primary font-semibold">{email}</p>
          </CardHeader>

          <CardContent className="px-8 pt-0">
            {alert && <Alert {...alert} className="mb-6" />}

            <form onSubmit={handleVerifyOTP} className="space-y-6">
              <div className="flex justify-center">
                <InputOTP
                  maxLength={6}
                  value={otp}
                  onChange={handleOTPChange}
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>

              <div className="flex flex-col w-full space-y-4 mt-6">
                <Button
                  type="submit"
                  isLoading={isLoading}
                  loadingText="Verifying..."
                  label="Verify OTP"
                  className="w-full"
                />
                <button
                  type="button"
                  onClick={handleResendOTP}
                  disabled={!canResendOTP}
                  className={`text-sm ${canResendOTP
                    ? 'text-primary hover:underline'
                    : 'text-muted-foreground cursor-not-allowed'
                    }`}
                >
                  {canResendOTP
                    ? 'Resend OTP'
                    : `Resend in ${resendTimer} sec`}
                </button>
              </div>
            </form>
          </CardContent>

          <CardFooter className="flex flex-col space-y-2 px-8 pb-6 pt-0">
            <p className="text-muted-foreground text-xs text-center">
              OTP is valid for 30 minutes
            </p>
            <p className="text-muted-foreground text-xs text-center">
              Didn&#39;t receive the OTP? Check your spam folder
            </p>
          </CardFooter>
        </Card>
      </motion.div>
    </Background>
  );
}