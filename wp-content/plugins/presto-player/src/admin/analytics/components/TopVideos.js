const { __, sprintf } = wp.i18n;
const { Card, CardBody, Flex, FlexBlock, Button, ButtonGroup } = wp.components;
const { useState, useEffect, useRef } = wp.element;
import { history } from "@/router/context";

import Loading from "@/admin/settings/components/Loading";
import apiFetch from "@/shared/services/fetch";

export default (props) => {
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    total: 0,
    start: 0,
    end: 0,
  });
  const [page, setPage] = useState(1);
  const [per_page, setPerPage] = useState(10);
  const [data, setData] = useState([]);
  const [hasPrevious, setHasPrevious] = useState(false);
  const [hasNext, setHasNext] = useState(false);
  const { startDate, endDate } = props;

  const fetchVideos = () => {
    setLoading(true);
    apiFetch({
      path: wp.url.addQueryArgs("/presto-player/v1/analytics/top-videos", {
        start: startDate.toISOString(),
        end: endDate.toISOString(),
        page,
        per_page,
      }),
      parse: false,
    })
      .then((res) => {
        const total = res.headers ? parseInt(res.headers.get("X-WP-Total")) : 0;
        const totalPages = Math.ceil(total / per_page);
        const end = Math.min(per_page * page, total);

        // items per page 4
        // times page
        if (total) {
          setPagination({
            total,
            totalPages,
            start: Math.max(end - (per_page - 1), 1),
            end: end,
          });
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const navigate = (id) => {
    history.push(`#/video/${id}`);
  };

  useEffect(() => {
    fetchVideos();
  }, [startDate, endDate, page]);

  useEffect(() => {
    setHasPrevious(page - 1 > 0);
    setHasNext(pagination?.totalPages >= page + 1);
  }, [pagination]);

  const nextPage = () => {
    setPage(Math.min(pagination?.totalPages, page + 1));
  };
  const prevPage = () => {
    setPage(Math.max(page - 1, 0));
  };

  if (loading) {
    return (
      <Card size="large" className="presto-card">
        <Loading />
      </Card>
    );
  }

  if (!data.length) {
    return (
      <Card size="large" className="presto-card">
        <CardBody className="presto-flow">
          <div className="presto-card__title">
            {__("Top Videos", "presto-player")}
          </div>
          <div style={{ opacity: 0.65 }}>
            {__("No views.", "presto-player")}
          </div>
        </CardBody>
      </Card>
    );
  }

  return (
    <Card size="large" className="presto-card">
      <CardBody className="presto-flow">
        <div className="presto-card__title">
          {__("Top Videos", "presto-player")}
        </div>
        <table role="table" className="presto-table is-clickable">
          <thead role="rowgroup">
            <tr role="row">
              <th role="columnheader">{__("Name", "presto-player")}</th>
              {data[0]?.stats &&
                data[0]?.stats.map((stat) => {
                  return (
                    <th key={stat.title} role="columnheader">
                      {stat.title}
                    </th>
                  );
                })}
              <th role="columnheader"></th>
            </tr>
          </thead>

          <tbody role="rowgroup">
            {data.length &&
              data.map((data) => {
                return (
                  <tr
                    key={data?.video?.id}
                    role="row"
                    onClick={() => {
                      navigate(data?.video?.id);
                    }}
                  >
                    <td role="cell" data-title={__("Name", "presto-player")}>
                      <h3 style={{ marginBottom: 0 }}>
                        {data?.video?.title || __("Untitled", "presto-player")}
                      </h3>
                      {data?.video?.date}
                    </td>
                    {data?.stats.length &&
                      data?.stats.map((stat) => {
                        return (
                          <td role="cell" key={stat.id} aria-label={stat.title}>
                            <div className={stat?.className}>{stat.data}</div>
                          </td>
                        );
                      })}
                    <td>
                      <span
                        style={{
                          color: "var(--wp-admin-theme-color, #007cba)",
                        }}
                      >
                        {__("View Details", "presto-player")} &rarr;
                      </span>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {!!pagination?.total && (
          <Flex>
            <FlexBlock>
              {sprintf(
                __("Showing %1s to %2s of %3s", "presto-player"),
                pagination?.start,
                pagination?.end,
                pagination?.total
              )}
            </FlexBlock>
            <FlexBlock>
              <Flex justify="flex-end">
                {
                  <ButtonGroup>
                    <Button
                      isSecondary
                      disabled={!hasPrevious}
                      onClick={prevPage}
                    >
                      {__("Previous", "presto-player")}
                    </Button>
                    <Button isSecondary disabled={!hasNext} onClick={nextPage}>
                      {__("Next", "presto-player")}
                    </Button>
                  </ButtonGroup>
                }
              </Flex>
            </FlexBlock>
          </Flex>
        )}
      </CardBody>
    </Card>
  );
};
