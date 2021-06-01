const { __, sprintf } = wp.i18n;
const { Card, CardBody } = wp.components;
const { useState, useEffect, useRef } = wp.element;

import Loading from "@/admin/settings/components/Loading";
import apiFetch from "@/shared/services/fetch";

export default (props) => {
  const { video_id, startDate, endDate } = props;
  const [loading, setLoading] = useState(true);
  const [time, setTime] = useState(0);

  const fetchWatchTime = () => {
    setLoading(true);
    apiFetch({
      path: wp.url.addQueryArgs(
        `/presto-player/v1/analytics/video/${video_id}/average-watchtime`,
        {
          start: startDate.toISOString(),
          end: endDate.toISOString(),
        }
      ),
    })
      .then((time) => {
        setTime(time);
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchWatchTime();
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
          {__("Average Watch Time", "presto-player")}
        </div>
        <h1>{parseInt(time)}</h1>
        <div>{__("seconds", "presto-player")}</div>
      </CardBody>
    </Card>
  );
};
