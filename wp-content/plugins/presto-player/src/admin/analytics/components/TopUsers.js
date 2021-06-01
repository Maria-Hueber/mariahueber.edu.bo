const { __, sprintf } = wp.i18n;
const { Card, CardBody } = wp.components;
const { useState, useEffect, useRef } = wp.element;

import Loading from "@/admin/settings/components/Loading";
import apiFetch from "@/shared/services/fetch";

export default (props) => {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState([]);
  const { startDate, endDate } = props;

  const fetchUsers = () => {
    setLoading(true);
    apiFetch({
      path: wp.url.addQueryArgs("/presto-player/v1/analytics/top-users", {
        start: startDate.toISOString(),
        end: endDate.toISOString(),
        limit: 10,
      }),
    })
      .then((data) => {
        setUserData(data);
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // fetch on mount
  useEffect(() => {
    fetchUsers();
  }, [props]);

  if (loading) {
    return (
      <Card>
        <Loading />
      </Card>
    );
  }

  if (!userData.length) {
    return (
      <Card size="large" className="presto-card">
        <CardBody className="presto-flow">
          <div className="presto-card__title">
            {__("Top Users", "presto-player")}
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
          {__("Top Users", "presto-player")}
        </div>
        <table role="table" className="presto-table">
          <thead role="rowgroup">
            <tr role="row">
              <th role="columnheader">{__("Name", "presto-player")}</th>
              {userData[0]?.stats &&
                userData[0]?.stats.map((stat) => {
                  return (
                    <th key={stat.title} role="columnheader">
                      {stat.title}
                    </th>
                  );
                })}
            </tr>
          </thead>

          <tbody role="rowgroup">
            {userData.length &&
              userData.map((data) => {
                return (
                  <tr key={data?.user?.id} role="row">
                    <td role="cell" data-title={__("Name", "presto-player")}>
                      {data?.user?.name}
                    </td>
                    {data?.stats.length &&
                      data?.stats.map((stat) => {
                        return (
                          <td role="cell" key={stat.id} aria-label={stat.title}>
                            <div className={stat?.className}>{stat.data}</div>
                          </td>
                        );
                      })}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
};
