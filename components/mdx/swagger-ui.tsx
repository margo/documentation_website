'use client';

import SwaggerUIReact from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import './swagger-monokai-dark.css';

export function SwaggerUI(props: any) {
  return <SwaggerUIReact {...props} />;
}

