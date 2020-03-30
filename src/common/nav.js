"use strict"
import React from 'react';
import Loadable from 'react-loadable'
function Loading() {
  return (
    <div>loading</div>
 );
}
const createLoadable = component => Loadable({
  loader: () => component(),
  loading: Loading,
})
export const router = [
  {
    name: '用户',
    path: '/user',
    layout: 'UserLayout',
    component: createLoadable(() => import('@/layout/UserLayout')),
    routes: [{
      name: '登录',
      path: '/user/login',
      exact: true,
      component: createLoadable(() => import('@/pages/Login')),
    }, {
      name: '注册',
      exact: true,
      path: '/user/register',
      component: createLoadable(() => import('@/pages/Home')),
    }]
  },
  {
    name: '首页',
    path: '/home',
    layout: 'BasicLayout',
    component: createLoadable(() => import('@/layout/BasicLayout')),
    routes: [{
      path: '/overview',
      exact: true,
      component: createLoadable(() => import('@/pages/Home')),
    }, {
      name: '商城',
      path: '/mall',
      exact: true,
      component: createLoadable(() => import('@/pages/Mall')),
    }]
  }
]