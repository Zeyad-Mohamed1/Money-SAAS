"use client";

import { useMountedState } from "react-use";
import NewAccountSheet from "@/features/accounts/components/new-account-sheet";

export const SheetProvider = () => {
  const mounted = useMountedState();

  if (!mounted) {
    return null;
  }

  return (
    <>
      <NewAccountSheet />
    </>
  );
};
