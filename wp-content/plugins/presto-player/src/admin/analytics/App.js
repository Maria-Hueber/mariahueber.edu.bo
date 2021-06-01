import Dashboard from "./pages/Dashboard";
import Video from "./pages/Video";
import AnalyticsUpgrade from "./pages/AnalyticsUpgrade";

import { Router, Route } from "@/router";
import { routes } from "./routes";

export default () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  if (!prestoPlayer?.isPremium) {
    return (
      <div className="presto-dashboard__content">
        <AnalyticsUpgrade />
      </div>
    );
  }

  return (
    <div className="presto-dashboard__content">
      <Router routes={routes}>
        <Route path={routes.dashboard.path} onRoute={scrollToTop}>
          <Dashboard />
        </Route>
        <Route path={routes.video.path} onRoute={scrollToTop}>
          <Video />
        </Route>
      </Router>
    </div>
  );
};
