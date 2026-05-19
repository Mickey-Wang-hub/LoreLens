export const triggerHaptic = (pattern: number | number[] = 50) => {
  if (typeof window !== 'undefined' && navigator.vibrate) {
    // navigator.vibrate can fail in some cross-origin iframes without permissions, 
    // but we wrap it in a try-catch just in case or just let it attempt
    try {
      navigator.vibrate(pattern);
    } catch (e) {
      console.warn('Vibration API error', e);
    }
  }
};
