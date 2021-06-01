const { __ } = wp.i18n;

const { Flex, FlexBlock, FlexItem, Spinner, Button, Disabled, CardBody } =
  wp.components;

import { history } from "@/router/context";
const { useEffect, useState } = wp.element;
const { apiFetch } = wp;
import VideoTimeline from "../components/VideoTimeline";
import VideoViews from "../components/VideoViews";
import VideoAverageWatchTime from "../components/VideoAverageWatchTime";
import DatePicker from "../components/DatePicker";
import Player from "@/admin/blocks/shared/Player";

const Video = ({ route }) => {
  const [loading, setLoading] = useState(true);
  const [video, setVideo] = useState({});
  const [startDate, setStartDate] = useState(
    new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
  );
  const [endDate, setEndDate] = useState(new Date());
  const [error, setError] = useState("");

  const back = () => {
    history.push(`#/`);
  };

  const getVideo = async () => {
    setLoading(true);
    try {
      let video = await apiFetch({
        url: `${prestoPlayer?.root}${prestoPlayer?.prestoVersionString}videos/${route?.params?.id}`,
      });

      setVideo(video);
    } catch (e) {
      if (e.code === "rest_no_route") {
        setError("Video Not Found");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getVideo();
  }, []);

  if (error) {
    return (
      <div className="presto-flow">
        <Flex>
          <FlexBlock>
            <h2>{error}</h2>
          </FlexBlock>
        </Flex>
      </div>
    );
  }

  return (
    <div className="presto-flow">
      <Flex>
        <FlexBlock>
          <Button isSecondary onClick={back}>
            &larr; {__("Back to Dashboard", "presto-player")}
          </Button>
        </FlexBlock>
      </Flex>
      <Flex>
        <FlexBlock>
          {loading ? (
            <Spinner />
          ) : (
            <h1 className="presto-dashboard__title">{video?.title}</h1>
          )}
        </FlexBlock>
        <FlexItem>
          <DatePicker
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
          />
        </FlexItem>
      </Flex>

      <div className="presto-dashboard presto-flow">
        <div className="presto-dashboard__row">
          <div className="presto-dashboard__item is-large">
            <VideoViews
              video_id={route?.params?.id}
              startDate={startDate}
              endDate={endDate}
            />
          </div>
          <div className="presto-dashboard__item">
            {!!Object.keys(video || {}).length && (
              <Player
                src={video?.src}
                attributes={{}}
                type={video?.type}
                preset={{
                  "play-large": true,
                }}
              />
            )}
          </div>
          <div className="presto-dashboard__item">
            <VideoAverageWatchTime
              video_id={route?.params?.id}
              startDate={startDate}
              endDate={endDate}
            />
          </div>
        </div>
        <div className="presto-dashboard__row">
          <div className="presto-dashboard__item is-large">
            <VideoTimeline
              video_id={route?.params?.id}
              startDate={startDate}
              endDate={endDate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
