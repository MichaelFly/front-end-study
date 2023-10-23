import { createRouteLoader, WrapRouteComponent, RouteErrorComponent } from '@ice/runtime';
import type { CreateRoutes } from '@ice/runtime';
const createRoutes: CreateRoutes = ({
  requestContext,
  renderMode,
}) => ([
  {
    path: '',
    async lazy() {
      const componentModule = await import(/* webpackChunkName: "p_layout" */ '@/pages/layout');
      return {
        ...componentModule,
        Component: () => WrapRouteComponent({
          routeId: 'layout',
          isLayout: true,
          routeExports: componentModule,
        }),
        loader: createRouteLoader({
          routeId: 'layout',
          requestContext,
          renderMode,
          module: componentModule,
        }),
      };
    },
    errorElement: <RouteErrorComponent />,
    componentName: 'layout',
    index: undefined,
    id: 'layout',
    exact: true,
    exports: ["default"],
    layout: true,
    children: [{
      path: 'blog',
      async lazy() {
      const componentModule = await import(/* webpackChunkName: "p_blog-index" */ '@/pages/blog/index');
      return {
        ...componentModule,
        Component: () => WrapRouteComponent({
          routeId: 'blog',
          isLayout: false,
          routeExports: componentModule,
        }),
        loader: createRouteLoader({
          routeId: 'blog',
          requestContext,
          renderMode,
          module: componentModule,
        }),
      };
    },
      errorElement: <RouteErrorComponent />,
      componentName: 'blog-index',
      index: true,
      id: 'blog',
      exact: true,
      exports: ["default"],
    },{
      path: 'blog/a',
      async lazy() {
      const componentModule = await import(/* webpackChunkName: "p_blog-a" */ '@/pages/blog/a');
      return {
        ...componentModule,
        Component: () => WrapRouteComponent({
          routeId: 'blog/a',
          isLayout: false,
          routeExports: componentModule,
        }),
        loader: createRouteLoader({
          routeId: 'blog/a',
          requestContext,
          renderMode,
          module: componentModule,
        }),
      };
    },
      errorElement: <RouteErrorComponent />,
      componentName: 'blog-a',
      index: undefined,
      id: 'blog/a',
      exact: true,
      exports: ["default"],
    },{
      path: '',
      async lazy() {
      const componentModule = await import(/* webpackChunkName: "p_index" */ '@/pages/index');
      return {
        ...componentModule,
        Component: () => WrapRouteComponent({
          routeId: '/',
          isLayout: false,
          routeExports: componentModule,
        }),
        loader: createRouteLoader({
          routeId: '/',
          requestContext,
          renderMode,
          module: componentModule,
        }),
      };
    },
      errorElement: <RouteErrorComponent />,
      componentName: 'index',
      index: true,
      id: '/',
      exact: true,
      exports: ["default"],
    },]
  },{
    path: 'en-US',
    async lazy() {
      const componentModule = await import(/* webpackChunkName: "p_layout" */ '@/pages/layout');
      return {
        ...componentModule,
        Component: () => WrapRouteComponent({
          routeId: 'en-US/layout',
          isLayout: true,
          routeExports: componentModule,
        }),
        loader: createRouteLoader({
          routeId: 'en-US/layout',
          requestContext,
          renderMode,
          module: componentModule,
        }),
      };
    },
    errorElement: <RouteErrorComponent />,
    componentName: 'layout',
    index: undefined,
    id: 'en-US/layout',
    exact: true,
    exports: ["default"],
    layout: true,
    children: [{
      path: 'blog',
      async lazy() {
      const componentModule = await import(/* webpackChunkName: "p_blog-index" */ '@/pages/blog/index');
      return {
        ...componentModule,
        Component: () => WrapRouteComponent({
          routeId: 'en-US/blog',
          isLayout: false,
          routeExports: componentModule,
        }),
        loader: createRouteLoader({
          routeId: 'en-US/blog',
          requestContext,
          renderMode,
          module: componentModule,
        }),
      };
    },
      errorElement: <RouteErrorComponent />,
      componentName: 'blog-index',
      index: true,
      id: 'en-US/blog',
      exact: true,
      exports: ["default"],
    },{
      path: 'blog/a',
      async lazy() {
      const componentModule = await import(/* webpackChunkName: "p_blog-a" */ '@/pages/blog/a');
      return {
        ...componentModule,
        Component: () => WrapRouteComponent({
          routeId: 'en-US/blog/a',
          isLayout: false,
          routeExports: componentModule,
        }),
        loader: createRouteLoader({
          routeId: 'en-US/blog/a',
          requestContext,
          renderMode,
          module: componentModule,
        }),
      };
    },
      errorElement: <RouteErrorComponent />,
      componentName: 'blog-a',
      index: undefined,
      id: 'en-US/blog/a',
      exact: true,
      exports: ["default"],
    },{
      path: '',
      async lazy() {
      const componentModule = await import(/* webpackChunkName: "p_index" */ '@/pages/index');
      return {
        ...componentModule,
        Component: () => WrapRouteComponent({
          routeId: 'en-US/',
          isLayout: false,
          routeExports: componentModule,
        }),
        loader: createRouteLoader({
          routeId: 'en-US/',
          requestContext,
          renderMode,
          module: componentModule,
        }),
      };
    },
      errorElement: <RouteErrorComponent />,
      componentName: 'index',
      index: true,
      id: 'en-US/',
      exact: true,
      exports: ["default"],
    },]
  },{
    path: 'ko-KR',
    async lazy() {
      const componentModule = await import(/* webpackChunkName: "p_layout" */ '@/pages/layout');
      return {
        ...componentModule,
        Component: () => WrapRouteComponent({
          routeId: 'ko-KR/layout',
          isLayout: true,
          routeExports: componentModule,
        }),
        loader: createRouteLoader({
          routeId: 'ko-KR/layout',
          requestContext,
          renderMode,
          module: componentModule,
        }),
      };
    },
    errorElement: <RouteErrorComponent />,
    componentName: 'layout',
    index: undefined,
    id: 'ko-KR/layout',
    exact: true,
    exports: ["default"],
    layout: true,
    children: [{
      path: 'blog',
      async lazy() {
      const componentModule = await import(/* webpackChunkName: "p_blog-index" */ '@/pages/blog/index');
      return {
        ...componentModule,
        Component: () => WrapRouteComponent({
          routeId: 'ko-KR/blog',
          isLayout: false,
          routeExports: componentModule,
        }),
        loader: createRouteLoader({
          routeId: 'ko-KR/blog',
          requestContext,
          renderMode,
          module: componentModule,
        }),
      };
    },
      errorElement: <RouteErrorComponent />,
      componentName: 'blog-index',
      index: true,
      id: 'ko-KR/blog',
      exact: true,
      exports: ["default"],
    },{
      path: 'blog/a',
      async lazy() {
      const componentModule = await import(/* webpackChunkName: "p_blog-a" */ '@/pages/blog/a');
      return {
        ...componentModule,
        Component: () => WrapRouteComponent({
          routeId: 'ko-KR/blog/a',
          isLayout: false,
          routeExports: componentModule,
        }),
        loader: createRouteLoader({
          routeId: 'ko-KR/blog/a',
          requestContext,
          renderMode,
          module: componentModule,
        }),
      };
    },
      errorElement: <RouteErrorComponent />,
      componentName: 'blog-a',
      index: undefined,
      id: 'ko-KR/blog/a',
      exact: true,
      exports: ["default"],
    },{
      path: '',
      async lazy() {
      const componentModule = await import(/* webpackChunkName: "p_index" */ '@/pages/index');
      return {
        ...componentModule,
        Component: () => WrapRouteComponent({
          routeId: 'ko-KR/',
          isLayout: false,
          routeExports: componentModule,
        }),
        loader: createRouteLoader({
          routeId: 'ko-KR/',
          requestContext,
          renderMode,
          module: componentModule,
        }),
      };
    },
      errorElement: <RouteErrorComponent />,
      componentName: 'index',
      index: true,
      id: 'ko-KR/',
      exact: true,
      exports: ["default"],
    },]
  },
]);
export default createRoutes;
