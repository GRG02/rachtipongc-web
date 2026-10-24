"use client";

import { Drawer as ChakraDrawer, Portal } from "@chakra-ui/react";
import * as React from "react";

export type DrawerRootProps = ChakraDrawer.RootProps;

export const DrawerRoot = (props: DrawerRootProps) => {
  return <ChakraDrawer.Root {...props} />;
};

export interface DrawerContentProps extends ChakraDrawer.ContentProps {
  portalled?: boolean;
  portalRef?: React.RefObject<HTMLElement>;
  backdrop?: boolean;
}

export const DrawerContent = React.forwardRef<
  HTMLDivElement,
  DrawerContentProps
>(function DrawerContent(props, ref) {
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
        <ChakraDrawer.Backdrop
          position="fixed"
          inset="0"
          bg="rgba(0, 0, 0, 0.75)"
          backdropFilter="blur(6px)"
          zIndex={1000}
        />
      )}
      <ChakraDrawer.Positioner
        position="fixed"
        insetY="0"
        right="0"
        zIndex={1001}
        display="flex"
        alignItems="stretch"
      >
        <ChakraDrawer.Content
          ref={ref}
          bg="#121215"
          h="100%"
          boxShadow="-10px 0 30px rgba(0, 0, 0, 0.8)"
          {...rest}
        >
          {children}
        </ChakraDrawer.Content>
      </ChakraDrawer.Positioner>
    </Portal>
  );
});

export const DrawerCloseTrigger = ChakraDrawer.CloseTrigger;
export const DrawerHeader = ChakraDrawer.Header;
export const DrawerTitle = ChakraDrawer.Title;
export const DrawerDescription = ChakraDrawer.Description;
export const DrawerBody = ChakraDrawer.Body;
export const DrawerFooter = ChakraDrawer.Footer;
export const DrawerActionTrigger = ChakraDrawer.ActionTrigger;
export const DrawerTrigger = ChakraDrawer.Trigger;
