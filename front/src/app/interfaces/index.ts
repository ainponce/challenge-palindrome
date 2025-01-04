export interface HistoryItem {
    word: string;
    isPalindrome: boolean;
}

export interface PalindromeCheckerProps {
    onAddToHistory: (word: string, isPalindrome: boolean) => void;
}

export interface HistoryItem {
  word: string;
  isPalindrome: boolean;
}

export interface HistoryWordsProps {
  history: HistoryItem[];
}

export interface PalindromeResponse {
  isPalindrome: boolean;
}