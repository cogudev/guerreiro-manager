const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function request<T>(
    endpoint: string,
    options?: RequestInit
): Promise<T | undefined> {

    const response = await fetch(
        `${API_URL}${endpoint}`,{
            ...options,
            headers: {
            "Content-Type": "application/json",
            ...options?.headers
            } 
        }
    );

    validateResponse(response);

    return parseResponse<T>(response);
}

function validateResponse(
    response: Response
): void {

    if (!response.ok) {
        throw new Error(
            `HTTP ${response.status}`
        );
    }
}

async function parseResponse<T>(
    response: Response
): Promise<T | undefined> {

    const contentType =
        response.headers.get("content-type");

    if (
        !contentType?.includes(
            "application/json"
        )
    ) {
        return undefined;
    }

    return response.json();
}