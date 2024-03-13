export async function tryCatch(onTry, onFinally) {
  try {
    await onTry();
  } catch (error) {
    throw new Error(`Ha ocurrido un error: ${error}`);
  } finally {
    onFinally();
  }
}

