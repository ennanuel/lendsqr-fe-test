import RESPONSE from "./response.json";

export default async function Handler () {
    try {
        const response = new Response(JSON.stringify(RESPONSE), { status: 200 });
        // response.headers.append('Access-Control-Allow-Origin', process.env.FRONTEND_URI);
        console.log("Users fetched successfully");

        return response;
    } catch (error) {
        console.error(error);
        const response = new Response(JSON.stringify({ message: error.message }), { status: 500 });
        // response.headers.append('Access-Control-Allow-Origin', process.env.FRONTEND_URI);
        return response;
    };
};