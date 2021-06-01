import { RouterContext } from "./context";
const { useContext } = wp.element;
import { match } from "path-to-regexp";

export function Route({ path, onRoute, children }) {
  // Extract route from RouterContext
  const { route } = useContext(RouterContext);

  const checkMatch = match(`${path}`);
  const matched = checkMatch(`${route.hash.substr(1)}`);

  if (!matched) {
    return null;
  }

  if (onRoute) {
    onRoute();
  }

  return <div>{wp.element.cloneElement(children, { route: matched })}</div>;
}
