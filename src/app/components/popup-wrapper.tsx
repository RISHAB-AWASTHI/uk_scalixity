"use client";

import { usePopup } from "@/app/hooks/use-popup";
import PopupForm from "@/app/components/popup-form";

export default function PopupWrapper() {
  const { isOpen, closePopup } = usePopup();

  return <PopupForm isOpen={isOpen} onClose={closePopup} />;
}
