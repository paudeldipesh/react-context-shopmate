import { useEffect } from "react";

export const useTitle = (title: string) => {
  useEffect(() => {
    document.title = `${title} | Shopping Cart`;
  }, [title]);

  return null;
};
