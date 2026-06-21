import { useCallback, useState } from "react";

export function useDisclosure(defaultOpen = false) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return {
    close: useCallback(() => setIsOpen(false), []),
    isOpen,
    open: useCallback(() => setIsOpen(true), []),
    toggle: useCallback(() => setIsOpen((value) => !value), [])
  };
}
