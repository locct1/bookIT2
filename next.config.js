/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "https://book-it-2-le-locs-projects.vercel.app",
    NEXTAUTH_URL: "https://book-it-2-le-locs-projects.vercel.app",
    DB_LOCAL_URI: "mongodb://127.0.0.1:27017/bookit-v2",
    DB_URI: "mongodb+srv://kingkongct2001:Lb2qxHQxm39c4vHE@chat-app.5jjsbyc.mongodb.net/?retryWrites=true&w=majority&appName=chat-app",

    STRIPE_WEBHOOK_SECRET: "whsec_M3uRS5UrWSEmj7zDlYFKIM7sOSdKTeie",

    STRIPE_SECRET_KEY: "sk_test_51OyrwMRxvadPGsJdK25ec0D9dg6U48q9KvQmCzWn1yupI84SnmpFbvujmqTLqXSdNTh8oMMXAPcRCk4cvtRnNQmr00Ir3irPfG",

    CLOUDINARY_CLOUD_NAME: "drb2swrm5",
    CLOUDINARY_API_KEY: "743174722182157",
    CLOUDINARY_API_SECRET: "M3_8XFQ9lxeajUXT9HttW8ikwFc",

    SMTP_HOST: "sandbox.smtp.mailtrap.io",
    SMTP_PORT: 2525,
    SMTP_USER: "10cd43e4f99c16",
    SMTP_PASSWORD: "92cb08f28c10e8",
    SMTP_FROM_EMAIL: "kingkongct2001@gmail.com",
    SMTP_FROM_NAME: "BookIT",

    GEOCODER_API_KEY: "2212121sfdf",
    GEOCODER_PROVIDER: "mapquest",

    MAPBOX_ACCESS_TOKEN: "",

    NEXTAUTH_SECRET: "KSDFJKLSDJFLKSDFJSLDKF934KJLDJGDLKGFJDF",
    REVALIDATE_TOKEN: "JK34J50JSDKFLJSDKF034I5DKFJSDK4IJFKSDJFL",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
