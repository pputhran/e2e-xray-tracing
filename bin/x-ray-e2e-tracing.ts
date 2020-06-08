#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { XRayE2ETracingStack } from '../lib/x-ray-e2e-tracing-stack';

const app = new cdk.App();
new XRayE2ETracingStack(app, 'XRayE2ETracingStack');
