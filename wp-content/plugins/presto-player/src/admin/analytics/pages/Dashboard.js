const { __ } = wp.i18n;
const { Flex, FlexBlock, FlexItem } = wp.components;
const { useState } = wp.element;

import TopUsers from "../components/TopUsers";
import TopVideos from "../components/TopVideos";
import OverviewPanel from "../components/OverviewPanel";
import DatePicker from "../components/DatePicker";

export default function ({ match }) {
  const [startDate, setStartDate] = useState(
    new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
  );
  const [endDate, setEndDate] = useState(new Date());

  return (
    <>
      <Flex>
        <FlexBlock>
          <h1>{__("Analytics", "presto-player")}</h1>
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

      <div className="presto-flow">
        <div className="presto-dashboard">
          <div className="presto-dashboard__row">
            <div className="presto-dashboard__item is-large">
              <OverviewPanel startDate={startDate} endDate={endDate} />
              {/* <TotalViewsGraph startDate={startDate} endDate={endDate} /> */}
            </div>
            <div className="presto-dashboard__item">
              <TopUsers startDate={startDate} endDate={endDate} />
            </div>
          </div>

          <div className="presto-dashboard__row">
            <div className="presto-dashboard__item is-large">
              <TopVideos startDate={startDate} endDate={endDate} />
            </div>
          </div>
        </div>
        {/* <div>
          <TopUsers startDate={startDate} endDate={endDate} />
        </div> */}
      </div>
    </>
  );
}
