/** @type {import('next').NextConfig} */

// import withPWA from "@ducanh2912/next-pwa";

// const pwaConfig = {
//     dest: "public",
//     cacheOnFrontEndNav: true,
//     aggressiveFrontEndNavCaching: true,
//     reloadOnOnline: true,
//     disable: false,
//     workboxOptions: {
//         disableDevLogs: true,
//     }
// };
// https://godisgreatgas.com
// DB_URL: "mongodb+srv://homiemusa:djrefuge@cluster0.fk517ja.mongodb.net/npcdatabase?retryWrites=true&w=majority", 
const nextConfig = {
    env: {
        ENVIRONMENT_URL: "https://godisgreatgas.com",
        NEXTAUTH_URL: "https://godisgreatgas.com",
        DB_URL:"mongodb+srv://homiemusa:djrefuge@cluster0.mcttt.mongodb.net/godisgreatgas?retryWrites=true&w=majority",
        CLOUND_NAME:"xycoders",
        CLOUDINARY_API_KEY: "837887428819121",
        CLOUDINARY_API_SECRET: "fxqLgjYaglPh0PViyCbB-cseWoE",
        NEXTAUTH_SECRET: "refugewisemusawagole456565543",
        STRIPE_PUBLIC_KEY: 'pk_test_51AXQQfDtSmo7ipf18rtyXOfKlXbzQBjm3hq7TQJIFFIcBbLrufa3chFTWAt17h9ck3dZX3RJagPqYxvOmRpjTIjx00P80JJDxI',
        STRIPE_PRIVATE_KEY: 'sk_test_51AXQQfDtSmo7ipf134DFxpL3fH75bb9QY8IjxvCXgeYPDCxZfqMARGQxUmSZXV1eQy3cuEnA2ljw7hcrXiYFlVVm00YiGlvmSP',
    },
    images: {
        domains: ["res.cloudinary.com"],
    },
};

// export default withPWA(pwaConfig)(nextConfig);

export default nextConfig