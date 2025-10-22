import React from 'react';
import { createFileRoute, Outlet } from '@tanstack/react-router';


export const Route = createFileRoute('/_breadcrumbsLayout/$accountId/vulnerabilities/_externalProjectionsLayout')({
  component: Outlet,
});