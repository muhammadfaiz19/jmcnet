import api from "@/lib/api";
import type { ChatbotContext, ChatbotFile, ChatResponse, ApiResponse } from "@/types";

export const chatbotService = {
  chat: async (message: string) => {
    return api.post<ApiResponse<ChatResponse>>("/chatbot", { message });
  },

  getContextByName: async (name: string) => {
    return api.get<ApiResponse<ChatbotContext>>(`/chatbot/contexts/${name}`);
  },

  upsertContextByName: async (name: string, context: string) => {
    return api.put<ApiResponse<ChatbotContext>>(`/chatbot/contexts/${name}`, { context });
  },

  getFiles: async () => {
    return api.get<ApiResponse<ChatbotFile[]>>("/chatbot/files");
  },

  uploadFile: async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    return api.post<ApiResponse<ChatbotFile>>("/chatbot/files", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  deleteFile: async (id: number) => {
    return api.delete<ApiResponse<null>>(`/chatbot/files/${id}`);
  },
};
