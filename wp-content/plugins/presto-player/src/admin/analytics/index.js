const { render } = wp.element;

import { defineCustomElements } from "@presto-player/components/dist/custom-elements";

defineCustomElements();

/**
 * App
 */
import App from "./App";

/**
 * styles
 */
import "./analytics.scss";

/**
 * Render
 */
render(<App />, document.getElementById("presto-analytics-page"));
