// utils/apiConstants.js

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3000";

export const API_ENDPOINTS = {
  LOGIN: `${BASE_URL}/api/auth/login`,
  REGISTER: `${BASE_URL}/api/auth/register`,
  OTP_VERIFICATION: `${BASE_URL}/api/auth/verify-otp`,



  FORGOT_PASSWORD: `${BASE_URL}/api/auth/forgot-password`,
  RESET_PASSWORD: `${BASE_URL}/api/auth/reset-password`,

  VALIDATE_TOKEN: `${BASE_URL}/api/auth/validate-token`,

  DASHBOARD: `${BASE_URL}/api/auth/dashboard`,

  CREATE_TRANSACTION: `${BASE_URL}/api/transaction`,
  GET_TRANSACTIONS: `${BASE_URL}/api`,
  GET_TRANSACTION: `${BASE_URL}/api/:id`,
  UPDATE_TRANSACTION: `${BASE_URL}/api/:id`,
  DELETE_TRANSACTION: `${BASE_URL}/api/:id`,
};
