import { PalindromeResponse } from "../interfaces";
  
  export const checkPalindromeApi = async (
    text: string
  ): Promise<PalindromeResponse> => {
    
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    
    if (!baseUrl) {
      throw new Error("API base URL is not defined in the environment variables.");
    }

    const response = await fetch(`${baseUrl}/palindrome`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
  
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  
    return response.json();
  };