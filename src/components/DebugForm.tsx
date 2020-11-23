import { ReactElement } from "react";
import { Pre } from "./Styled";

interface DebugFormProps<TValues> {
  data: TValues;
  isValid?: boolean;
}

export function DebugForm<TValues extends Record<string, any>>({
  data,
  isValid = false,
}: DebugFormProps<TValues>): ReactElement {
  return <Pre>{JSON.stringify({ isValid, ...data }, null, 2)}</Pre>;
}
