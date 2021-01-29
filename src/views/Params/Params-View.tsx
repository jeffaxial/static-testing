import React, { useEffect, useState } from 'react';
import queryString, { ParsedQuery } from 'query-string';

function ParamsView(props: any) {
  const [queryParams, setQueryParams] = useState<ParsedQuery<string>>({});

  useEffect(() => {
    const parsedQueryParams = queryString.parse(props.location.search);
    setQueryParams(parsedQueryParams);
  }, [props.location.search]);

  return (
    <div className="ParamsView">
      <h1>Params</h1>
      <div>
        <strong>Param:</strong> {props.match.params ? props.match.params.param : undefined}
      </div>
      {Object.keys(queryParams).length ? (
        <div style={{ marginTop: '20px' }}>
          <strong>Query Params: </strong>
          {Object.keys(queryParams).map((key: string, index: number) => {
            return (
              <div key={index}>
                {key}: {queryParams[key]}
              </div>
            );
          })}
        </div>
      ) : undefined}
    </div>
  );
}

export default ParamsView;
