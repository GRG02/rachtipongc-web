"use client";

import { Dialog as ChakraDialog, Portal } from "@chakra-ui/react";
import * as React from "react";

export type DialogRootProps = ChakraDialog.RootProps;

export const DialogRoot = (props: DialogRootProps) => {
  return <ChakraDialog.Root {...props} />;
};

export interface DialogContentProps extends ChakraDialog.ContentProps {
  portalled?: boolean;
  portalRef?: React.RefObject<HTMLElement>;
  backdrop?: boolean;
}

export const DialogContent = React.forwardRef<
  HTMLDivElement,
  DialogContentProps
>(function DialogContent(props, ref) {
  const {
    children,
    portalled = true,
    portalRef,
    backdrop = true,
    ...rest
  } = props;

  return (
    <Portal disabled={!portalled} container={portalRef}>
      {backdrop && (
        <ChakraDialog.Backdrop
          position="fixed"
          inset="0"
          bg="rgba(0, 0, 0, 0.8)"
          backdropFilter="blur(8px)"
          zIndex={1000}
        />
      )}
      <ChakraDialog.Positioner
        position="fixed"
        inset="0"
        zIndex={1001}
        display="flex"
        alignItems="center"
        justifyContent="center"
        p={{ base: 4, sm: 6 }}
        overflowY="auto"
      >
        <ChakraDialog.Content
          ref={ref}
          maxW="720px"
          w="100%"
          bg="#17181c"
          borderRadius="2xl"
          overflow="hidden"
          boxShadow="0 25px 60px rgba(0, 0, 0, 0.9), 0 0 30px rgba(155, 219, 107, 0.2)"
          {...rest}
        >
          {children}
        </ChakraDialog.Content>
      </ChakraDialog.Positioner>
    </Portal>
  );
});

export const DialogCloseTrigger = ChakraDialog.CloseTrigger;
export const DialogHeader = ChakraDialog.Header;
export const DialogTitle = ChakraDialog.Title;
export const DialogDescription = ChakraDialog.Description;
export const DialogBody = ChakraDialog.Body;
export const DialogFooter = ChakraDialog.Footer;
export const DialogActionTrigger = ChakraDialog.ActionTrigger;
