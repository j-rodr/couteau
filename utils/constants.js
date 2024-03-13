import { Dimensions } from 'react-native';

export const SCREEN = {
  height: Dimensions.get('screen').height,
  width: Dimensions.get('screen').width,
};

export const HORIZONTAL_SPACING = 25;

export async function tryCatch(onTry, onFinally) {
  try {
    await onTry();
  } catch (error) {
    throw new Error(`Ha ocurrido un error: ${error}`);
  } finally {
    onFinally();
  }
}
