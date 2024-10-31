import { json } from "@remix-run/node";

export function loader() {
  return json(undefined, { status: 200 });
}
