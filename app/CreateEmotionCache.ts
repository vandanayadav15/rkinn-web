import createCache from '@emotion/cache';

export default function CreateEmotionCache() {
  return createCache({ key: 'css' });
}
