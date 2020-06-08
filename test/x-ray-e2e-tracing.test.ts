import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as XRayE2ETracing from '../lib/x-ray-e2e-tracing-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new XRayE2ETracing.XRayE2ETracingStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
