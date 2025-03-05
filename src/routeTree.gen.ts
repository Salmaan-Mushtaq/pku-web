/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as FarzanaImport } from './routes/farzana'
import { Route as IndexImport } from './routes/index'
import { Route as DemoTanstackQueryImport } from './routes/demo.tanstack-query'

// Create/Update Routes

const FarzanaRoute = FarzanaImport.update({
  id: '/farzana',
  path: '/farzana',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const DemoTanstackQueryRoute = DemoTanstackQueryImport.update({
  id: '/demo/tanstack-query',
  path: '/demo/tanstack-query',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/farzana': {
      id: '/farzana'
      path: '/farzana'
      fullPath: '/farzana'
      preLoaderRoute: typeof FarzanaImport
      parentRoute: typeof rootRoute
    }
    '/demo/tanstack-query': {
      id: '/demo/tanstack-query'
      path: '/demo/tanstack-query'
      fullPath: '/demo/tanstack-query'
      preLoaderRoute: typeof DemoTanstackQueryImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/farzana': typeof FarzanaRoute
  '/demo/tanstack-query': typeof DemoTanstackQueryRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/farzana': typeof FarzanaRoute
  '/demo/tanstack-query': typeof DemoTanstackQueryRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/farzana': typeof FarzanaRoute
  '/demo/tanstack-query': typeof DemoTanstackQueryRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/farzana' | '/demo/tanstack-query'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/farzana' | '/demo/tanstack-query'
  id: '__root__' | '/' | '/farzana' | '/demo/tanstack-query'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  FarzanaRoute: typeof FarzanaRoute
  DemoTanstackQueryRoute: typeof DemoTanstackQueryRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  FarzanaRoute: FarzanaRoute,
  DemoTanstackQueryRoute: DemoTanstackQueryRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/farzana",
        "/demo/tanstack-query"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/farzana": {
      "filePath": "farzana.tsx"
    },
    "/demo/tanstack-query": {
      "filePath": "demo.tanstack-query.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
