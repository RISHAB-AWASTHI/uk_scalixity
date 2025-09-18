"use client";

import { create } from 'zustand';

interface FeatureInfo {
  icon: any;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  detailedInfo: {
    overview: string;
    benefits: string[];
    examples: string[];
    keyPoints: string[];
  };
}

interface InfoModalState {
  isOpen: boolean;
  selectedFeature: FeatureInfo | null;
  openInfoModal: (feature: FeatureInfo) => void;
  closeInfoModal: () => void;
}

export const useInfoModal = create<InfoModalState>((set) => ({
  isOpen: false,
  selectedFeature: null,
  openInfoModal: (feature: FeatureInfo) => set({ isOpen: true, selectedFeature: feature }),
  closeInfoModal: () => set({ isOpen: false, selectedFeature: null }),
}));