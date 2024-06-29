import consola from "consola";

export const createLogger = (prefix?: string) => {
  const logger = consola.create({ defaults: { tag: prefix } });
  return { logger };
};
