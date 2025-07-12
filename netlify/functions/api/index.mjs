import RESPONSE from "./response.json";

export default async function Handler () {
    let response;

    try {
        response = new Response(JSON.stringify(RESPONSE), { status: 200 });

        console.log("Users fetched successfully");
    } catch (error) {
        console.error(error);
        response = new Response(JSON.stringify({ message: error.message }), { status: 500 });
    } finally {
        response.headers.append('Access-Control-Allow-Origin', process.env.EZEMA_FRONTEND_URI);
        return response;
    }
};