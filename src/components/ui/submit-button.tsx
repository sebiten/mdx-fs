"use client";

import { useFormStatus } from "react-dom";
import { type ComponentProps } from "react";
import { Button } from "./button";

type Props = ComponentProps<"button"> & {
  pendingText?: string;
  variant?: string | any;
};

export function SubmitButton({
  children,
  variant,
  pendingText,
  ...props
}: Props) {
  const { pending, action } = useFormStatus();

  const isPending = pending && action === props.formAction;

  return (
    <Button variant={variant} {...props} type="submit" aria-disabled={pending}>
      {isPending ? pendingText : children}
    </Button>
  );
}
