'use client';

import SwaggerUIReact, { SwaggerUIProps } from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import './swagger-monokai-dark.css';

export function SwaggerUI(props: SwaggerUIProps) {
  return <SwaggerUIReact {...props} />;
}

