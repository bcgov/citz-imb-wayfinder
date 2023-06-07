/**
 * @summary A reusable component used for routing to different pages
 * @param content - is the content that will render between the routing Link
 * @param path - is the path the Link will route to
 * @type {(content: React.ReactNode, path: string)}
 * @author Dallas Richmond
 */
import React from 'react';
import {
  Link,
} from 'react-router-dom';

export type RoutingLinkProps = {
  content?: React.ReactNode;
  path: string;
}

export default function RoutingLink({
  content,
  path,
}: RoutingLinkProps) {
  return (
    <Link to={path}>
      {content}
    </Link>
  );
}

RoutingLink.defaultProps = {
  content: <div />,
};
