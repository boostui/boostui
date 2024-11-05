// providers/DialogProvider/index.ts
import { useContext } from 'react'
import Context, { DialogContextType } from './Context'
import Provider from './DialogProvider'

/**
 * Custom hook to access the Dialo context.
 *
 * @function
 * @returns {DialogContextType} The Dialog context value.
 * @throws {Error} If used outside of an DialogProvider.
 * @example
 * const Dialog = useDialog();
 * console.log(Dialog.isDialogenticated);
 */
function useDialog(): DialogContextType {
  const context = useContext(Context)

  if (!context) {
    throw new Error('useDialog must be used within an DialogProvider')
  }

  return context
}

export { Context as DialogContext, Provider as DialogProvider, useDialog }
