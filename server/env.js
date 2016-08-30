export function getEnvVar(key) {
  const value = process.env[key];
  if (process.env.NODE_ENV !== 'test' && !value) {
    throw new Error(`Missing ${key} env var`);
  }
  return value;
}
