"use client";

import { useInfoModal } from "@/app/hooks/use-info-modal";
import InfoModal from "@/app/components/info-modal";

export default function InfoModalWrapper() {
  const { isOpen, selectedFeature, closeInfoModal } = useInfoModal();

  return <InfoModal isOpen={isOpen} feature={selectedFeature} onClose={closeInfoModal} />;
}