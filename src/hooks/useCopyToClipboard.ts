import { useState } from 'react';

type UseCopyToClipboard = [string | null, (text: string) => Promise<boolean>];

export function useCopyToClipboard(): UseCopyToClipboard {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copy = async (text: string): Promise<boolean> => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported');
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      return false;
    } catch (error) {
      setCopiedText(null);
      console.warn('Copy failed', error);
      return false;
    }
  };

  return [copiedText, copy];
}
