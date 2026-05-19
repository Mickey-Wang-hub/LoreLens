import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { AppTheme, AppFontSize, AppLanguage } from '../types';
import localforage from 'localforage';

interface SettingsState {
  saveToGallery: boolean;
  highResAudio: boolean;
  theme: AppTheme;
  fontSize: AppFontSize;
  language: AppLanguage;
  
  setSaveToGallery: (val: boolean) => void;
  setHighResAudio: (val: boolean) => void;
  setTheme: (theme: AppTheme) => void;
  setFontSize: (size: AppFontSize) => void;
  setLanguage: (lang: AppLanguage) => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      saveToGallery: false,
      highResAudio: false,
      theme: 'dark',
      fontSize: 'medium',
      language: 'en',
      
      setSaveToGallery: (saveToGallery) => set({ saveToGallery }),
      setHighResAudio: (highResAudio) => set({ highResAudio }),
      setTheme: (theme) => set({ theme }),
      setFontSize: (fontSize) => set({ fontSize }),
      setLanguage: (language) => set({ language }),
    }),
    {
      name: 'context_lens_settings_zustand',
    }
  )
);
