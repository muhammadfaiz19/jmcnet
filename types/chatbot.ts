export interface ChatbotContext {
  id: number;
  name: string;
  context: string;
  createdAt: string;
  updatedAt: string;
}

export interface ChatbotFile {
  id: number;
  filename: string;
  filePath: string;
  fileUrl: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface ChatResponse {
  reasoning: string;
  answer: string;
}
