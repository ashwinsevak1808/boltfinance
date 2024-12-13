import { post } from "@/utils/api/apiService";
import { API_ENDPOINTS } from "@/utils/api/apiConstants";

export const login = async (formData) => {
    const response = await post(API_ENDPOINTS.LOGIN, {
        email: formData.email.trim(),
        password: formData.password,
    });
    localStorage.setItem("token", response.token);
    return response;
};

export const register = async (formData) => {
    const response = await post(API_ENDPOINTS.REGISTER, {
        password: formData.password,
        email: formData.email.trim().toLowerCase(),
        name: formData.name.trim(),
        isTermsAccepted: formData.isTermsAccepted
    });
    localStorage.setItem("token", response.token);
    return response;
};


export const otpVerification = async (otp, email) => {
    const response = await post(API_ENDPOINTS.OTP_VERIFICATION, {
        otp: otp,
        email: email.trim().toLowerCase(),
    });
    return response;
};


export const resendOtp = async () => {
    return;
};


export const validateJwtToken = async () => {
    const response = await post(API_ENDPOINTS.VALIDATE_TOKEN, {
        token: localStorage.setItem("token", response.token),
    });
    return response;
};

export const forgotPassword = async (formData) => {
    const response = await post(API_ENDPOINTS.FORGOT_PASSWORD, {
        email: formData.email.trim().toLowerCase(),
    });
    return response;
};

export const resetPassword = async (formData) => {
    const response = await post(API_ENDPOINTS.RESET_PASSWORD, {
        token: formData.token,
        password: formData.password,
    });
    return response;
};