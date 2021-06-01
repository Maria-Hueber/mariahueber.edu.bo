const { __, sprintf } = wp.i18n;
const { Card, CardBody } = wp.components;
const { useState, useEffect, useRef } = wp.element;

import Loading from "@/admin/settings/components/Loading";
import apiFetch from "@/shared/services/fetch";

export default (props) => {
  const { video_id, startDate, endDate } = props;
  const [loading, setLoading] = useState(true);
  const [views, setViews] = useState(0);

  const fetchTimeline = () => {
    setLoading(true);
    apiFetch({
      path: wp.url.addQueryArgs(
        `/presto-player/v1/analytics/video/${video_id}/views`,
        {
          start: startDate.toISOString(),
          end: endDate.toISOString(),
        }
      ),
    })
      .then((views) => {
        setViews(views);
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchTimeline();
  }, [startDate, endDate]);

  if (loading) {
    return (
      <Card>
        <CardBody>
          <Loading />
        </CardBody>
      </Card>
    );
  }

  return (
    <Card className="presto-player__stat-card">
      <CardBody>
        <div className="presto-subtitle">
          {__("Unique Views", "presto-player")}
        </div>
        <h1>{views}</h1>
      </CardBody>
    </Card>
  );
};
